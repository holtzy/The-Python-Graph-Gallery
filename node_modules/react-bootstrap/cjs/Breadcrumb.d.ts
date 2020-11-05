import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface BreadcrumbProps extends BsPrefixPropsWithChildren {
    className?: string;
    label?: string;
    listProps?: React.OlHTMLAttributes<HTMLOListElement>;
}
declare type Breadcrumb = BsPrefixRefForwardingComponent<'nav', BreadcrumbProps> & {
    Item: typeof BreadcrumbItem;
};
declare const Breadcrumb: Breadcrumb;
export default Breadcrumb;
