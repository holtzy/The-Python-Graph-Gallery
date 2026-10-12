// Runs before `next dev` and `next build`.
//
// 1. Copies the assets of each post (content/posts/<slug>/*.png, *.csv...) to public/posts/<slug>/
//    so they are served next to the page.
// 2. Builds lib/generated/images.json: the size of every image in public/graph and public/section,
//    and creates a lightweight webp thumbnail for each of them in public/thumbs/.
//    This replaces what gatsby-plugin-image used to do (and is much faster: thumbnails are cached).

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, 'content/posts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const GENERATED_DIR = path.join(ROOT, 'lib/generated');
const THUMB_WIDTH = 640;

const isNewer = (src: string, dest: string) =>
  !fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs;

// ---------- 1. Post assets
let copied = 0;
for (const slug of fs.readdirSync(POSTS_DIR)) {
  const dir = path.join(POSTS_DIR, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith('.md') || file.endsWith('.html')) continue;
    const src = path.join(dir, file);
    const dest = path.join(PUBLIC_DIR, 'posts', slug, file);
    if (isNewer(src, dest)) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      copied++;
    }
  }
}

// ---------- 2. Image manifest + thumbnails
type ImageInfo = {
  src: string;
  thumb: string;
  width: number;
  height: number;
};

const manifest: Record<string, Record<string, ImageInfo>> = {};

async function processFolder(folder: string) {
  const dir = path.join(PUBLIC_DIR, folder);
  const entries: Record<string, ImageInfo> = {};
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f))
    .sort();

  await Promise.all(
    files.map(async (file) => {
      const src = path.join(dir, file);
      const name = file.replace(/\.[^.]+$/, '');
      const meta = await sharp(src).metadata();
      const width = meta.width ?? 0;
      const height = meta.pageHeight ?? meta.height ?? 0;
      let thumb = `/${folder}/${file}`;

      // Animated gifs are kept as is
      if (!/\.gif$/i.test(file)) {
        const thumbRel = `thumbs/${folder}/${name}.webp`;
        const dest = path.join(PUBLIC_DIR, thumbRel);
        if (isNewer(src, dest)) {
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          await sharp(src)
            .resize({ width: Math.min(THUMB_WIDTH, width) })
            .webp({ quality: 82 })
            .toFile(dest);
        }
        thumb = `/${thumbRel}`;
      }

      entries[name] = { src: `/${folder}/${file}`, thumb, width, height };
    })
  );
  // Keep a stable, sorted order
  manifest[folder] = Object.fromEntries(
    Object.entries(entries).sort(([a], [b]) => a.localeCompare(b))
  );
}

(async () => {
  await processFolder('graph');
  await processFolder('section');
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(GENERATED_DIR, 'images.json'),
    JSON.stringify(manifest, null, 1)
  );
  console.log(
    `prepare-assets: ${copied} post assets copied, ${
      Object.keys(manifest.graph).length
    } graph + ${Object.keys(manifest.section).length} section images indexed`
  );
})();
