import React from 'react';
import SafeAnchor from './SafeAnchor';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
import { EventKey } from './types';
export interface DropdownItemProps extends BsPrefixPropsWithChildren {
    active?: boolean;
    disabled?: boolean;
    eventKey?: EventKey;
    href?: string;
    onClick?: React.MouseEventHandler<this>;
    onSelect?: SelectCallback;
}
declare type DropdownItem = BsPrefixRefForwardingComponent<typeof SafeAnchor, DropdownItemProps>;
declare const DropdownItem: DropdownItem;
export default DropdownItem;
