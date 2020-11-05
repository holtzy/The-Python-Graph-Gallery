import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { Position } from "../../common/position";
import { IProps, MaybeElement } from "../../common/props";
import { IconName } from "../icon/icon";
import { IBackdropProps, IOverlayableProps } from "../overlay/overlay";
export interface IDrawerProps extends IOverlayableProps, IBackdropProps, IProps {
    /**
     * Name of a Blueprint UI icon (or an icon element) to render in the
     * drawer's header. Note that the header will only be rendered if `title` is
     * provided.
     */
    icon?: IconName | MaybeElement;
    /**
     * Whether to show the close button in the dialog's header.
     * Note that the header will only be rendered if `title` is provided.
     * @default true
     */
    isCloseButtonShown?: boolean;
    /**
     * Toggles the visibility of the overlay and its children.
     * This prop is required because the component is controlled.
     */
    isOpen: boolean;
    /**
     * Position of a drawer. All angled positions will be casted into pure positions
     * (TOP, BOTTOM, LEFT or RIGHT).
     * @default Position.RIGHT
     */
    position?: Position;
    /**
     * CSS size of the drawer. This sets `width` if `vertical={false}` (default)
     * and `height` otherwise.
     *
     * Constants are available for common sizes:
     * - `Drawer.SIZE_SMALL = 360px`
     * - `Drawer.SIZE_STANDARD = 50%`
     * - `Drawer.SIZE_LARGE = 90%`
     *
     * @default Drawer.SIZE_STANDARD = "50%"
     */
    size?: number | string;
    /**
     * CSS styles to apply to the dialog.
     * @default {}
     */
    style?: React.CSSProperties;
    /**
     * Title of the dialog. If provided, an element with `Classes.DIALOG_HEADER`
     * will be rendered inside the dialog before any children elements.
     */
    title?: React.ReactNode;
    /**
     * Name of the transition for internal `CSSTransition`. Providing your own
     * name here will require defining new CSS transition properties.
     */
    transitionName?: string;
    /**
     * Whether the drawer should appear with vertical styling.
     * It will be ignored if `position` prop is set
     * @default false
     * @deprecated use `position` instead
     */
    vertical?: boolean;
}
export declare class Drawer extends AbstractPureComponent2<IDrawerProps> {
    static displayName: string;
    static defaultProps: IDrawerProps;
    static readonly SIZE_SMALL = "360px";
    static readonly SIZE_STANDARD = "50%";
    static readonly SIZE_LARGE = "90%";
    render(): JSX.Element;
    protected validateProps(props: IDrawerProps): void;
    private maybeRenderCloseButton;
    private maybeRenderHeader;
}
