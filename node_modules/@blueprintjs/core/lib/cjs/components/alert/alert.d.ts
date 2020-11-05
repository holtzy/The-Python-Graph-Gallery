import * as React from "react";
import { AbstractPureComponent2, Intent, IProps, MaybeElement } from "../../common";
import { IconName } from "../icon/icon";
import { IOverlayLifecycleProps } from "../overlay/overlay";
export interface IAlertProps extends IOverlayLifecycleProps, IProps {
    /**
     * Whether pressing <kbd>escape</kbd> when focused on the Alert should cancel the alert.
     * If this prop is enabled, then either `onCancel` or `onClose` must also be defined.
     * @default false
     */
    canEscapeKeyCancel?: boolean;
    /**
     * Whether clicking outside the Alert should cancel the alert.
     * If this prop is enabled, then either `onCancel` or `onClose` must also be defined.
     * @default false
     */
    canOutsideClickCancel?: boolean;
    /**
     * The text for the cancel button.
     * If this prop is defined, then either `onCancel` or `onClose` must also be defined.
     */
    cancelButtonText?: string;
    /**
     * The text for the confirm (right-most) button.
     * This button will always appear, and uses the value of the `intent` prop below.
     * @default "OK"
     */
    confirmButtonText?: string;
    /** Name of a Blueprint UI icon (or an icon element) to display on the left side. */
    icon?: IconName | MaybeElement;
    /**
     * The intent to be applied to the confirm (right-most) button and the icon (if provided).
     */
    intent?: Intent;
    /**
     * Toggles the visibility of the alert.
     * This prop is required because the component is controlled.
     */
    isOpen: boolean;
    /**
     * CSS styles to apply to the alert.
     */
    style?: React.CSSProperties;
    /**
     * Indicates how long (in milliseconds) the overlay's enter/leave transition takes.
     * This is used by React `CSSTransition` to know when a transition completes and must match
     * the duration of the animation in CSS. Only set this prop if you override Blueprint's default
     * transitions with new transitions of a different length.
     * @default 300
     */
    transitionDuration?: number;
    /**
     * The container element into which the overlay renders its contents, when `usePortal` is `true`.
     * This prop is ignored if `usePortal` is `false`.
     * @default document.body
     */
    portalContainer?: HTMLElement;
    /**
     * Handler invoked when the alert is canceled. Alerts can be **canceled** in the following ways:
     * - clicking the cancel button (if `cancelButtonText` is defined)
     * - pressing the escape key (if `canEscapeKeyCancel` is enabled)
     * - clicking on the overlay backdrop (if `canOutsideClickCancel` is enabled)
     *
     * If any of the `cancel` props are defined, then either `onCancel` or `onClose` must be defined.
     */
    onCancel?(evt?: React.SyntheticEvent<HTMLElement>): void;
    /**
     * Handler invoked when the confirm button is clicked. Alerts can be **confirmed** in the following ways:
     * - clicking the confirm button
     * - focusing on the confirm button and pressing `enter` or `space`
     */
    onConfirm?(evt?: React.SyntheticEvent<HTMLElement>): void;
    /**
     * Handler invoked when the Alert is confirmed or canceled; see `onConfirm` and `onCancel` for more details.
     * First argument is `true` if confirmed, `false` otherwise.
     * This is an alternative to defining separate `onConfirm` and `onCancel` handlers.
     */
    onClose?(confirmed: boolean, evt?: React.SyntheticEvent<HTMLElement>): void;
}
export declare class Alert extends AbstractPureComponent2<IAlertProps> {
    static defaultProps: IAlertProps;
    static displayName: string;
    render(): JSX.Element;
    protected validateProps(props: IAlertProps): void;
    private handleCancel;
    private handleConfirm;
    private internalHandleCallbacks;
}
