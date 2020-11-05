import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IProps } from "../../common/props";
import { MenuDivider } from "./menuDivider";
import { MenuItem } from "./menuItem";
export interface IMenuProps extends IProps, React.HTMLAttributes<HTMLUListElement> {
    /** Whether the menu items in this menu should use a large appearance. */
    large?: boolean;
    /** Ref handler that receives the HTML `<ul>` element backing this component. */
    ulRef?: (ref: HTMLUListElement | null) => any;
}
export declare class Menu extends AbstractPureComponent2<IMenuProps> {
    static displayName: string;
    static Divider: typeof MenuDivider;
    static Item: typeof MenuItem;
    render(): JSX.Element;
}
