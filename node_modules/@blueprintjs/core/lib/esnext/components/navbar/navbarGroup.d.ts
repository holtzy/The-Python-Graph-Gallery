/// <reference types="react" />
import { AbstractPureComponent2, Alignment } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
export interface INavbarGroupProps extends IProps, HTMLDivProps {
    /**
     * The side of the navbar on which the group should appear.
     * The `Alignment` enum provides constants for these values.
     * @default Alignment.LEFT
     */
    align?: Alignment;
}
export declare class NavbarGroup extends AbstractPureComponent2<INavbarGroupProps> {
    static displayName: string;
    static defaultProps: INavbarGroupProps;
    render(): JSX.Element;
}
