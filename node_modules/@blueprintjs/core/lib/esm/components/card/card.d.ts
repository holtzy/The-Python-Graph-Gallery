import * as React from "react";
import { AbstractPureComponent2, Elevation } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
export interface ICardProps extends IProps, HTMLDivProps {
    /**
     * Controls the intensity of the drop shadow beneath the card: the higher
     * the elevation, the higher the drop shadow. At elevation `0`, no drop
     * shadow is applied.
     *
     * @default 0
     */
    elevation?: Elevation;
    /**
     * Whether the card should respond to user interactions. If set to `true`,
     * hovering over the card will increase the card's elevation
     * and change the mouse cursor to a pointer.
     *
     * Recommended when `onClick` is also defined.
     *
     * @default false
     */
    interactive?: boolean;
    /**
     * Callback invoked when the card is clicked.
     * Recommended when `interactive` is `true`.
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare class Card extends AbstractPureComponent2<ICardProps> {
    static displayName: string;
    static defaultProps: ICardProps;
    render(): JSX.Element;
}
