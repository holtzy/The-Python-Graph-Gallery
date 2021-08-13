import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarToggle from './NavbarToggle';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent, SelectCallback } from './helpers';
declare const NavbarText: BsPrefixRefForwardingComponent<"span", unknown>;
export interface NavbarProps extends BsPrefixPropsWithChildren {
    variant?: 'light' | 'dark';
    expand?: boolean | 'sm' | 'md' | 'lg' | 'xl';
    bg?: string;
    fixed?: 'top' | 'bottom';
    sticky?: 'top';
    onToggle?: (expanded: boolean) => void;
    onSelect?: SelectCallback;
    collapseOnSelect?: boolean;
    expanded?: boolean;
    role?: string;
}
declare type Navbar = BsPrefixRefForwardingComponent<'nav', NavbarProps> & {
    Brand: typeof NavbarBrand;
    Collapse: typeof NavbarCollapse;
    Text: typeof NavbarText;
    Toggle: typeof NavbarToggle;
};
declare const Navbar: Navbar;
export default Navbar;
