// One-off migration script: converts every Jupyter notebook in src/notebooks
// into a post folder in content/posts/<slug>/:
//
//   index.md         frontmatter (title, seo...) + markdown + ```python code cells
//   output-<n>.png   image outputs of code cells
//   output-<n>.html  html outputs of code cells (pandas tables...)
//
// Outputs are wrapped in a `:::output` container right after their code cell,
// so the website knows which output belongs to which code cell.
//
// Usage: npx tsx scripts/convert-notebooks.ts <notebooks-dir> <posts-dir>

import fs from 'node:fs';
import path from 'node:path';

const [notebooksDir = 'src/notebooks', postsDir = 'content/posts'] =
  process.argv.slice(2);

type Output = {
  output_type: string;
  data?: Record<string, string | string[]>;
  text?: string | string[];
  name?: string;
  traceback?: string[];
};
type Cell = {
  cell_type: 'markdown' | 'code' | 'raw';
  source: string | string[];
  outputs?: Output[];
};

const join = (s: string | string[] | undefined) =>
  Array.isArray(s) ? s.join('') : s ?? '';

// Text outputs like "<BarContainer object of 5 artists>" or "<Figure size 640x480 with 1 Axes>"
// are just Python object reprs printed by Jupyter: noise for the reader.
const isReprNoise = (text: string) =>
  text
    .trim()
    .split('\n')
    .every(
      (l) =>
        /^<.*>$/.test(l.trim()) ||
        /^\[<.*>(, <.*>)*\]$/.test(l.trim()) ||
        /^(Text|\(?-?[\d.]+,).*\)$/.test(l.trim()) ||
        l.trim() === ''
    );

const stripAnsi = (s: string) => s.replace(/\x1b\[[0-9;]*m/g, '');

// Pick a fence longer than any backtick run in the content
const fence = (content: string, lang = '') => {
  const longest = Math.max(
    2,
    ...(content.match(/`+/g) ?? []).map((m) => m.length)
  );
  const f = '`'.repeat(longest + 1);
  return `${f}${lang}\n${content.replace(/\n+$/, '')}\n${f}`;
};

const yamlString = (s: string) => JSON.stringify(s ?? '');

let postCount = 0;
let imageCount = 0;
let htmlCount = 0;

for (const file of fs.readdirSync(notebooksDir).sort()) {
  if (!file.endsWith('.ipynb') || file.startsWith('_')) continue;
  const nb = JSON.parse(fs.readFileSync(path.join(notebooksDir, file), 'utf8'));
  const meta = nb.metadata;
  const slug: string = meta.slug;
  if (!slug) throw new Error(`No slug in ${file}`);

  const outDir = path.join(postsDir, slug);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const parts: string[] = [];
  let outputIndex = 0;

  for (const cell of nb.cells as Cell[]) {
    const source = join(cell.source).replace(/\s+$/, '');

    if (cell.cell_type === 'markdown') {
      // In posts, ```python blocks are runnable code cells. Snippets written in markdown cells
      // are only illustrations: they use ```py so they are displayed but not executed.
      if (source) parts.push(source.replace(/^(\s*`{3,})python\b/gm, '$1py'));
      continue;
    }
    if (cell.cell_type === 'raw') {
      if (source) parts.push(fence(source, 'text'));
      continue;
    }

    // Code cell
    if (source) parts.push(fence(source, 'python'));

    const rendered: string[] = [];
    for (const o of cell.outputs ?? []) {
      // Same priority as the former nteract renderer: png > html > text
      if (o.data?.['image/png']) {
        outputIndex++;
        const name = `output-${outputIndex}.png`;
        fs.writeFileSync(
          path.join(outDir, name),
          Buffer.from(join(o.data['image/png']).replace(/\n/g, ''), 'base64')
        );
        imageCount++;
        rendered.push(`![](./${name})`);
      } else if (o.data?.['text/html']) {
        outputIndex++;
        const name = `output-${outputIndex}.html`;
        fs.writeFileSync(path.join(outDir, name), join(o.data['text/html']));
        htmlCount++;
        rendered.push(`::output-html{src="./${name}"}`);
      } else if (o.data?.['text/plain']) {
        const text = join(o.data['text/plain']);
        if (!isReprNoise(text)) rendered.push(fence(text, 'text'));
      } else if (o.output_type === 'stream') {
        const text = stripAnsi(join(o.text));
        if (o.name === 'stdout' && text.trim()) rendered.push(fence(text, 'text'));
      } else if (o.output_type === 'error') {
        const text = stripAnsi((o.traceback ?? []).join('\n'));
        if (text.trim()) rendered.push(fence(text, 'text'));
      }
    }
    if (rendered.length) {
      parts.push(`:::output\n${rendered.join('\n\n')}\n:::`);
    }
  }

  const frontmatter = [
    '---',
    `title: ${yamlString(meta.title)}`,
    `description: ${yamlString(meta.description)}`,
    `seoDescription: ${yamlString(meta.seoDescription)}`,
    `keywords: ${yamlString(meta.keywords)}`,
    `family: ${yamlString(meta.family)}`,
    `chartType: ${yamlString(meta.chartType)}`,
    `slug: ${yamlString(slug)}`,
    '---',
  ].join('\n');

  fs.writeFileSync(
    path.join(outDir, 'index.md'),
    frontmatter + '\n\n' + parts.join('\n\n') + '\n'
  );
  postCount++;
}

console.log(
  `Converted ${postCount} notebooks: ${imageCount} images, ${htmlCount} html outputs`
);
