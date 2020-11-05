import React from 'react';
import PropTypes from 'prop-types';
import { BsPrefixAndClassNameOnlyProps } from './helpers';
export interface ImageProps extends BsPrefixAndClassNameOnlyProps, React.ImgHTMLAttributes<HTMLImageElement> {
    fluid?: boolean;
    rounded?: boolean;
    roundedCircle?: boolean;
    thumbnail?: boolean;
}
export declare const propTypes: {
    /**
     * @default 'img'
     */
    bsPrefix: PropTypes.Requireable<string>;
    /**
     * Sets image as fluid image.
     */
    fluid: PropTypes.Requireable<boolean>;
    /**
     * Sets image shape as rounded.
     */
    rounded: PropTypes.Requireable<boolean>;
    /**
     * Sets image shape as circle.
     */
    roundedCircle: PropTypes.Requireable<boolean>;
    /**
     * Sets image shape as thumbnail.
     */
    thumbnail: PropTypes.Requireable<boolean>;
};
declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export default Image;
