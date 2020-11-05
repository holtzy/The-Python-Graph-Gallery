import React from 'react';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import { Variant } from './types';
export interface ListGroupItemProps extends BsPrefixProps {
    action?: boolean;
    active?: boolean;
    disabled?: boolean;
    eventKey?: string;
    href?: string;
    onClick?: React.MouseEventHandler;
    variant?: Variant;
}
declare type ListGroupItem = BsPrefixRefForwardingComponent<'a', ListGroupItemProps>;
declare const ListGroupItem: ListGroupItem;
export default ListGroupItem;
