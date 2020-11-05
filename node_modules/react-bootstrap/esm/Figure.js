import createWithBsPrefix from './createWithBsPrefix';
import FigureImage from './FigureImage';
import FigureCaption from './FigureCaption';
var Figure = createWithBsPrefix('figure', {
  Component: 'figure'
});
Figure.Image = FigureImage;
Figure.Caption = FigureCaption;
export default Figure;