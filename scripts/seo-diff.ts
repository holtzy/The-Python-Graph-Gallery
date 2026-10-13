// Compares the SEO of the new build (out/) with a baseline build (e.g. the html currently deployed on the gh-pages branch).
//
// Usage: npx tsx scripts/seo-diff.ts <baseline-dir> [report.json]
//   <baseline-dir>: folder containing the former site html (e.g. extracted from the gh-pages branch)
//
// For every url of the baseline, it checks that the new page:
// - exists at the same url
// - has the same <title>, meta description, keywords, og:title, og:description, lang
// - keeps every h1/h2/h3 heading text and every heading id (anchors)
// - keeps every internal link
// - keeps the amount of text (flags pages losing more than 10% of words)

import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const [baselineDir, reportFile = 'seo-diff-report.json'] = process.argv.slice(2);
if (!baselineDir) {
  console.error('Usage: npx tsx scripts/seo-diff.ts <baseline-dir> [report.json]');
  process.exit(1);
}
// The build to check: out/ by default, or e.g. a folder with the html downloaded from the live site
const NEW_DIR = process.env.SEO_NEW_DIR || path.join(process.cwd(), 'out');
const DOMAIN = 'https://python-graph-gallery.com';

const listPages = (root: string): string[] => {
  const pages: string[] = [];
  const walk = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!e.isDirectory() || e.name.startsWith('_') || e.name.startsWith('~')) continue;
      const sub = path.join(dir, e.name);
      if (fs.existsSync(path.join(sub, 'index.html'))) pages.push('/' + path.relative(root, sub) + '/');
      walk(sub);
    }
  };
  walk(root);
  if (fs.existsSync(path.join(root, 'index.html'))) pages.push('/');
  return pages.sort();
};

const norm = (s: string | undefined) => (s ?? '').replace(/\s+/g, ' ').trim();
// Headings: ignore emojis / symbols and case, compare words only
const normHeading = (s: string) =>
  norm(s)
    .toLowerCase()
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

const normLink = (href: string): string | null => {
  if (!href) return null;
  let h = href.trim();
  if (h.startsWith(DOMAIN)) h = h.slice(DOMAIN.length) || '/';
  if (h.startsWith('http://python-graph-gallery.com')) h = h.slice('http://python-graph-gallery.com'.length) || '/';
  if (!h.startsWith('/') || h.startsWith('//')) return null;
  h = h.split('#')[0].split('?')[0];
  // static files
  if (/\.[a-z0-9]{2,5}$/i.test(h)) return h;
  if (!h.endsWith('/')) h += '/';
  return h;
};

type PageData = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  lang: string;
  headings: string[];
  headingIds: string[];
  links: string[];
  words: number;
};

const read = (file: string): PageData => {
  // Spaces between tags: minified html would otherwise glue table cells together
  const $ = cheerio.load(fs.readFileSync(file, 'utf8').replace(/></g, '> <'));
  const meta = (sel: string) => norm($(sel).attr('content'));
  const main = $('main').length ? $('main') : $('body');
  main.find('script, style, nav, header, footer, noscript, form').remove();
  return {
    title: norm($('head title').first().text()),
    description: meta('meta[name="description"]'),
    keywords: meta('meta[name="keywords"]'),
    ogTitle: meta('meta[property="og:title"]'),
    ogDescription: meta('meta[property="og:description"]'),
    lang: norm($('html').attr('lang')),
    headings: main
      .find('h1, h2, h3')
      .map((_, el) => normHeading($(el).text()))
      .get()
      .filter(Boolean),
    headingIds: main
      .find('h1[id], h2[id], h3[id]')
      .map((_, el) => $(el).attr('id')!)
      .get(),
    links: [
      ...new Set(
        main
          .find('a[href]')
          .map((_, el) => normLink($(el).attr('href')!))
          .get()
          .filter(Boolean) as string[]
      ),
    ],
    // Count words made of letters / digits only: robust to markup differences (code highlighting spans...)
    words: (main.text().match(/[\p{L}\p{N}_]+/gu) ?? []).length,
  };
};

const oldPages = listPages(baselineDir);
const newPages = new Set(listPages(NEW_DIR));

type Issue = { page: string; check: string; old?: unknown; new?: unknown };
const issues: Issue[] = [];
let checked = 0;

for (const page of oldPages) {
  if (!newPages.has(page)) {
    issues.push({ page, check: 'MISSING PAGE' });
    continue;
  }
  checked++;
  const o = read(path.join(baselineDir, page, 'index.html'));
  const n = read(path.join(NEW_DIR, page, 'index.html'));

  for (const key of ['title', 'description', 'keywords', 'ogTitle', 'ogDescription', 'lang'] as const) {
    if (o[key] !== n[key]) issues.push({ page, check: key, old: o[key], new: n[key] });
  }

  const newHeadings = new Set(n.headings);
  const missingHeadings = o.headings.filter((h) => !newHeadings.has(h));
  if (missingHeadings.length) issues.push({ page, check: 'missing headings', old: missingHeadings });

  const newIds = new Set(n.headingIds);
  const missingIds = o.headingIds.filter((id) => !newIds.has(id));
  if (missingIds.length) issues.push({ page, check: 'missing heading ids', old: missingIds });

  const newLinks = new Set(n.links);
  const missingLinks = o.links.filter((l) => !newLinks.has(l));
  if (missingLinks.length) issues.push({ page, check: 'missing internal links', old: missingLinks });

  if (n.words < o.words * 0.9) {
    issues.push({ page, check: 'text shrank', old: o.words, new: n.words });
  }
}

const extraPages = [...newPages].filter((p) => !oldPages.includes(p) && p !== '/404/' && p !== '/_not-found/');

// ---------- Summary
const byCheck = issues.reduce<Record<string, number>>((acc, i) => {
  acc[i.check] = (acc[i.check] ?? 0) + 1;
  return acc;
}, {});

console.log(`\nSEO diff: ${oldPages.length} baseline pages, ${checked} compared`);
console.log(`New pages not in baseline: ${extraPages.length ? extraPages.join(', ') : 'none'}`);
if (!issues.length) {
  console.log('✅ No difference found');
} else {
  console.log('Issues by type:');
  for (const [check, count] of Object.entries(byCheck)) console.log(`  ${check}: ${count}`);
}
fs.writeFileSync(reportFile, JSON.stringify({ checked, extraPages, byCheck, issues }, null, 2));
console.log(`Full report: ${reportFile}`);
