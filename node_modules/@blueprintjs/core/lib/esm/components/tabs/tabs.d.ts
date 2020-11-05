import * as React from "react";
import { AbstractPureComponent2 } from "../../common";
import { IProps } from "../../common/props";
import { Tab, TabId } from "./tab";
export declare const Expander: React.FunctionComponent;
export interface ITabsProps extends IProps {
    /**
     * Whether the selected tab indicator should animate its movement.
     * @default true
     */
    animate?: boolean;
    /**
     * Initial selected tab `id`, for uncontrolled usage.
     * Note that this prop refers only to `<Tab>` children; other types of elements are ignored.
     * @default first tab
     */
    defaultSelectedTabId?: TabId;
    /**
     * Unique identifier for this `Tabs` container. This will be combined with the `id` of each
     * `Tab` child to generate ARIA accessibility attributes. IDs are required and should be
     * unique on the page to support server-side rendering.
     */
    id: TabId;
    /**
     * If set to `true`, the tab titles will display with larger styling.
     * This will apply large styles only to the tabs at this level, not to nested tabs.
     * @default false
     */
    large?: boolean;
    /**
     * Whether inactive tab panels should be removed from the DOM and unmounted in React.
     * This can be a performance enhancement when rendering many complex panels, but requires
     * careful support for unmounting and remounting.
     * @default false
     */
    renderActiveTabPanelOnly?: boolean;
    /**
     * Selected tab `id`, for controlled usage.
     * Providing this prop will put the component in controlled mode.
     * Unknown ids will result in empty selection (no errors).
     */
    selectedTabId?: TabId;
    /**
     * Whether to show tabs stacked vertically on the left side.
     * @default false
     */
    vertical?: boolean;
    /**
     * A callback function that is invoked when a tab in the tab list is clicked.
     */
    onChange?(newTabId: TabId, prevTabId: TabId | undefined, event: React.MouseEvent<HTMLElement>): void;
}
export interface ITabsState {
    indicatorWrapperStyle?: React.CSSProperties;
    selectedTabId?: TabId;
}
export declare class Tabs extends AbstractPureComponent2<ITabsProps, ITabsState> {
    /** Insert a `Tabs.Expander` between any two children to right-align all subsequent children. */
    static Expander: React.FunctionComponent<{}>;
    static Tab: typeof Tab;
    static defaultProps: Partial<ITabsProps>;
    static displayName: string;
    static getDerivedStateFromProps({ selectedTabId }: ITabsProps): {
        selectedTabId: React.ReactText;
    } | null;
    private tablistElement;
    private refHandlers;
    constructor(props: ITabsProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ITabsProps, prevState: ITabsState): void;
    private getInitialSelectedTabId;
    private getKeyCodeDirection;
    private getTabChildrenProps;
    /** Filters children to only `<Tab>`s */
    private getTabChildren;
    /** Queries root HTML element for all tabs with optional filter selector */
    private getTabElements;
    private handleKeyDown;
    private handleKeyPress;
    private handleTabClick;
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    private moveSelectionIndicator;
    private renderTabPanel;
    private renderTabTitle;
}
