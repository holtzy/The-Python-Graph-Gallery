import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface NavbarToggleProps extends BsPrefixPropsWithChildren {
    label?: string;
    onClick?: React.MouseEventHandler;
}
declare type NavbarToggle = BsPrefixRefForwardingComponent<'button', NavbarToggleProps>;
declare const NavbarToggle: NavbarToggle;
export default NavbarToggle;
