/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { IIntentProps } from "../../common/props";
import { PopoverInteractionKind } from "../popover/popover";
import { IPopoverSharedProps } from "../popover/popoverSharedProps";
export interface ITooltipProps extends IPopoverSharedProps, IIntentProps {
    /**
     * The content that will be displayed inside of the tooltip.
     */
    content: JSX.Element | string;
    /**
     * The amount of time in milliseconds the tooltip should remain open after
     * the user hovers off the trigger. The timer is canceled if the user mouses
     * over the target before it expires.
     * @default 0
     */
    hoverCloseDelay?: number;
    /**
     * The amount of time in milliseconds the tooltip should wait before opening
     * after the user hovers over the trigger. The timer is canceled if the user
     * mouses away from the target before it expires.
     * @default 100
     */
    hoverOpenDelay?: number;
    /**
     * The kind of hover interaction that triggers the display of the tooltip.
     * Tooltips do not support click interactions.
     * @default PopoverInteractionKind.HOVER_TARGET_ONLY
     */
    interactionKind?: typeof PopoverInteractionKind.HOVER | typeof PopoverInteractionKind.HOVER_TARGET_ONLY;
    /**
     * Indicates how long (in milliseconds) the tooltip's appear/disappear
     * transition takes. This is used by React `CSSTransition` to know when a
     * transition completes and must match the duration of the animation in CSS.
     * Only set this prop if you override Blueprint's default transitions with
     * new transitions of a different length.
     * @default 100
     */
    transitionDuration?: number;
}
export declare class Tooltip extends AbstractPureComponent2<ITooltipProps> {
    static displayName: string;
    static defaultProps: Partial<ITooltipProps>;
    private popover;
    render(): JSX.Element;
    reposition(): void;
}
