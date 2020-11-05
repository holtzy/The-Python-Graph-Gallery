import * as React from "react";
import { AbstractPureComponent2, Alignment } from "../../common";
import { HTMLInputProps, IProps } from "../../common/props";
export interface IControlProps extends IProps, HTMLInputProps {
    /**
     * Alignment of the indicator within container.
     * @default Alignment.LEFT
     */
    alignIndicator?: Alignment;
    /** Whether the control is checked. */
    checked?: boolean;
    /** JSX label for the control. */
    children?: React.ReactNode;
    /** Whether the control is initially checked (uncontrolled mode). */
    defaultChecked?: boolean;
    /** Whether the control is non-interactive. */
    disabled?: boolean;
    /** Ref handler that receives HTML `<input>` element backing this component. */
    inputRef?: (ref: HTMLInputElement | null) => any;
    /** Whether the control should appear as an inline element. */
    inline?: boolean;
    /**
     * Text label for the control.
     *
     * Use `children` or `labelElement` to supply JSX content. This prop actually supports JSX elements,
     * but TypeScript will throw an error because `HTMLAttributes` only allows strings.
     */
    label?: string;
    /**
     * JSX Element label for the control.
     *
     * This prop is a workaround for TypeScript consumers as the type definition for `label` only
     * accepts strings. JavaScript consumers can provide a JSX element directly to `label`.
     */
    labelElement?: React.ReactNode;
    /** Whether this control should use large styles. */
    large?: boolean;
    /** Event handler invoked when input value is changed. */
    onChange?: React.FormEventHandler<HTMLInputElement>;
    /**
     * Name of the HTML tag that wraps the checkbox.
     *
     * By default a `<label>` is used, which effectively enlarges the click
     * target to include all of its children. Supply a different tag name if
     * this behavior is undesirable or you're listening to click events from a
     * parent element (as the label can register duplicate clicks).
     *
     * @default "label"
     */
    tagName?: keyof JSX.IntrinsicElements;
}
export interface ISwitchProps extends IControlProps {
    /**
     * Text to display inside the switch indicator when checked.
     * If `innerLabel` is provided and this prop is omitted, then `innerLabel`
     * will be used for both states.
     * @default innerLabel
     */
    innerLabelChecked?: string;
    /**
     * Text to display inside the switch indicator when unchecked.
     */
    innerLabel?: string;
}
export declare class Switch extends AbstractPureComponent2<ISwitchProps> {
    static displayName: string;
    render(): JSX.Element;
}
export declare type IRadioProps = IControlProps;
export declare class Radio extends AbstractPureComponent2<IRadioProps> {
    static displayName: string;
    render(): JSX.Element;
}
export interface ICheckboxProps extends IControlProps {
    /** Whether this checkbox is initially indeterminate (uncontrolled mode). */
    defaultIndeterminate?: boolean;
    /**
     * Whether this checkbox is indeterminate, or "partially checked."
     * The checkbox will appear with a small dash instead of a tick to indicate that the value
     * is not exactly true or false.
     *
     * Note that this prop takes precendence over `checked`: if a checkbox is marked both
     * `checked` and `indeterminate` via props, it will appear as indeterminate in the DOM.
     */
    indeterminate?: boolean;
}
export interface ICheckboxState {
    indeterminate: boolean;
}
export declare class Checkbox extends AbstractPureComponent2<ICheckboxProps, ICheckboxState> {
    static displayName: string;
    static getDerivedStateFromProps({ indeterminate }: ICheckboxProps): ICheckboxState | null;
    state: ICheckboxState;
    private input;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private updateIndeterminate;
    private handleChange;
    private handleInputRef;
}
