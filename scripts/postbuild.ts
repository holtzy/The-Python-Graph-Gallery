// Runs after `next build`. Writes, in out/:
// - sitemap-index.xml + sitemap-0.xml: same file names and format as the historical sitemap
//   (they are registered in the Google Search Console)
// - robots.txt
// - .nojekyll: GitHub Pages would otherwise ignore the _next/ folder

import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const SITE_URL = 'https://python-graph-gallery.com';
// Pages not listed in the sitemap (basic-template: the template of the posts, not indexed)
const EXCLUDED = new Set(['/404/', '/_not-found/', '/basic-template/']);

const urls: string[] = [];
const walk = (dir: string) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('_next') || entry.name === 'static') continue;
    const sub = path.join(dir, entry.name);
    if (fs.existsSync(path.join(sub, 'index.html'))) {
      urls.push('/' + path.relative(OUT, sub).split(path.sep).join('/') + '/');
    }
    walk(sub);
  }
};
urls.push('/');
walk(OUT);

// Next.js also serves a root folder named "static" at /static/ (legacy feature). Nothing uses these
// urls (the files are served at the root of the site): remove this duplicate.
fs.rmSync(path.join(OUT, 'static'), { recursive: true, force: true });

const pages = urls.filter((u) => !EXCLUDED.has(u)).sort();

// Date of the last commit of the source of each page (computed by scripts/prepare-assets.ts)
const lastModified: Record<string, string> = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'lib/generated/lastmod.json'), 'utf8')
);
const sourceOf = (page: string) => {
  if (page === '/') return 'app/page.tsx';
  const slug = page.slice(1, -1);
  return fs.existsSync(path.join(process.cwd(), 'content/posts', slug)) ? `content/posts/${slug}/index.md` : `app/${slug}/page.tsx`;
};
const lastmodTag = (page: string) => {
  const date = lastModified[sourceOf(page)];
  return date ? `<lastmod>${date.slice(0, 10)}</lastmod>` : '';
};

const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">' +
  pages
    .map((p) => `<url><loc>${SITE_URL}${p}</loc>${lastmodTag(p)}<changefreq>daily</changefreq><priority>0.7</priority></url>`)
    .join('') +
  '</urlset>';

const index = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${SITE_URL}/sitemap-0.xml</loc></sitemap></sitemapindex>`;

fs.writeFileSync(path.join(OUT, 'sitemap-0.xml'), sitemap);
fs.writeFileSync(path.join(OUT, 'sitemap-index.xml'), index);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`postbuild: sitemap with ${pages.length} urls, robots.txt, .nojekyll`);
