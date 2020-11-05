"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.Expander = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var Utils = tslib_1.__importStar(require("../../common/utils"));
var tab_1 = require("./tab");
var tabTitle_1 = require("./tabTitle");
exports.Expander = function () { return React.createElement("div", { className: common_1.Classes.FLEX_EXPANDER }); };
var TAB_SELECTOR = "." + common_1.Classes.TAB;
// HACKHACK: https://github.com/palantir/blueprint/issues/4342
var Tabs = /** @class */ (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tablistElement = null;
        _this.refHandlers = {
            tablist: function (tabElement) { return (_this.tablistElement = tabElement); },
        };
        _this.handleKeyDown = function (e) {
            var _a;
            var focusedElement = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            var enabledTabElements = _this.getTabElements().filter(function (el) { return el.getAttribute("aria-disabled") === "false"; });
            var focusedIndex = enabledTabElements.indexOf(focusedElement);
            var direction = _this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                var length_1 = enabledTabElements.length;
                // auto-wrapping at 0 and `length`
                var nextFocusedIndex = (focusedIndex + direction + length_1) % length_1;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        _this.handleKeyPress = function (e) {
            var targetTabElement = e.target.closest(TAB_SELECTOR);
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            // eslint-disable-next-line deprecation/deprecation
            if (targetTabElement != null && common_1.Keys.isKeyboardClick(e.which)) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        _this.handleTabClick = function (newTabId, event) {
            var _a, _b;
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, newTabId, _this.state.selectedTabId, event);
            if (_this.props.selectedTabId === undefined) {
                _this.setState({ selectedTabId: newTabId });
            }
        };
        _this.renderTabPanel = function (tab) {
            var _a = tab.props, className = _a.className, panel = _a.panel, id = _a.id, panelClassName = _a.panelClassName;
            if (panel === undefined) {
                return undefined;
            }
            return (React.createElement("div", { "aria-labelledby": tabTitle_1.generateTabTitleId(_this.props.id, id), "aria-hidden": id !== _this.state.selectedTabId, className: classnames_1.default(common_1.Classes.TAB_PANEL, className, panelClassName), id: tabTitle_1.generateTabPanelId(_this.props.id, id), key: id, role: "tabpanel" }, panel));
        };
        _this.renderTabTitle = function (child) {
            if (isTabElement(child)) {
                var id = child.props.id;
                return (React.createElement(tabTitle_1.TabTitle, tslib_1.__assign({}, child.props, { parentId: _this.props.id, onClick: _this.handleTabClick, selected: id === _this.state.selectedTabId })));
            }
            return child;
        };
        var selectedTabId = _this.getInitialSelectedTabId();
        _this.state = { selectedTabId: selectedTabId };
        return _this;
    }
    Tabs.getDerivedStateFromProps = function (_a) {
        var selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            return { selectedTabId: selectedTabId };
        }
        return null;
    };
    Tabs.prototype.render = function () {
        var _a, _b;
        var _c = this.state, indicatorWrapperStyle = _c.indicatorWrapperStyle, selectedTabId = _c.selectedTabId;
        var tabTitles = React.Children.map(this.props.children, this.renderTabTitle);
        var tabPanels = this.getTabChildren()
            .filter(this.props.renderActiveTabPanelOnly ? function (tab) { return tab.props.id === selectedTabId; } : function () { return true; })
            .map(this.renderTabPanel);
        var tabIndicator = this.props.animate ? (React.createElement("div", { className: common_1.Classes.TAB_INDICATOR_WRAPPER, style: indicatorWrapperStyle },
            React.createElement("div", { className: common_1.Classes.TAB_INDICATOR }))) : null;
        var classes = classnames_1.default(common_1.Classes.TABS, (_a = {}, _a[common_1.Classes.VERTICAL] = this.props.vertical, _a), this.props.className);
        var tabListClasses = classnames_1.default(common_1.Classes.TAB_LIST, (_b = {},
            _b[common_1.Classes.LARGE] = this.props.large,
            _b));
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: tabListClasses, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: this.refHandlers.tablist, role: "tablist" },
                tabIndicator,
                tabTitles),
            tabPanels));
    };
    Tabs.prototype.componentDidMount = function () {
        this.moveSelectionIndicator(false);
    };
    Tabs.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
        else if (prevState.selectedTabId != null) {
            // comparing React nodes is difficult to do with simple logic, so
            // shallowly compare just their props as a workaround.
            var didChildrenChange = !Utils.arraysEqual(this.getTabChildrenProps(prevProps), this.getTabChildrenProps(), Utils.shallowCompareKeys);
            if (didChildrenChange) {
                this.moveSelectionIndicator();
            }
        }
    };
    Tabs.prototype.getInitialSelectedTabId = function () {
        // NOTE: providing an unknown ID will hide the selection
        var _a = this.props, defaultSelectedTabId = _a.defaultSelectedTabId, selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            var tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props.id;
        }
    };
    Tabs.prototype.getKeyCodeDirection = function (e) {
        if (isEventKeyCode(e, common_1.Keys.ARROW_LEFT, common_1.Keys.ARROW_UP)) {
            return -1;
        }
        else if (isEventKeyCode(e, common_1.Keys.ARROW_RIGHT, common_1.Keys.ARROW_DOWN)) {
            return 1;
        }
        return undefined;
    };
    Tabs.prototype.getTabChildrenProps = function (props) {
        if (props === void 0) { props = this.props; }
        return this.getTabChildren(props).map(function (child) { return child.props; });
    };
    /** Filters children to only `<Tab>`s */
    Tabs.prototype.getTabChildren = function (props) {
        if (props === void 0) { props = this.props; }
        return React.Children.toArray(props.children).filter(isTabElement);
    };
    /** Queries root HTML element for all tabs with optional filter selector */
    Tabs.prototype.getTabElements = function (subselector) {
        if (subselector === void 0) { subselector = ""; }
        if (this.tablistElement == null) {
            return [];
        }
        return Array.from(this.tablistElement.querySelectorAll(TAB_SELECTOR + subselector));
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveSelectionIndicator = function (animate) {
        if (animate === void 0) { animate = true; }
        if (this.tablistElement == null || !this.props.animate) {
            return;
        }
        var tabIdSelector = TAB_SELECTOR + "[data-tab-id=\"" + this.state.selectedTabId + "\"]";
        var selectedTabElement = this.tablistElement.querySelector(tabIdSelector);
        var indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            var clientHeight = selectedTabElement.clientHeight, clientWidth = selectedTabElement.clientWidth, offsetLeft = selectedTabElement.offsetLeft, offsetTop = selectedTabElement.offsetTop;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
                width: clientWidth,
            };
            if (!animate) {
                indicatorWrapperStyle.transition = "none";
            }
        }
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /** Insert a `Tabs.Expander` between any two children to right-align all subsequent children. */
    Tabs.Expander = exports.Expander;
    Tabs.Tab = tab_1.Tab;
    Tabs.defaultProps = {
        animate: true,
        large: false,
        renderActiveTabPanelOnly: false,
        vertical: false,
    };
    Tabs.displayName = props_1.DISPLAYNAME_PREFIX + ".Tabs";
    Tabs = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Tabs);
    return Tabs;
}(common_1.AbstractPureComponent2));
exports.Tabs = Tabs;
function isEventKeyCode(e) {
    var codes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        codes[_i - 1] = arguments[_i];
    }
    // HACKHACK: https://github.com/palantir/blueprint/issues/4165
    // eslint-disable-next-line deprecation/deprecation
    return codes.indexOf(e.which) >= 0;
}
function isTabElement(child) {
    return Utils.isElementOfType(child, tab_1.Tab);
}
//# sourceMappingURL=tabs.js.map