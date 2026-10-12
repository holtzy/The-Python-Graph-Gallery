import images from './generated/images.json';

export type ImageInfo = {
  src: string;
  thumb: string;
  width: number;
  height: number;
};

const graphImages = images.graph as Record<string, ImageInfo>;
const sectionImages = images.section as Record<string, ImageInfo>;
const graphNames = Object.keys(graphImages);

// Find an image of public/graph from its name, without extension.
// A partial name is accepted: exact match first, then first name containing it.
export const getGraphImage = (imgName: string): ImageInfo | undefined => {
  const clean = imgName.replace(/\.[^.]+$/, '');
  if (graphImages[clean]) return graphImages[clean];
  const match = graphNames.find((name) => name.includes(clean));
  return match ? graphImages[match] : undefined;
};

// Find a chart type logo of public/section, e.g. "Violin150"
export const getSectionImage = (name: string): ImageInfo | undefined =>
  sectionImages[name];
