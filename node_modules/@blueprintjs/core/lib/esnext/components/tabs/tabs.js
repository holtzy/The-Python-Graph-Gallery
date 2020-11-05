/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, Keys } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import * as Utils from "../../common/utils";
import { Tab } from "./tab";
import { generateTabPanelId, generateTabTitleId, TabTitle } from "./tabTitle";
export const Expander = () => React.createElement("div", { className: Classes.FLEX_EXPANDER });
const TAB_SELECTOR = `.${Classes.TAB}`;
// HACKHACK: https://github.com/palantir/blueprint/issues/4342
let Tabs = class Tabs extends AbstractPureComponent2 {
    constructor(props) {
        super(props);
        this.tablistElement = null;
        this.refHandlers = {
            tablist: (tabElement) => (this.tablistElement = tabElement),
        };
        this.handleKeyDown = (e) => {
            const focusedElement = document.activeElement?.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            const enabledTabElements = this.getTabElements().filter(el => el.getAttribute("aria-disabled") === "false");
            const focusedIndex = enabledTabElements.indexOf(focusedElement);
            const direction = this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                const { length } = enabledTabElements;
                // auto-wrapping at 0 and `length`
                const nextFocusedIndex = (focusedIndex + direction + length) % length;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        this.handleKeyPress = (e) => {
            const targetTabElement = e.target.closest(TAB_SELECTOR);
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            // eslint-disable-next-line deprecation/deprecation
            if (targetTabElement != null && Keys.isKeyboardClick(e.which)) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        this.handleTabClick = (newTabId, event) => {
            this.props.onChange?.(newTabId, this.state.selectedTabId, event);
            if (this.props.selectedTabId === undefined) {
                this.setState({ selectedTabId: newTabId });
            }
        };
        this.renderTabPanel = (tab) => {
            const { className, panel, id, panelClassName } = tab.props;
            if (panel === undefined) {
                return undefined;
            }
            return (React.createElement("div", { "aria-labelledby": generateTabTitleId(this.props.id, id), "aria-hidden": id !== this.state.selectedTabId, className: classNames(Classes.TAB_PANEL, className, panelClassName), id: generateTabPanelId(this.props.id, id), key: id, role: "tabpanel" }, panel));
        };
        this.renderTabTitle = (child) => {
            if (isTabElement(child)) {
                const { id } = child.props;
                return (React.createElement(TabTitle, Object.assign({}, child.props, { parentId: this.props.id, onClick: this.handleTabClick, selected: id === this.state.selectedTabId })));
            }
            return child;
        };
        const selectedTabId = this.getInitialSelectedTabId();
        this.state = { selectedTabId };
    }
    static getDerivedStateFromProps({ selectedTabId }) {
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            return { selectedTabId };
        }
        return null;
    }
    render() {
        const { indicatorWrapperStyle, selectedTabId } = this.state;
        const tabTitles = React.Children.map(this.props.children, this.renderTabTitle);
        const tabPanels = this.getTabChildren()
            .filter(this.props.renderActiveTabPanelOnly ? tab => tab.props.id === selectedTabId : () => true)
            .map(this.renderTabPanel);
        const tabIndicator = this.props.animate ? (React.createElement("div", { className: Classes.TAB_INDICATOR_WRAPPER, style: indicatorWrapperStyle },
            React.createElement("div", { className: Classes.TAB_INDICATOR }))) : null;
        const classes = classNames(Classes.TABS, { [Classes.VERTICAL]: this.props.vertical }, this.props.className);
        const tabListClasses = classNames(Classes.TAB_LIST, {
            [Classes.LARGE]: this.props.large,
        });
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: tabListClasses, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: this.refHandlers.tablist, role: "tablist" },
                tabIndicator,
                tabTitles),
            tabPanels));
    }
    componentDidMount() {
        this.moveSelectionIndicator(false);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
        else if (prevState.selectedTabId != null) {
            // comparing React nodes is difficult to do with simple logic, so
            // shallowly compare just their props as a workaround.
            const didChildrenChange = !Utils.arraysEqual(this.getTabChildrenProps(prevProps), this.getTabChildrenProps(), Utils.shallowCompareKeys);
            if (didChildrenChange) {
                this.moveSelectionIndicator();
            }
        }
    }
    getInitialSelectedTabId() {
        // NOTE: providing an unknown ID will hide the selection
        const { defaultSelectedTabId, selectedTabId } = this.props;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            const tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props.id;
        }
    }
    getKeyCodeDirection(e) {
        if (isEventKeyCode(e, Keys.ARROW_LEFT, Keys.ARROW_UP)) {
            return -1;
        }
        else if (isEventKeyCode(e, Keys.ARROW_RIGHT, Keys.ARROW_DOWN)) {
            return 1;
        }
        return undefined;
    }
    getTabChildrenProps(props = this.props) {
        return this.getTabChildren(props).map(child => child.props);
    }
    /** Filters children to only `<Tab>`s */
    getTabChildren(props = this.props) {
        return React.Children.toArray(props.children).filter(isTabElement);
    }
    /** Queries root HTML element for all tabs with optional filter selector */
    getTabElements(subselector = "") {
        if (this.tablistElement == null) {
            return [];
        }
        return Array.from(this.tablistElement.querySelectorAll(TAB_SELECTOR + subselector));
    }
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    moveSelectionIndicator(animate = true) {
        if (this.tablistElement == null || !this.props.animate) {
            return;
        }
        const tabIdSelector = `${TAB_SELECTOR}[data-tab-id="${this.state.selectedTabId}"]`;
        const selectedTabElement = this.tablistElement.querySelector(tabIdSelector);
        let indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            const { clientHeight, clientWidth, offsetLeft, offsetTop } = selectedTabElement;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: `translateX(${Math.floor(offsetLeft)}px) translateY(${Math.floor(offsetTop)}px)`,
                width: clientWidth,
            };
            if (!animate) {
                indicatorWrapperStyle.transition = "none";
            }
        }
        this.setState({ indicatorWrapperStyle });
    }
};
/** Insert a `Tabs.Expander` between any two children to right-align all subsequent children. */
Tabs.Expander = Expander;
Tabs.Tab = Tab;
Tabs.defaultProps = {
    animate: true,
    large: false,
    renderActiveTabPanelOnly: false,
    vertical: false,
};
Tabs.displayName = `${DISPLAYNAME_PREFIX}.Tabs`;
Tabs = __decorate([
    polyfill
], Tabs);
export { Tabs };
function isEventKeyCode(e, ...codes) {
    // HACKHACK: https://github.com/palantir/blueprint/issues/4165
    // eslint-disable-next-line deprecation/deprecation
    return codes.indexOf(e.which) >= 0;
}
function isTabElement(child) {
    return Utils.isElementOfType(child, Tab);
}
//# sourceMappingURL=tabs.js.map