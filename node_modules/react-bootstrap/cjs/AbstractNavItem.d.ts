import React from 'react';
import { BsPrefixRefForwardingComponent } from './helpers';
interface AbstractNavItemProps {
    active?: boolean;
    as: React.ElementType;
    className?: string;
    disabled?: boolean;
    eventKey?: any;
    href?: string;
    role?: string;
    id?: string;
    tabIndex?: number;
    onClick?: (e: any) => void;
    onSelect?: (navKey: string, e: any) => void;
}
declare type AbstractNavItem = BsPrefixRefForwardingComponent<'div', AbstractNavItemProps>;
declare const AbstractNavItem: AbstractNavItem;
export default AbstractNavItem;
