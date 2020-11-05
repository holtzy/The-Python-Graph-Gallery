import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IProps, MaybeElement } from "../../common/props";
import { IconName } from "../icon/icon";
export interface INonIdealStateProps extends IProps {
    /** An action to resolve the non-ideal state which appears after `description`. */
    action?: JSX.Element;
    /**
     * Advanced usage: React `children` will appear last (after `action`).
     * Avoid passing raw strings as they will not receive margins and disrupt the layout flow.
     */
    children?: React.ReactNode;
    /**
     * A longer description of the non-ideal state.
     * A string or number value will be wrapped in a `<div>` to preserve margins.
     */
    description?: React.ReactChild;
    /** The name of a Blueprint icon or a JSX Element (such as `<Spinner/>`) to render above the title. */
    icon?: IconName | MaybeElement;
    /** The title of the non-ideal state. */
    title?: React.ReactNode;
}
export declare class NonIdealState extends AbstractPureComponent2<INonIdealStateProps> {
    static displayName: string;
    render(): JSX.Element;
    private maybeRenderVisual;
}
