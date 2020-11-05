import VDOMDisplay from "@nteract/transform-vdom";

import TextDisplay from "./text";
import JsonDisplay from "./json";
import JavaScriptDisplay from "./javascript";
import HTMLDisplay from "./html";
import MarkdownDisplay from "./markdown";
import LaTeXDisplay from "./latex";
import SVGDisplay from "./svg";
import { PNGDisplay, JPEGDisplay, GIFDisplay } from "./image";

type Transform = { MIMETYPE: string } & React.ComponentType<any>;

type ObjectType = object;
export interface Transforms extends ObjectType {
  [transform: string]: Transform;
}
type DisplayOrder = Array<string>;

export type TransformRegister = {
  transforms: Transforms;
  displayOrder: DisplayOrder;
};

const tfs = [
  VDOMDisplay,
  JsonDisplay,
  JavaScriptDisplay,
  HTMLDisplay,
  MarkdownDisplay,
  LaTeXDisplay,
  SVGDisplay,
  GIFDisplay,
  PNGDisplay,
  JPEGDisplay,
  TextDisplay
];

export const standardTransforms: any = {};

tfs.forEach(transform => {
  standardTransforms[transform.MIMETYPE] = transform;
});

export const standardDisplayOrder: DisplayOrder = tfs.map(
  transform => transform.MIMETYPE
);

export function registerTransform(
  { transforms, displayOrder }: TransformRegister,
  transform: Transform
) {
  return {
    transforms: {
      ...transforms,
      [transform.MIMETYPE]: transform
    },
    displayOrder: [transform.MIMETYPE, ...displayOrder]
  };
}

/**
 * Choose the richest mimetype available based on the displayOrder and transforms
 * @param  {Map}   bundle - Map({mimetype1: data1, mimetype2: data2, ...})
 * @param  {Array} ordered list of mimetypes - ['text/html', 'text/plain']
 * @param  {Map}   mimetype -> React Component - Map({'text/plain': TextTransform})
 * @return {string}          Richest mimetype
 */

export function richestMimetype(
  bundle: Object,
  order: DisplayOrder = standardDisplayOrder,
  tf: Transforms = standardTransforms
): string | undefined | null {
  return (
    [...Object.keys(bundle)]
      // we can only use those we have a transform for
      .filter(mimetype => tf[mimetype] && order.includes(mimetype))
      // the richest is based on the order in displayOrder
      .sort((a, b) => order.indexOf(a) - order.indexOf(b))[0]
  );
}
export const transforms = standardTransforms;
export const displayOrder = standardDisplayOrder;
export const TextTransform = TextDisplay;
export const JSONTransform = JsonDisplay;
export const JavaScriptTransform = JavaScriptDisplay;
export const HTMLTransform = HTMLDisplay;
export const MarkdownTransform = MarkdownDisplay;
export const LaTeXTransform = LaTeXDisplay;
export const SVGTransform = SVGDisplay;
export const PNGTransform = PNGDisplay;
export const JPEGTransform = JPEGDisplay;
export const GIFTransform = GIFDisplay;
export const VDOMTransform = VDOMDisplay;
