import * as React from "react";
import { IProps } from "../../common/props";
export interface IMenuDividerProps extends IProps {
    /** This component does not support children. */
    children?: never;
    /** Optional header title. */
    title?: React.ReactNode;
}
export declare class MenuDivider extends React.Component<IMenuDividerProps> {
    static displayName: string;
    render(): JSX.Element;
}
