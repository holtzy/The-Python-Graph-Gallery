import fs from 'node:fs';
import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import { visit, SKIP } from 'unist-util-visit';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import sharp from 'sharp';
import type { Root as HastRoot, Element, ElementContent } from 'hast';
import type { Root as MdastRoot } from 'mdast';
import { highlightCode } from './highlight';
import CodeCell from '@/components/post/CodeCell';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';

// Renders the markdown body of a post into React elements, at build time.
//
// Post syntax (see content/posts/*/index.md):
//   ```python            -> a runnable code cell
//   :::output ... :::     -> the output(s) of the code cell right above
//   ::output-html{src}    -> an html output (pandas table...) stored in a separate file
//   ```py / ```text       -> code displayed but never executed

export type PostCell = {
  index: number;
  code: string;
  highlighted: string;
  // true when the static output contains a chart (image)
  hasChart?: boolean;
  intro?: Element;
  output?: Element;
};

// ---------- remark: handle directives
const remarkPostDirectives = (postDir: string) => () => (tree: MdastRoot) => {
  visit(tree, (node: any, index, parent: any) => {
    if (node.type === 'containerDirective' && node.name === 'output') {
      node.data = { hName: 'div', hProperties: { className: ['cell-output'] } };
      return;
    }
    if (node.type === 'leafDirective' && node.name === 'output-html') {
      const file = path.join(postDir, node.attributes?.src ?? '');
      const html = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
      parent.children[index!] = {
        type: 'html',
        value: `<div class="cell-output-html">${html}</div>`,
      };
      return SKIP;
    }
    // Any other directive is a false positive (e.g. "font weight:bold" in a sentence): restore it as text.
    if (
      node.type === 'textDirective' ||
      node.type === 'leafDirective' ||
      node.type === 'containerDirective'
    ) {
      const prefix = node.type === 'textDirective' ? ':' : node.type === 'leafDirective' ? '::' : ':::';
      const label = (node.children ?? [])
        .map((c: any) => c.value ?? '')
        .join('');
      parent.children[index!] = {
        type: 'text',
        value: prefix + node.name + (label ? `[${label}]` : ''),
      };
      return SKIP;
    }
  });
};

