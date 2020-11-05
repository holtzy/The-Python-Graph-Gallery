import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IActionProps, IIntentProps, ILinkProps, IProps, MaybeElement } from "../../common/props";
import { IconName } from "../icon/icon";
export interface IToastProps extends IProps, IIntentProps {
    /**
     * Action rendered as a minimal `AnchorButton`. The toast is dismissed automatically when the
     * user clicks the action button. Note that the `intent` prop is ignored (the action button
     * cannot have its own intent color that might conflict with the toast's intent). Omit this
     * prop to omit the action button.
     */
    action?: IActionProps & ILinkProps;
    /** Name of a Blueprint UI icon (or an icon element) to render before the message. */
    icon?: IconName | MaybeElement;
    /** Message to display in the body of the toast. */
    message: React.ReactNode;
    /**
     * Callback invoked when the toast is dismissed, either by the user or by the timeout.
     * The value of the argument indicates whether the toast was closed because the timeout expired.
     */
    onDismiss?: (didTimeoutExpire: boolean) => void;
    /**
     * Milliseconds to wait before automatically dismissing toast.
     * Providing a value less than or equal to 0 will disable the timeout (this is discouraged).
     * @default 5000
     */
    timeout?: number;
}
export declare class Toast extends AbstractPureComponent2<IToastProps> {
    static defaultProps: IToastProps;
    static displayName: string;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IToastProps): void;
    componentWillUnmount(): void;
    private maybeRenderActionButton;
    private handleActionClick;
    private handleCloseClick;
    private triggerDismiss;
    private startTimeout;
}
