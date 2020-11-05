import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface PageItemProps extends React.HTMLAttributes<HTMLElement>, BsPrefixPropsWithChildren {
    disabled?: boolean;
    active?: boolean;
    activeLabel?: string;
    href?: string;
}
declare type PageItem = BsPrefixRefForwardingComponent<'li', PageItemProps>;
declare const PageItem: PageItem;
export default PageItem;
export declare const First: {
    ({ children, ...props }: PageItemProps): JSX.Element;
    displayName: string;
};
export declare const Prev: {
    ({ children, ...props }: PageItemProps): JSX.Element;
    displayName: string;
};
export declare const Ellipsis: {
    ({ children, ...props }: PageItemProps): JSX.Element;
    displayName: string;
};
export declare const Next: {
    ({ children, ...props }: PageItemProps): JSX.Element;
    displayName: string;
};
export declare const Last: {
    ({ children, ...props }: PageItemProps): JSX.Element;
    displayName: string;
};
