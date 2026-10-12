export const SITE_URL = 'https://python-graph-gallery.com';
export const SITE_NAME = 'The Python Graph Gallery';
export const DEFAULT_OG_IMAGE =
  'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true';

// Removes the domain from a full python-graph-gallery url to make it an internal link
export const fullUrlToInternalLink = (url: string) =>
  url.replace('https://python-graph-gallery.com', '');
