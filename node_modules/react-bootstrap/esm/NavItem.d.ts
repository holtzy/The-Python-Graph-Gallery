import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface NavItemProps extends BsPrefixPropsWithChildren {
    role?: string;
}
declare type NavItem = BsPrefixRefForwardingComponent<'div', NavItemProps>;
declare const NavItem: NavItem;
export default NavItem;
