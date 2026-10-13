import { getPostSummaries } from '@/lib/posts';
import { chartTypesInfo } from '@/lib/sectionDescriptions';
import { getSectionImage } from '@/lib/images';
import { fullUrlToInternalLink } from '@/lib/site';

// Static file /search-index.json, generated at build time and loaded by the search box (components/SearchCommand.tsx)
export const dynamic = 'force-static';

export type SearchItem = {
  // title
  t: string;
  // url
  u: string;
  // group: "section" or "post"
  g: 'section' | 'post';
  // chart type label, used for the search and displayed next to the title
  c?: string;
  // image
  i?: string;
};

export function GET() {
  const labels = Object.fromEntries(chartTypesInfo.map((c) => [c.id, c.label]));

  const sections: SearchItem[] = chartTypesInfo.map((c) => ({
    t: c.label,
    u: fullUrlToInternalLink(c.pythonURL),
    g: 'section',
    i: getSectionImage(c.logo)?.thumb,
  }));

  const posts: SearchItem[] = getPostSummaries()
    .filter((p) => p.slug !== 'basic-template')
    .map((p) => ({ t: p.title, u: `/${p.slug}/`, g: 'post', c: labels[p.chartType], i: p.thumb }));

  return Response.json([...sections, ...posts]);
}
