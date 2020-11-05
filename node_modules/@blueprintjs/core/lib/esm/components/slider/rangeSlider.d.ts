/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { ISliderBaseProps } from "./multiSlider";
export declare type NumberRange = [number, number];
export interface IRangeSliderProps extends ISliderBaseProps {
    /**
     * Range value of slider. Handles will be rendered at each position in the range.
     * @default [0, 10]
     */
    value?: NumberRange;
    /** Callback invoked when the range value changes. */
    onChange?(value: NumberRange): void;
    /** Callback invoked when a handle is released. */
    onRelease?(value: NumberRange): void;
}
export declare class RangeSlider extends AbstractPureComponent2<IRangeSliderProps> {
    static defaultProps: IRangeSliderProps;
    static displayName: string;
    render(): JSX.Element;
    protected validateProps(props: IRangeSliderProps): void;
}
