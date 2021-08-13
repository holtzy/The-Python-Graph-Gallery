import React from 'react';
import CardImg from './CardImg';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
import { Color, Variant } from './types';
declare const CardBody: BsPrefixRefForwardingComponent<"div", unknown>;
declare const CardTitle: BsPrefixRefForwardingComponent<React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>, unknown>;
declare const CardSubtitle: BsPrefixRefForwardingComponent<React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>, unknown>;
declare const CardLink: BsPrefixRefForwardingComponent<"a", unknown>;
declare const CardText: BsPrefixRefForwardingComponent<"p", unknown>;
declare const CardHeader: BsPrefixRefForwardingComponent<"div", unknown>;
declare const CardFooter: BsPrefixRefForwardingComponent<"div", unknown>;
declare const CardImgOverlay: BsPrefixRefForwardingComponent<"div", unknown>;
export interface CardProps extends BsPrefixPropsWithChildren {
    bg?: Variant;
    text?: Color;
    border?: Variant;
    body?: boolean;
}
declare type Card = BsPrefixRefForwardingComponent<'div', CardProps> & {
    Img: typeof CardImg;
    Title: typeof CardTitle;
    Subtitle: typeof CardSubtitle;
    Body: typeof CardBody;
    Link: typeof CardLink;
    Text: typeof CardText;
    Header: typeof CardHeader;
    Footer: typeof CardFooter;
    ImgOverlay: typeof CardImgOverlay;
};
declare const Card: Card;
export default Card;
