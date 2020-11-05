import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IIntentProps, IProps } from "../../common/props";
export interface IFormGroupProps extends IIntentProps, IProps {
    /**
     * A space-delimited list of class names to pass along to the
     * `Classes.FORM_CONTENT` element that contains `children`.
     */
    contentClassName?: string;
    /**
     * Whether form group should appear as non-interactive.
     * Remember that `input` elements must be disabled separately.
     */
    disabled?: boolean;
    /**
     * Optional helper text. The given content will be wrapped in
     * `Classes.FORM_HELPER_TEXT` and displayed beneath `children`.
     * Helper text color is determined by the `intent`.
     */
    helperText?: React.ReactNode;
    /** Whether to render the label and children on a single line. */
    inline?: boolean;
    /** Label of this form group. */
    label?: React.ReactNode;
    /**
     * `id` attribute of the labelable form element that this `FormGroup` controls,
     * used as `<label for>` attribute.
     */
    labelFor?: string;
    /**
     * Optional secondary text that appears after the label.
     */
    labelInfo?: React.ReactNode;
    /** CSS properties to apply to the root element. */
    style?: React.CSSProperties;
}
export declare class FormGroup extends AbstractPureComponent2<IFormGroupProps> {
    static displayName: string;
    render(): JSX.Element;
    private getClassName;
}
