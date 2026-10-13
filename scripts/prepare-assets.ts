// Runs before `next dev` and `next build`.
//
// 0. Syncs static/ into public/. The static/ folder keeps its historical name in git because many
//    notebooks and external websites load files from
//    https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/...
// 1. Copies the assets of each post (content/posts/<slug>/*.png, *.csv...) to public/posts/<slug>/
//    so they are served next to the page. Each png chart also gets lighter webp versions:
//    <name>-800.webp and <name>-1600.webp (used in the page with srcset), <name>-thumb.webp (480px, related posts).
// 2. Builds lib/generated/images.json: the size of every image in public/graph and public/section,
//    and creates a lightweight webp thumbnail for each of them in public/thumbs/.
//    Thumbnails are cached: only new or modified images are processed.
// 3. Builds lib/generated/lastmod.json: the date of the last commit of each post and page,
//    used for the sitemap and the structured data.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, 'content/posts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const GENERATED_DIR = path.join(ROOT, 'lib/generated');
const THUMB_WIDTH = 640;

const isNewer = (src: string, dest: string) =>
  !fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs;

// ---------- 0. static/ -> public/ (incremental)
execFileSync('rsync', ['-a', path.join(ROOT, 'static') + '/', PUBLIC_DIR + '/']);

// ---------- 1. Post assets
export const POST_IMAGE_WIDTHS = [800, 1600];
let copied = 0;
let converted = 0;
const postImages: { src: string; destDir: string; name: string }[] = [];
for (const slug of fs.readdirSync(POSTS_DIR)) {
  const dir = path.join(POSTS_DIR, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith('.md') || file.endsWith('.html')) continue;
    const src = path.join(dir, file);
    const dest = path.join(PUBLIC_DIR, 'posts', slug, file);
    if (file.endsWith('.png')) {
      postImages.push({ src, destDir: path.dirname(dest), name: file.replace(/\.png$/, '') });
    }
    // Pages only use the webp versions of the charts. The png is kept for output-1 only:
    // it is the image shown when a post is shared on social media.
    if (file.endsWith('.png') && file !== 'output-1.png') continue;
    if (isNewer(src, dest)) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      copied++;
    }
  }
}

// webp versions of the post charts (only new or modified charts are processed)
async function convertPostImages() {
  const queue = [...postImages];
  const worker = async () => {
    while (queue.length) {
      const { src, destDir, name } = queue.shift()!;
      const targets = [
        ...POST_IMAGE_WIDTHS.map((w) => ({ file: `${name}-${w}.webp`, width: w })),
        { file: `${name}-thumb.webp`, width: 480 },
      ];
      for (const { file, width } of targets) {
        const dest = path.join(destDir, file);
        if (!isNewer(src, dest)) continue;
        await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
        converted++;
      }
    }
  };
  await Promise.all(Array.from({ length: 8 }, worker));
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

// ---------- 3. Last modification date of each post / page, from git (one single git call)
function buildLastModified() {
  const dates: Record<string, string> = {};
  try {
    const log = execFileSync('git', ['log', '--format=>%cI', '--name-only', '--', 'content/posts', 'app'], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 256 * 1024 * 1024,
    });
    let current = '';
    for (const line of log.split('\n')) {
      if (line.startsWith('>')) current = line.slice(1);
      // The log is sorted from the most recent commit: keep the first date seen for each file
      else if (line && !dates[line]) dates[line] = current;
    }
  } catch {
    console.warn('prepare-assets: git not available, no last modification dates');
  }
  return dates;
}

(async () => {
  await convertPostImages();
  await processFolder('graph');
  await processFolder('section');
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  fs.writeFileSync(path.join(GENERATED_DIR, 'lastmod.json'), JSON.stringify(buildLastModified()));
  fs.writeFileSync(
    path.join(GENERATED_DIR, 'images.json'),
    JSON.stringify(manifest, null, 1)
  );
  console.log(
    `prepare-assets: ${copied} post assets copied, ${converted} webp post images created, ${
      Object.keys(manifest.graph).length
    } graph + ${Object.keys(manifest.section).length} section images indexed`
  );
})();
