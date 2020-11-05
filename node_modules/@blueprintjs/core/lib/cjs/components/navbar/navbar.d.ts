/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
import { NavbarDivider } from "./navbarDivider";
import { NavbarGroup } from "./navbarGroup";
import { NavbarHeading } from "./navbarHeading";
export { INavbarDividerProps } from "./navbarDivider";
export interface INavbarProps extends IProps, HTMLDivProps {
    /**
     * Whether this navbar should be fixed to the top of the viewport (using CSS `position: fixed`).
     */
    fixedToTop?: boolean;
}
export declare class Navbar extends AbstractPureComponent2<INavbarProps> {
    static displayName: string;
    static Divider: typeof NavbarDivider;
    static Group: typeof NavbarGroup;
    static Heading: typeof NavbarHeading;
    render(): JSX.Element;
}
