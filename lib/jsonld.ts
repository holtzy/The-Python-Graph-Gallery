import { chartTypesInfo } from './sectionDescriptions';
import { SITE_NAME, SITE_URL, fullUrlToInternalLink } from './site';
import lastModified from './generated/lastmod.json';

// Structured data (https://schema.org) describing the pages to search engines.
// Google uses it for breadcrumbs in search results and to understand the type of each page.

const AUTHOR = { '@type': 'Person', name: 'Yan Holtz', url: 'https://www.yan-holtz.com' };

// Date of the last commit that modified a file of the repo (computed by scripts/prepare-assets.ts)
export const getLastModified = (file: string): string | undefined =>
  (lastModified as Record<string, string>)[file];

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL + '/',
  description: 'A gallery of hundreds of charts made with Python, with their reproducible code.',
  author: AUTHOR,
});

type PostJsonLdProps = {
  slug: string;
  title: string;
  description: string;
  chartType: string;
  image?: string;
  dateModified?: string;
};

// A blog post: a technical article + its breadcrumb (Home > chart type section > post)
export const postJsonLd = ({ slug, title, description, chartType, image, dateModified }: PostJsonLdProps) => {
  const url = `${SITE_URL}/${slug}/`;
  const section = chartTypesInfo.find((c) => c.id === chartType);

  const article = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    ...(image && { image }),
    ...(dateModified && { dateModified }),
    author: AUTHOR,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/' },
    programmingLanguage: 'Python',
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL + '/' },
  };

  const crumbs = [
    { name: SITE_NAME, url: SITE_URL + '/' },
    ...(section ? [{ name: section.label, url: SITE_URL + fullUrlToInternalLink(section.pythonURL) }] : []),
    { name: title, url },
  ];
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
  };

  return [article, breadcrumb];
};
