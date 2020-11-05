import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IActionProps, ILinkProps } from "../../common/props";
import { IPopoverProps } from "../popover/popover";
export interface IMenuItemProps extends IActionProps, ILinkProps {
    /** Item text, required for usability. */
    text: React.ReactNode;
    /** Whether this menu item should appear with an active state. */
    active?: boolean;
    /**
     * Children of this component will be rendered in a __submenu__ that appears when hovering or
     * clicking on this menu item.
     *
     * Use `text` prop for the content of the menu item itself.
     */
    children?: React.ReactNode;
    /**
     * Whether this menu item is non-interactive. Enabling this prop will ignore `href`, `tabIndex`,
     * and mouse event handlers (in particular click, down, enter, leave).
     */
    disabled?: boolean;
    /**
     * Right-aligned label text content, useful for displaying hotkeys.
     *
     * This prop actually supports JSX elements, but TypeScript will throw an error because
     * `HTMLAttributes` only allows strings. Use `labelElement` to supply a JSX element in TypeScript.
     */
    label?: string;
    /**
     * A space-delimited list of class names to pass along to the right-aligned label wrapper element.
     */
    labelClassName?: string;
    /**
     * Right-aligned label content, useful for displaying hotkeys.
     */
    labelElement?: React.ReactNode;
    /**
     * Whether the text should be allowed to wrap to multiple lines.
     * If `false`, text will be truncated with an ellipsis when it reaches `max-width`.
     * @default false
     */
    multiline?: boolean;
    /**
     * Props to spread to `Popover`. Note that `content` and `minimal` cannot be
     * changed and `usePortal` defaults to `false` so all submenus will live in
     * the same container.
     */
    popoverProps?: Partial<IPopoverProps>;
    /**
     * Whether an enabled item without a submenu should automatically close its parent popover when clicked.
     * @default true
     */
    shouldDismissPopover?: boolean;
    /**
     * Name of the HTML tag that wraps the MenuItem.
     * @default "a"
     */
    tagName?: keyof JSX.IntrinsicElements;
    /**
     * A space-delimited list of class names to pass along to the text wrapper element.
     */
    textClassName?: string;
    /**
     * HTML title to be passed to the <Text> component
     */
    htmlTitle?: string;
}
export declare class MenuItem extends AbstractPureComponent2<IMenuItemProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> {
    static defaultProps: IMenuItemProps;
    static displayName: string;
    render(): JSX.Element;
    private maybeRenderLabel;
    private maybeRenderPopover;
}
