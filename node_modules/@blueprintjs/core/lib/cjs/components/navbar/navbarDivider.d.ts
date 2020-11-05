/// <reference types="react" />
import { AbstractPureComponent2 } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
export interface INavbarDividerProps extends IProps, HTMLDivProps {
}
export declare class NavbarDivider extends AbstractPureComponent2<INavbarDividerProps> {
    static displayName: string;
    render(): JSX.Element;
}
