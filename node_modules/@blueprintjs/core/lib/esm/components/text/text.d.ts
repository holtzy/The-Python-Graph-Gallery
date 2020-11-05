import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IProps } from "../../common/props";
export interface ITextProps extends IProps {
    /**
     * Indicates that this component should be truncated with an ellipsis if it overflows its container.
     * The `title` attribute will also be added when content overflows to show the full text of the children on hover.
     * @default false
     */
    ellipsize?: boolean;
    /**
     * HTML tag name to use for rendered element.
     * @default "div"
     */
    tagName?: keyof JSX.IntrinsicElements;
    /**
     * HTML title of the element
     */
    title?: string;
}
export interface ITextState {
    textContent: string;
    isContentOverflowing: boolean;
}
export declare class Text extends AbstractPureComponent2<ITextProps, ITextState> {
    static displayName: string;
    static defaultProps: Partial<ITextProps>;
    state: ITextState;
    private textRef;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.ReactElement<{
        className: string;
        ref: (ref: HTMLElement | null) => HTMLElement | null;
        title: string | undefined;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    private update;
}
