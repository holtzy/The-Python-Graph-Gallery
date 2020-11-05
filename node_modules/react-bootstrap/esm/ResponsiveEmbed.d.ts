import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface ResponsiveEmbedProps extends BsPrefixPropsWithChildren {
    children: React.ReactChild;
    aspectRatio?: '21by9' | '16by9' | '4by3' | '1by1';
}
declare type ResponsiveEmbed = BsPrefixRefForwardingComponent<'div', ResponsiveEmbedProps>;
declare const ResponsiveEmbed: ResponsiveEmbed;
export default ResponsiveEmbed;
