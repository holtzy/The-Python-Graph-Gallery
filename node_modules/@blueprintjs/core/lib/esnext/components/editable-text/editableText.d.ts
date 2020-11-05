/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { IIntentProps, IProps } from "../../common/props";
export interface IEditableTextProps extends IIntentProps, IProps {
    /**
     * EXPERIMENTAL FEATURE.
     *
     * When true, this forces the component to _always_ render an editable input (or textarea)
     * both when the component is focussed and unfocussed, instead of the component's default
     * behavior of switching between a text span and a text input upon interaction.
     *
     * This behavior can help in certain applications where, for example, a custom right-click
     * context menu is used to supply clipboard copy and paste functionality.
     * @default false
     */
    alwaysRenderInput?: boolean;
    /**
     * If `true` and in multiline mode, the `enter` key will trigger onConfirm and `mod+enter`
     * will insert a newline. If `false`, the key bindings are inverted such that `enter`
     * adds a newline.
     * @default false
     */
    confirmOnEnterKey?: boolean;
    /** Default text value of uncontrolled input. */
    defaultValue?: string;
    /**
     * Whether the text can be edited.
     * @default false
     */
    disabled?: boolean;
    /** Whether the component is currently being edited. */
    isEditing?: boolean;
    /** Maximum number of characters allowed. Unlimited by default. */
    maxLength?: number;
    /** Minimum width in pixels of the input, when not `multiline`. */
    minWidth?: number;
    /**
     * Whether the component supports multiple lines of text.
     * This prop should not be changed during the component's lifetime.
     * @default false
     */
    multiline?: boolean;
    /**
     * Maximum number of lines before scrolling begins, when `multiline`.
     */
    maxLines?: number;
    /**
     * Minimum number of lines (essentially minimum height), when `multiline`.
     * @default 1
     */
    minLines?: number;
    /**
     * Placeholder text when there is no value.
     * @default "Click to Edit"
     */
    placeholder?: string;
    /**
     * Whether the entire text field should be selected on focus.
     * If `false`, the cursor is placed at the end of the text.
     * This prop is ignored on inputs with type other then text, search, url, tel and password. See https://html.spec.whatwg.org/multipage/input.html#do-not-apply for details.
     * @default false
     */
    selectAllOnFocus?: boolean;
    /**
     * The type of input that should be shown, when not `multiline`.
     */
    type?: string;
    /** Text value of controlled input. */
    value?: string;
    /** Callback invoked when user cancels input with the `esc` key. Receives last confirmed value. */
    onCancel?(value: string): void;
    /** Callback invoked when user changes input in any way. */
    onChange?(value: string): void;
    /** Callback invoked when user confirms value with `enter` key or by blurring input. */
    onConfirm?(value: string): void;
    /** Callback invoked after the user enters edit mode. */
    onEdit?(value: string | undefined): void;
}
export interface IEditableTextState {
    /** Pixel height of the input, measured from span size */
    inputHeight?: number;
    /** Pixel width of the input, measured from span size */
    inputWidth?: number;
    /** Whether the value is currently being edited */
    isEditing?: boolean;
    /** The last confirmed value */
    lastValue?: string;
    /** The controlled input value, may be different from prop during editing */
    value?: string;
}
export declare class EditableText extends AbstractPureComponent2<IEditableTextProps, IEditableTextState> {
    static displayName: string;
    static defaultProps: IEditableTextProps;
    private inputElement;
    private valueElement;
    private refHandlers;
    constructor(props: IEditableTextProps, context?: any);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IEditableTextProps, prevState: IEditableTextState): void;
    cancelEditing: () => void;
    toggleEditing: () => void;
    private handleFocus;
    private handleTextChange;
    private handleKeyEvent;
    private renderInput;
    private updateInputDimensions;
}
