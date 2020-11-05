import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IElementRefProps, IOptionProps } from "../../common/props";
import { IIconProps } from "../icon/icon";
export interface IHTMLSelectProps extends IElementRefProps<HTMLSelectElement>, React.SelectHTMLAttributes<HTMLSelectElement> {
    /** Whether this element is non-interactive. */
    disabled?: boolean;
    /** Whether this element should fill its container. */
    fill?: boolean;
    /** Props to spread to the `<Icon>` element. */
    iconProps?: Partial<IIconProps>;
    /** Whether to use large styles. */
    large?: boolean;
    /** Whether to use minimal styles. */
    minimal?: boolean;
    /** Multiple select is not supported. */
    multiple?: never;
    /** Change event handler. Use `event.currentTarget.value` to access the new value. */
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    /**
     * Shorthand for supplying options: an array of basic types or
     * `{ label?, value }` objects. If no `label` is supplied, `value`
     * will be used as the label.
     */
    options?: Array<string | number | IOptionProps>;
    /** Controlled value of this component. */
    value?: string | number;
}
export declare class HTMLSelect extends AbstractPureComponent2<IHTMLSelectProps> {
    render(): JSX.Element;
}
