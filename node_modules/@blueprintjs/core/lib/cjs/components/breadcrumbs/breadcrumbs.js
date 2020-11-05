"use strict";
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
exports.Breadcrumbs = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var menu_1 = require("../menu/menu");
var menuItem_1 = require("../menu/menuItem");
var overflowList_1 = require("../overflow-list/overflowList");
var popover_1 = require("../popover/popover");
var breadcrumb_1 = require("./breadcrumb");
var Breadcrumbs = /** @class */ (function (_super) {
    tslib_1.__extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOverflow = function (items) {
            var collapseFrom = _this.props.collapseFrom;
            var position = collapseFrom === common_1.Boundary.END ? common_1.Position.BOTTOM_RIGHT : common_1.Position.BOTTOM_LEFT;
            var orderedItems = items;
            if (collapseFrom === common_1.Boundary.START) {
                // If we're collapsing from the start, the menu should be read from the bottom to the
                // top, continuing with the breadcrumbs to the right. Since this means the first
                // breadcrumb in the props must be the last in the menu, we need to reverse the overlow
                // order.
                orderedItems = items.slice().reverse();
            }
            return (React.createElement("li", null,
                React.createElement(popover_1.Popover, tslib_1.__assign({ position: position }, _this.props.popoverProps),
                    React.createElement("span", { className: common_1.Classes.BREADCRUMBS_COLLAPSED }),
                    React.createElement(menu_1.Menu, null, orderedItems.map(_this.renderOverflowBreadcrumb)))));
        };
        _this.renderOverflowBreadcrumb = function (props, index) {
            var isClickable = props.href != null || props.onClick != null;
            var htmlProps = common_1.removeNonHTMLProps(props);
            return React.createElement(menuItem_1.MenuItem, tslib_1.__assign({ disabled: !isClickable }, htmlProps, { text: props.text, key: index }));
        };
        _this.renderBreadcrumbWrapper = function (props, index) {
            var isCurrent = _this.props.items[_this.props.items.length - 1] === props;
            return React.createElement("li", { key: index }, _this.renderBreadcrumb(props, isCurrent));
        };
        return _this;
    }
    Breadcrumbs.prototype.render = function () {
        var _a = this.props, className = _a.className, collapseFrom = _a.collapseFrom, items = _a.items, minVisibleItems = _a.minVisibleItems, _b = _a.overflowListProps, overflowListProps = _b === void 0 ? {} : _b;
        return (React.createElement(overflowList_1.OverflowList, tslib_1.__assign({ collapseFrom: collapseFrom, minVisibleItems: minVisibleItems, tagName: "ul" }, overflowListProps, { className: classnames_1.default(common_1.Classes.BREADCRUMBS, overflowListProps.className, className), items: items, overflowRenderer: this.renderOverflow, visibleItemRenderer: this.renderBreadcrumbWrapper })));
    };
    Breadcrumbs.prototype.renderBreadcrumb = function (props, isCurrent) {
        if (isCurrent && this.props.currentBreadcrumbRenderer != null) {
            return this.props.currentBreadcrumbRenderer(props);
        }
        else if (this.props.breadcrumbRenderer != null) {
            return this.props.breadcrumbRenderer(props);
        }
        else {
            // allow user to override 'current' prop
            return React.createElement(breadcrumb_1.Breadcrumb, tslib_1.__assign({ current: isCurrent }, props));
        }
    };
    Breadcrumbs.defaultProps = {
        collapseFrom: common_1.Boundary.START,
    };
    Breadcrumbs = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Breadcrumbs);
    return Breadcrumbs;
}(common_1.AbstractPureComponent2));
exports.Breadcrumbs = Breadcrumbs;
//# sourceMappingURL=breadcrumbs.js.map