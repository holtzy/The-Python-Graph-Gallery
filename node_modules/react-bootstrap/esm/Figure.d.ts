import { BsPrefixRefForwardingComponent } from './helpers';
import FigureImage from './FigureImage';
import FigureCaption from './FigureCaption';
declare type Figure = BsPrefixRefForwardingComponent<'figure'> & {
    Image: typeof FigureImage;
    Caption: typeof FigureCaption;
};
declare const Figure: Figure;
export default Figure;
