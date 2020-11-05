import * as React from "react";
import { AbstractPureComponent2, IElementRefProps, IIntentProps, IProps, MaybeElement } from "../../common";
import { IconName } from "../icon/icon";
export interface ITagProps extends IProps, IIntentProps, IElementRefProps<HTMLSpanElement>, React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Whether the tag should appear in an active state.
     * @default false
     */
    active?: boolean;
    /**
     * Whether the tag should take up the full width of its container.
     * @default false
     */
    fill?: boolean;
    /** Name of a Blueprint UI icon (or an icon element) to render before the children. */
    icon?: IconName | MaybeElement;
    /**
     * Whether the tag should visually respond to user interactions. If set
     * to `true`, hovering over the tag will change its color and mouse cursor.
     *
     * Recommended when `onClick` is also defined.
     *
     * @default false
     */
    interactive?: boolean;
    /**
     * Whether this tag should use large styles.
     * @default false
     */
    large?: boolean;
    /**
     * Whether this tag should use minimal styles.
     * @default false
     */
    minimal?: boolean;
    /**
     * Whether tag content should be allowed to occupy multiple lines.
     * If false, a single line of text will be truncated with an ellipsis if
     * it overflows. Note that icons will be vertically centered relative to
     * multiline text.
     * @default false
     */
    multiline?: boolean;
    /**
     * Callback invoked when the tag is clicked.
     * Recommended when `interactive` is `true`.
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Click handler for remove button.
     * The remove button will only be rendered if this prop is defined.
     */
    onRemove?: (e: React.MouseEvent<HTMLButtonElement>, tagProps: ITagProps) => void;
    /** Name of a Blueprint UI icon (or an icon element) to render after the children. */
    rightIcon?: IconName | MaybeElement;
    /**
     * Whether this tag should have rounded ends.
     * @default false
     */
    round?: boolean;
    /**
     * HTML title to be passed to the <Text> component
     */
    htmlTitle?: string;
}
export declare class Tag extends AbstractPureComponent2<ITagProps> {
    static displayName: string;
    render(): JSX.Element;
    private onRemoveClick;
}