// ---------- rehype: images, scripts
//
// - local charts (./output-3.png) are served as webp, with a srcset (see scripts/prepare-assets.ts)
// - images without alt text get a descriptive one: "<post title>: <title of the section>"
const rehypePostAssets =
  (slug: string, postDir: string, title: string) => () => async (tree: HastRoot) => {
    const images: { img: Element; section?: string }[] = [];
    let section: string | undefined;
    // Number of images already seen in each section, to make their alt text unique
    const perSection: Record<string, number> = {};

    // Document order: remember the last section title seen before each image
    visit(tree, 'element', (node: Element, index, parent: any) => {
      // Scripts of html outputs (plotly, bokeh...) were never executed on the site: drop them.
      if (node.tagName === 'script') {
        parent.children.splice(index, 1);
        return [SKIP, index];
      }
      if (node.tagName === 'h2' || node.tagName === 'h3') {
        section = getText(node).replace(/\s+/g, ' ').trim();
        return SKIP;
      }
      if (node.tagName === 'img') images.push({ img: node, section });
    });

    // Alt texts first, in document order (numbering must be stable)
    for (const { img, section } of images) {
      if (img.properties.alt) continue;
      const key = section ?? '';
      perSection[key] = (perSection[key] ?? 0) + 1;
      const base = section && section.toLowerCase() !== title.toLowerCase() ? `${title}: ${section}` : title;
      img.properties.alt = perSection[key] > 1 ? `${base} (${perSection[key]})` : base;
    }

    await Promise.all(
      images.map(async ({ img }) => {
        const src = String(img.properties.src ?? '');
        if (src.startsWith('./') || !/^(https?:|\/|data:)/.test(src)) {
          const file = src.replace(/^\.\//, '');
          img.properties.src = `/posts/${slug}/${file}`;
          try {
            const meta = await sharp(path.join(postDir, file)).metadata();
            img.properties.width = meta.width;
            img.properties.height = meta.height;
            if (/\.png$/i.test(file)) {
              const base = `/posts/${slug}/${file.replace(/\.png$/i, '')}`;
              img.properties.src = `${base}-800.webp`;
              if ((meta.width ?? 0) > 800) {
                img.properties.srcSet = `${base}-800.webp 800w, ${base}-1600.webp 1600w`;
                img.properties.sizes = '(min-width: 820px) 780px, 100vw';
              }
            }
          } catch {
            // missing file: keep the img as is
          }
        }
        img.properties.loading = 'lazy';
        img.properties.decoding = 'async';
      })
    );
  };

const getText = (node: ElementContent): string =>
  node.type === 'text'
    ? node.value
    : 'children' in node
      ? node.children.map(getText).join('')
      : '';

const isPythonCell = (node: ElementContent) => {
  if (node.type !== 'element' || node.tagName !== 'pre') return false;
  const code = node.children[0];
  if (!code || code.type !== 'element' || code.tagName !== 'code') return false;
  const className = (code.properties.className as string[] | undefined) ?? [];
  return className.includes('language-python');
};

const isOutput = (node: ElementContent | undefined) =>
  node?.type === 'element' &&
  node.tagName === 'div' &&
  ((node.properties.className as string[] | undefined) ?? []).includes('cell-output');

// ---------- rehype: group each python code block with its output into a <notebook-cell>
//
// <notebook-cell data-index="3">
//   <cell-intro>...</cell-intro>     the paragraphs right above the code, when the cell produces a chart:
//                                    they are displayed next to the chart
//   <cell-output>...</cell-output>   the static output (chart, table, text)
// </notebook-cell>

// Text before a chart is moved next to it only if it is short enough to sit in a column
const INTRO_MAX_CHARS = 900;
const INTRO_TAGS = new Set(['p', 'ul', 'ol', 'blockquote']);

const hasImage = (node: Element | undefined): boolean => {
  let found = false;
  if (node) {
    visit(node, 'element', (n: Element) => {
      if (n.tagName === 'img') found = true;
    });
  }
  return found;
};

const rehypeCells = (cells: PostCell[]) => () => async (tree: HastRoot) => {
  const children = tree.children as ElementContent[];
  const result: ElementContent[] = [];
  const pending: Promise<void>[] = [];

  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    if (!isPythonCell(node)) {
      result.push(node);
      continue;
    }
    // Look for an output right after the code (skipping whitespace)
    let j = i + 1;
    while (children[j]?.type === 'text' && !getText(children[j]).trim()) j++;
    const output = isOutput(children[j]) ? (children[j] as Element) : undefined;
    if (output) i = j;

    // When the cell produces a chart: take the paragraphs right above it (up to the previous heading
    // or code cell), so that they are displayed next to the chart.
    const intro: ElementContent[] = [];
    if (hasImage(output)) {
      let chars = 0;
      while (result.length) {
        const prev = result[result.length - 1];
        if (prev.type === 'text' && !prev.value.trim()) {
          result.pop();
          continue;
        }
        if (prev.type !== 'element' || !INTRO_TAGS.has(prev.tagName)) break;
        chars += getText(prev).length;
        if (chars > INTRO_MAX_CHARS) break;
        intro.unshift(result.pop()!);
      }
    }

    const cell: PostCell = {
      index: cells.length,
      code: getText(node).replace(/\n$/, ''),
      highlighted: '',
      hasChart: hasImage(output),
    };
    cells.push(cell);
    pending.push(highlightCode(cell.code, 'python').then((html) => void (cell.highlighted = html)));

    result.push({
      type: 'element',
      tagName: 'notebook-cell',
      properties: { dataIndex: cell.index },
      children: [
        { type: 'element', tagName: 'cell-intro', properties: {}, children: intro },
        { type: 'element', tagName: 'cell-output', properties: {}, children: output ? output.children : [] },
      ],
    });
  }
  await Promise.all(pending);
  tree.children = result as HastRoot['children'];
};

