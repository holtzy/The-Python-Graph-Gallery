# The Python Graph Gallery

Static website (https://python-graph-gallery.com) built with Next.js (App Router, `output: 'export'`), Tailwind CSS v4, TypeScript and shadcn/ui. Deployed to GitHub Pages automatically: every push to `master` runs `.github/workflows/deploy.yml` (build, SEO check against the live site, push of `out/` to the `gh-pages` branch). The deploy is blocked if a live page would disappear; put `[allow-page-removal]` in the commit message to remove a page on purpose. `npm run deploy` still deploys manually.

## Commands

- `npm run dev`: prepare assets + dev server
- `npm run build`: prepare assets + static build in `out/` + sitemap
- `npm run seo-diff`: compares the SEO of the new build (`out/`) with the build currently deployed (gh-pages branch)

## Structure

- `app/[slug]/page.tsx`: one page per blog post of `content/posts/`
- `app/<section>/page.tsx`: hand written pages (chart type sections like `/barplot/`, tools like `/matplotlib/`...)
- `components/`: site components. `components/ui/`: shadcn/ui primitives (add new ones with `npx shadcn@latest add <name>`, do not hand edit them)
- `components/post/`: code cells of posts and the Pyodide runtime ("Edit code" / "Run")
- `lib/`: data (`sectionDescriptions.ts`, `functions/`...), SEO helpers, markdown rendering
- `static/`: historical static files (`graph/*.png` chart images, `data/`, `section/` logos...), served at the root of the site. Never rename it: many notebooks and websites load files from `raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/...`. It is synced into `public/` by `scripts/prepare-assets.ts`.
- `public/`: other static files (new assets, icons, the Pyodide worker)
- `scripts/prepare-assets.ts`: copies post assets to `public/posts/` and builds webp thumbnails of `public/graph` and `public/section` (generated, git ignored)

## Writing a blog post

Create `content/posts/<slug>/index.md`. The folder name is the url: `/<slug>/`.

````md
---
title: "Basic Barplot using Matplotlib"
description: "Html description shown below the title"
seoDescription: "Meta description"
keywords: "python, chart, barplot"
family: "ranking"          # chart family, see lib/sectionDescriptions.ts
chartType: "barplot"       # chart type id, see lib/sectionDescriptions.ts
slug: "1-basic-barplot"
---

Some markdown.

```python
import matplotlib.pyplot as plt
plt.bar([1, 2], [3, 4])
plt.show()
```

:::output
![](./output-1.png)
:::
````

- ` ```python ` blocks are **runnable code cells**: readers can edit and run them in the browser (Pyodide). Cells run in order, like a notebook.
- `:::output` holds the static output of the cell above (image, ` ```text ` block, or `::output-html{src="./output-2.html"}` for html tables). Put the files next to `index.md`.
- ` ```py ` blocks are displayed but never run (illustration snippets).
- Data: prefer a stable url (e.g. raw.githubusercontent.com) or a csv placed next to the post.

## Hand written pages conventions

Each page is a server component in `app/<slug>/page.tsx`:

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Barplot Examples with Code',
  seoDescription: 'A collection of barplot examples made with Python...',
  path: '/barplot/',
});

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Barplot" description={chartDescription} chartType="barplot" />
      </div>
      <div className="wrapper">
        <h2 id="Quick">⏱ Quick start</h2>
        ...
        <ChartGrid>
          <ChartImageContainer imgName="2_horizontal_barplot" caption="..." linkTo="/2-horizontal-barplot" />
        </ChartGrid>
      </div>
      <Spacing />
      <div className="wrapper bg-muted py-10">
        <ChartFamilySection chartFamily="ranking" />
      </div>
      <Spacing />
      <div className="wrapper"><Contact /></div>
      <TableOfContent />
    </>
  );
}
```

- `.wrapper` is the centered content column (max 780px). `.narrowWrapper` is narrower. Children of a wrapper can use `full-bleed` to span the full width.
- Images of `static/graph/` are displayed with `<ChartImage imgName="..." caption="..." />` (lazy loaded webp thumbnail). `<ChartImageContainer>` adds a link. Put them in a `<ChartGrid cols={3}>`.
- Code: `<CodeChunk>{code}</CodeChunk>` (async server component, highlighted at build time).
- Library logos next to titles: `components/MiscellaneousLogos.tsx`.
- Style: plain shadcn/ui defaults (Geist font, neutral colors, subtle borders). Use Tailwind utilities and shadcn components; avoid grey background bands. Chart images get a light border (built into `ChartImage`).
- SEO: every page keeps its exact title, meta description, headings and links. Never change a url.

## Writing

Please avoid em-dashes.
