import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME } from './site';

type SeoProps = {
  title: string;
  seoDescription?: string;
  keywords?: string;
  image?: string;
  // Path of the page, e.g. "/barplot/". Used for the canonical url.
  path: string;
};

// Builds the <head> tags of a page.
// These are exactly the tags the site historically produced (title, description, author, keywords,
// open graph, twitter), plus a canonical url.
export function buildMetadata({
  title,
  seoDescription,
  keywords,
  image,
  path,
}: SeoProps): Metadata {
  const description = seoDescription || 'How to build a chart with Python';
  const canonical = path.endsWith('/') ? path : path + '/';
  return {
    title,
    description,
    authors: [{ name: 'Yan Holtz' }],
    keywords: keywords || 'python, chart, graph, code, viz, dataviz',
    alternates: { canonical },
    openGraph: {
      siteName: SITE_NAME,
      title,
      description: seoDescription,
      images: [image || DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@R_Graph_Gallery',
    },
  };
}
