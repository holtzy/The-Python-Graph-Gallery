import React from 'react';
import NavItem from './NavItem';
import NavLink from './NavLink';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
export interface NavProps extends BsPrefixPropsWithChildren {
    navbarBsPrefix?: string;
    cardHeaderBsPrefix?: string;
    variant?: 'tabs' | 'pills';
    activeKey?: unknown;
    defaultActiveKey?: unknown;
    fill?: boolean;
    justify?: boolean;
    onSelect?: SelectCallback;
    role?: string;
    navbar?: boolean;
    onKeyDown?: React.KeyboardEventHandler<this>;
}
declare type Nav = BsPrefixRefForwardingComponent<'div', NavProps> & {
    Item: typeof NavItem;
    Link: typeof NavLink;
};
declare const Nav: Nav;
export default Nav;
