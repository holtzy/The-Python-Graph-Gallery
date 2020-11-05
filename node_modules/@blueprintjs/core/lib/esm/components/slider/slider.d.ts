/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { ISliderBaseProps } from "./multiSlider";
export interface ISliderProps extends ISliderBaseProps {
    /**
     * Initial value of the slider. This determines the other end of the
     * track fill: from `initialValue` to `value`.
     * @default 0
     */
    initialValue?: number;
    /**
     * Value of slider.
     * @default 0
     */
    value?: number;
    /** Callback invoked when the value changes. */
    onChange?(value: number): void;
    /** Callback invoked when the handle is released. */
    onRelease?(value: number): void;
}
export declare class Slider extends AbstractPureComponent2<ISliderProps> {
    static defaultProps: ISliderProps;
    static displayName: string;
    render(): JSX.Element;
}
