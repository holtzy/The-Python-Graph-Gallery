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
const rehypePostAssets =
  (slug: string, postDir: string, title: string) => () => async (tree: HastRoot) => {
    const images: Element[] = [];
    visit(tree, 'element', (node: Element, index, parent: any) => {
      // Scripts of html outputs (plotly, bokeh...) were never executed on the site: drop them.
      if (node.tagName === 'script') {
        parent.children.splice(index, 1);
        return [SKIP, index];
      }
      if (node.tagName === 'img') images.push(node);
    });

    let outputCount = 0;
    await Promise.all(
      images.map(async (img) => {
        const src = String(img.properties.src ?? '');
        if (src.startsWith('./') || !/^(https?:|\/|data:)/.test(src)) {
          const file = src.replace(/^\.\//, '');
          img.properties.src = `/posts/${slug}/${file}`;
          try {
            const meta = await sharp(path.join(postDir, file)).metadata();
            img.properties.width = meta.width;
            img.properties.height = meta.height;
          } catch {
            // missing file: keep the img as is
          }
        }
        if (!img.properties.alt) {
          outputCount++;
          img.properties.alt = title;
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

    const cell: PostCell = {
      index: cells.length,
      code: getText(node).replace(/\n$/, ''),
      highlighted: '',
    };
    cells.push(cell);
    pending.push(highlightCode(cell.code, 'python').then((html) => void (cell.highlighted = html)));

    result.push({
      type: 'element',
      tagName: 'notebook-cell',
      properties: { dataIndex: cell.index },
      children: output ? output.children : [],
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

export async function renderPost(
  body: string,
  { slug, dir, title, interactive = true }: { slug: string; dir: string; title: string; interactive?: boolean }
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

  const content = toJsxRuntime(tree, {
    Fragment,
    jsx: jsx as any,
    jsxs: jsxs as any,
    components: {
      'notebook-cell': (props: any) => {
        const cell = cells[Number(props['data-index'])];
        return (
          <CodeCell index={cell.index} code={cell.code} highlighted={cell.highlighted} interactive={interactive}>
            {props.children}
          </CodeCell>
        );
      },
    },
  });

  return { content, cells: cells.map((c) => c.code) };
}
