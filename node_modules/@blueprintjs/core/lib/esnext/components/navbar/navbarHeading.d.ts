/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
export interface INavbarHeadingProps extends IProps, HTMLDivProps {
}
export declare class NavbarHeading extends AbstractPureComponent2<INavbarHeadingProps> {
    static displayName: string;
    render(): JSX.Element;
}
