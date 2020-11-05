import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IResizeEntry } from "./resizeObserverTypes";
/** `ResizeSensor` requires a single DOM element child and will error otherwise. */
export interface IResizeSensorProps {
    /**
     * Callback invoked when the wrapped element resizes.
     *
     * The `entries` array contains an entry for each observed element. In the
     * default case (no `observeParents`), the array will contain only one
     * element: the single child of the `ResizeSensor`.
     *
     * Note that this method is called _asynchronously_ after a resize is
     * detected and typically it will be called no more than once per frame.
     */
    onResize: (entries: IResizeEntry[]) => void;
    /**
     * If `true`, all parent DOM elements of the container will also be
     * observed for size changes. The array of entries passed to `onResize`
     * will now contain an entry for each parent element up to the root of the
     * document.
     *
     * Only enable this prop if a parent element resizes in a way that does
     * not also cause the child element to resize.
     * @default false
     */
    observeParents?: boolean;
}
export declare class ResizeSensor extends AbstractPureComponent2<IResizeSensorProps> {
    static displayName: string;
    private element;
    private observer;
    render(): string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactPortal | null | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IResizeSensorProps): void;
    componentWillUnmount(): void;
    /**
     * Observe the DOM element, if defined and different from the currently
     * observed element. Pass `force` argument to skip element checks and always
     * re-observe.
     */
    private observeElement;
    private getElement;
}
