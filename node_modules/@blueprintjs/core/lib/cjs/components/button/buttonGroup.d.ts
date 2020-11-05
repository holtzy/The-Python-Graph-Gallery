/// <reference types="react" />
import { AbstractPureComponent2, Alignment } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
export interface IButtonGroupProps extends IProps, HTMLDivProps {
    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    alignText?: Alignment;
    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill?: boolean;
    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal?: boolean;
    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large?: boolean;
    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical?: boolean;
}
export declare class ButtonGroup extends AbstractPureComponent2<IButtonGroupProps> {
    static displayName: string;
    render(): JSX.Element;
}