// ---------- rehype: highlight the other code blocks (```py, ```text...)
const rehypeHighlightOthers = () => async (tree: HastRoot) => {
  const pending: Promise<void>[] = [];
  visit(tree, 'element', (node: Element) => {
    if (node.tagName !== 'pre') return;
    const code = node.children[0];
    if (!code || code.type !== 'element' || code.tagName !== 'code') return;
    const className = ((code.properties.className as string[] | undefined) ?? []).find((c) =>
      c.startsWith('language-')
    );
    const lang = className?.replace('language-', '') ?? 'text';
    if (lang === 'text') {
      node.properties.className = ['plain-output'];
      return SKIP;
    }
    const text = getText(node).replace(/\n$/, '');
    pending.push(
      highlightCode(text, lang === 'py' ? 'python' : lang).then((html) => {
        node.tagName = 'div';
        node.properties = { className: ['code-snippet'] };
        node.children = [{ type: 'raw', value: html } as any];
      })
    );
    return SKIP;
  });
  await Promise.all(pending);
};

// Place of the lead magnet in a post: before its middle section (h2),
// or after the first chart when the post has less than 2 sections, or at the end.
function insertLeadMagnet(tree: HastRoot, cells: PostCell[]) {
  const marker: Element = { type: 'element', tagName: 'lead-magnet', properties: {}, children: [] };
  const isEl = (n: HastRoot['children'][number], tag: string): n is Element => n.type === 'element' && n.tagName === tag;
  const h2s = tree.children.flatMap((n, i) => (isEl(n, 'h2') ? [i] : []));
  if (h2s.length >= 2) {
    tree.children.splice(h2s[Math.floor(h2s.length / 2)], 0, marker);
    return;
  }
  const firstChart = tree.children.findIndex((n) => isEl(n, 'notebook-cell') && cells[Number(n.properties.dataIndex)]?.hasChart);
  if (firstChart >= 0 && firstChart < tree.children.length - 1) tree.children.splice(firstChart + 1, 0, marker);
  else tree.children.push(marker);
}

export async function renderPost(
  body: string,
  {
    slug,
    dir,
    title,
    chartType,
    interactive = true,
  }: { slug: string; dir: string; title: string; chartType?: string; interactive?: boolean }
) {
  const cells: PostCell[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkDirective)
    .use(remarkPostDirectives(dir))
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypePostAssets(slug, dir, title))
    .use(rehypeCells(cells))
    .use(rehypeHighlightOthers)
    // the highlighted code of snippets is inserted as raw html: parse it
    .use(rehypeRaw);

  const tree = (await processor.run(processor.parse(body))) as HastRoot;

  // Detach the intro and output of each cell: they are rendered separately, in the cell layout
  visit(tree, 'element', (node: Element) => {
    if (node.tagName !== 'notebook-cell') return;
    const cell = cells[Number(node.properties.dataIndex)];
    for (const child of node.children) {
      if (child.type !== 'element') continue;
      if (child.tagName === 'cell-intro') cell.intro = child;
      if (child.tagName === 'cell-output') cell.output = child;
    }
    node.children = [];
    return SKIP;
  });

  insertLeadMagnet(tree, cells);

  const toReact = (node: HastRoot | Element) =>
    toJsxRuntime(node as HastRoot, {
      Fragment,
      jsx: jsx as any,
      jsxs: jsxs as any,
      components: {
        'cell-intro': (props: any) => <>{props.children}</>,
        'cell-output': (props: any) => <>{props.children}</>,
        'lead-magnet': () => <LeadMagnetSpot chartType={chartType} compact className="full-bleed my-14" />,
        'notebook-cell': (props: any) => {
          const cell = cells[Number(props['data-index'])];
          return (
            <CodeCell
              index={cell.index}
              code={cell.code}
              highlighted={cell.highlighted}
              interactive={interactive}
              hasChart={cell.hasChart}
              intro={cell.intro && cell.intro.children.length ? toReact(cell.intro) : undefined}
              output={cell.output && cell.output.children.length ? toReact(cell.output) : undefined}
            />
          );
        },
      },
    });

  const content = toReact(tree);

  return { content, cells: cells.map((c) => c.code) };
}
