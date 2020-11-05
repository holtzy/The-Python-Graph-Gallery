import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IProps } from "../../common/props";
export interface IFileInputProps extends React.LabelHTMLAttributes<HTMLLabelElement>, IProps {
    /**
     * Whether the file input is non-interactive.
     * Setting this to `true` will automatically disable the child input too.
     */
    disabled?: boolean;
    /**
     * Whether the file input should take up the full width of its container.
     */
    fill?: boolean;
    /**
     * Whether the user has made a selection in the input. This will affect the component's
     * text styling. Make sure to set a non-empty value for the text prop as well.
     * @default false
     */
    hasSelection?: boolean;
    /**
     * The props to pass to the child input.
     * `disabled` will be ignored in favor of the top-level prop.
     * `type` will be ignored, because the input _must_ be `type="file"`.
     * Pass `onChange` here to be notified when the user selects a file.
     */
    inputProps?: React.HTMLProps<HTMLInputElement>;
    /**
     * Whether the file input should appear with large styling.
     */
    large?: boolean;
    /**
     * Callback invoked on `<input>` `change` events.
     *
     * This callback is offered as a convenience; it is equivalent to passing
     * `onChange` to `inputProps`.
     *
     * __Note:__ The top-level `onChange` prop is passed to the wrapping
     * `<label>` rather than the `<input>`, which may not be what you expect.
     */
    onInputChange?: React.FormEventHandler<HTMLInputElement>;
    /**
     * The text to display.
     * @default "Choose file..."
     */
    text?: React.ReactNode;
    /**
     * The button text.
     * @default "Browse"
     */
    buttonText?: string;
}
export declare class FileInput extends AbstractPureComponent2<IFileInputProps> {
    static displayName: string;
    static defaultProps: IFileInputProps;
    render(): JSX.Element;
    private handleInputChange;
}
