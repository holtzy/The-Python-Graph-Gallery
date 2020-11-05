import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export interface NavbarBrandProps extends BsPrefixProps {
    href?: string;
}
declare type NavbarBrand = BsPrefixRefForwardingComponent<'a', NavbarBrandProps>;
declare const NavbarBrand: NavbarBrand;
export default NavbarBrand;
