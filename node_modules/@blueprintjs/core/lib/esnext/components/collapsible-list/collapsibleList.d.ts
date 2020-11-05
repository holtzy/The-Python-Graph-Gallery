import * as React from "react";
import { Boundary } from "../../common/boundary";
import { IProps } from "../../common/props";
import { IMenuItemProps } from "../menu/menuItem";
import { IPopoverProps } from "../popover/popover";
export interface ICollapsibleListProps extends IProps {
    /**
     * Element to render as dropdown target with `CLICK` interaction to show collapsed menu.
     */
    dropdownTarget: JSX.Element;
    /**
     * Props to pass to the dropdown.
     */
    dropdownProps?: IPopoverProps;
    /**
     * Callback invoked to render each visible item. The item will be wrapped in an `li` with
     * the optional `visibleItemClassName` prop.
     */
    visibleItemRenderer: (props: IMenuItemProps, index: number) => JSX.Element;
    /**
     * Which direction the items should collapse from: start or end of the children.
     * @default Boundary.START
     */
    collapseFrom?: Boundary;
    /**
     * CSS class names to add to `<li>` tags containing each visible item and the dropdown.
     */
    visibleItemClassName?: string;
    /**
     * Exact number of visible items.
     * @default 3
     */
    visibleItemCount?: number;
}
/** @deprecated use `<OverflowList>` for automatic overflow based on available space. */
export declare class CollapsibleList extends React.Component<ICollapsibleListProps> {
    static displayName: string;
    static defaultProps: Partial<ICollapsibleListProps>;
    render(): JSX.Element;
    private partitionChildren;
}
