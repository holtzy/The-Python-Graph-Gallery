import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface BreadcrumbItemProps extends BsPrefixPropsWithChildren {
    active?: boolean;
    href?: string;
    linkAs?: React.ElementType;
    target?: string;
    title?: React.ReactNode;
    linkProps?: Record<string, any>;
}
declare type BreadcrumbItem = BsPrefixRefForwardingComponent<'li', BreadcrumbItemProps>;
declare const BreadcrumbItem: BreadcrumbItem;
export default BreadcrumbItem;
