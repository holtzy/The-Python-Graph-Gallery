import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
import { EventKey } from './types';
export interface NavLinkProps extends BsPrefixPropsWithChildren {
    active?: boolean;
    disabled?: boolean;
    role?: string;
    href?: string;
    onSelect?: SelectCallback;
    eventKey?: EventKey;
}
declare type NavLink = BsPrefixRefForwardingComponent<'a', NavLinkProps>;
declare const NavLink: NavLink;
export default NavLink;
