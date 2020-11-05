/// <reference types="react" />
import { AbstractPureComponent2, Position } from "../../common";
import { IProps } from "../../common/props";
import { IToastProps } from "./toast";
export declare type IToastOptions = IToastProps & {
    key: string;
};
export declare type ToasterPosition = typeof Position.TOP | typeof Position.TOP_LEFT | typeof Position.TOP_RIGHT | typeof Position.BOTTOM | typeof Position.BOTTOM_LEFT | typeof Position.BOTTOM_RIGHT;
/** Instance methods available on a `<Toaster>` component instance. */
export interface IToaster {
    /**
     * Shows a new toast to the user, or updates an existing toast corresponding to the provided key (optional).
     *
     * Returns the unique key of the toast.
     */
    show(props: IToastProps, key?: string): string;
    /** Dismiss the given toast instantly. */
    dismiss(key: string): void;
    /** Dismiss all toasts instantly. */
    clear(): void;
    /** Returns the props for all current toasts. */
    getToasts(): IToastOptions[];
}
/**
 * Props supported by the `<Toaster>` component.
 * These props can be passed as an argument to the static `Toaster.create(props?, container?)` method.
 */
export interface IToasterProps extends IProps {
    /**
     * Whether a toast should acquire application focus when it first opens.
     * This is disabled by default so that toasts do not interrupt the user's flow.
     * Note that `enforceFocus` is always disabled for `Toaster`s.
     * @default false
     */
    autoFocus?: boolean;
    /**
     * Whether pressing the `esc` key should clear all active toasts.
     * @default true
     */
    canEscapeKeyClear?: boolean;
    /**
     * Whether the toaster should be rendered into a new element attached to `document.body`.
     * If `false`, then positioning will be relative to the parent element.
     *
     * This prop is ignored by `Toaster.create()` as that method always appends a new element
     * to the container.
     * @default true
     */
    usePortal?: boolean;
    /**
     * Position of `Toaster` within its container.
     * @default Position.TOP
     */
    position?: ToasterPosition;
    /**
     * The maximum number of active toasts that can be displayed at once.
     *
     * When the limit is about to be exceeded, the oldest active toast is removed.
     * @default undefined
     */
    maxToasts?: number;
}
export interface IToasterState {
    toasts: IToastOptions[];
}
export declare class Toaster extends AbstractPureComponent2<IToasterProps, IToasterState> implements IToaster {
    static displayName: string;
    static defaultProps: IToasterProps;
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    static create(props?: IToasterProps, container?: HTMLElement): IToaster;
    state: IToasterState;
    private toastId;
    show(props: IToastProps, key?: string): string;
    dismiss(key: string, timeoutExpired?: boolean): void;
    clear(): void;
    getToasts(): IToastOptions[];
    render(): JSX.Element;
    protected validateProps({ maxToasts }: IToasterProps): void;
    private isNewToastKey;
    private dismissIfAtLimit;
    private renderToast;
    private createToastOptions;
    private getPositionClasses;
    private getDismissHandler;
    private handleClose;
}
