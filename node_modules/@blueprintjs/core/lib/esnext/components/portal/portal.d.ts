import * as React from "react";
import { ValidationMap } from "../../common/context";
import { IProps } from "../../common/props";
export interface IPortalProps extends IProps {
    /**
     * Callback invoked when the children of this `Portal` have been added to the DOM.
     */
    onChildrenMount?: () => void;
    /**
     * The HTML element that children will be mounted to.
     * @default document.body
     */
    container?: HTMLElement;
}
export interface IPortalState {
    hasMounted: boolean;
}
export interface IPortalContext {
    /** Additional CSS classes to add to all `Portal` elements in this React context. */
    blueprintPortalClassName?: string;
}
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
export declare class Portal extends React.Component<IPortalProps, IPortalState> {
    static displayName: string;
    static contextTypes: ValidationMap<IPortalContext>;
    static defaultProps: IPortalProps;
    context: IPortalContext;
    state: IPortalState;
    private portalElement;
    render(): React.ReactPortal | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPortalProps): void;
    componentWillUnmount(): void;
    private createContainerElement;
    private unstableRenderNoPortal;
}
