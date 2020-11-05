import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { HTMLDivProps, IProps } from "../../common/props";
export declare type TabId = string | number;
export interface ITabProps extends IProps, Omit<HTMLDivProps, "id" | "title" | "onClick"> {
    /**
     * Content of tab title, rendered in a list above the active panel.
     * Can also be set via the `title` prop.
     */
    children?: React.ReactNode;
    /**
     * Whether the tab is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Unique identifier used to control which tab is selected
     * and to generate ARIA attributes for accessibility.
     */
    id: TabId;
    /**
     * Panel content, rendered by the parent `Tabs` when this tab is active.
     * If omitted, no panel will be rendered for this tab.
     */
    panel?: JSX.Element;
    /**
     * Space-delimited string of class names applied to tab panel container.
     */
    panelClassName?: string;
    /**
     * Content of tab title element, rendered in a list above the active panel.
     * Can also be set via React `children`.
     */
    title?: React.ReactNode;
}
export declare class Tab extends AbstractPureComponent2<ITabProps> {
    static defaultProps: Partial<ITabProps>;
    static displayName: string;
    render(): JSX.Element;
}
