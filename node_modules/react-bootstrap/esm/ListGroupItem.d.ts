import React from 'react';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import { EventKey, Variant } from './types';
export interface ListGroupItemProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'>, BsPrefixProps {
    action?: boolean;
    active?: boolean;
    disabled?: boolean;
    eventKey?: EventKey;
    href?: string;
    onClick?: React.MouseEventHandler;
    variant?: Variant;
}
declare type ListGroupItem = BsPrefixRefForwardingComponent<'a', ListGroupItemProps>;
declare const ListGroupItem: ListGroupItem;
export default ListGroupItem;
