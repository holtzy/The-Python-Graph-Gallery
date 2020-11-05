import React from 'react';
import Dropdown from './Dropdown';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface NavDropdownProps extends BsPrefixPropsWithChildren {
    id: string;
    title: React.ReactNode;
    disabled?: boolean;
    active?: boolean;
    menuRole?: string;
    renderMenuOnMount?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
}
declare type NavDropdown = BsPrefixRefForwardingComponent<'div', NavDropdownProps> & {
    Item: typeof Dropdown.Item;
    ItemText: typeof Dropdown.ItemText;
    Divider: typeof Dropdown.Divider;
    Header: typeof Dropdown.Header;
};
declare const NavDropdown: NavDropdown;
export default NavDropdown;
