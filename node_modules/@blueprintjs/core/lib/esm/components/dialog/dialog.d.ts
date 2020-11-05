import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IProps, MaybeElement } from "../../common/props";
import { IconName } from "../icon/icon";
import { IBackdropProps, IOverlayableProps } from "../overlay/overlay";
export interface IDialogProps extends IOverlayableProps, IBackdropProps, IProps {
    /**
     * Toggles the visibility of the overlay and its children.
     * This prop is required because the component is controlled.
     */
    isOpen: boolean;
    /**
     * Name of a Blueprint UI icon (or an icon element) to render in the
     * dialog's header. Note that the header will only be rendered if `title` is
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
}
export declare class Dialog extends AbstractPureComponent2<IDialogProps> {
    static defaultProps: IDialogProps;
    static displayName: string;
    render(): JSX.Element;
    protected validateProps(props: IDialogProps): void;
    private maybeRenderCloseButton;
    private maybeRenderHeader;
}
