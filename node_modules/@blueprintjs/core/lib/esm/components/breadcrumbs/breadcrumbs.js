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
import { __assign, __decorate, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Boundary, Classes, Position, removeNonHTMLProps } from "../../common";
import { Menu } from "../menu/menu";
import { MenuItem } from "../menu/menuItem";
import { OverflowList } from "../overflow-list/overflowList";
import { Popover } from "../popover/popover";
import { Breadcrumb } from "./breadcrumb";
var Breadcrumbs = /** @class */ (function (_super) {
    __extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOverflow = function (items) {
            var collapseFrom = _this.props.collapseFrom;
            var position = collapseFrom === Boundary.END ? Position.BOTTOM_RIGHT : Position.BOTTOM_LEFT;
            var orderedItems = items;
            if (collapseFrom === Boundary.START) {
                // If we're collapsing from the start, the menu should be read from the bottom to the
                // top, continuing with the breadcrumbs to the right. Since this means the first
                // breadcrumb in the props must be the last in the menu, we need to reverse the overlow
                // order.
                orderedItems = items.slice().reverse();
            }
            return (React.createElement("li", null,
                React.createElement(Popover, __assign({ position: position }, _this.props.popoverProps),
                    React.createElement("span", { className: Classes.BREADCRUMBS_COLLAPSED }),
                    React.createElement(Menu, null, orderedItems.map(_this.renderOverflowBreadcrumb)))));
        };
        _this.renderOverflowBreadcrumb = function (props, index) {
            var isClickable = props.href != null || props.onClick != null;
            var htmlProps = removeNonHTMLProps(props);
            return React.createElement(MenuItem, __assign({ disabled: !isClickable }, htmlProps, { text: props.text, key: index }));
        };
        _this.renderBreadcrumbWrapper = function (props, index) {
            var isCurrent = _this.props.items[_this.props.items.length - 1] === props;
            return React.createElement("li", { key: index }, _this.renderBreadcrumb(props, isCurrent));
        };
        return _this;
    }
    Breadcrumbs.prototype.render = function () {
        var _a = this.props, className = _a.className, collapseFrom = _a.collapseFrom, items = _a.items, minVisibleItems = _a.minVisibleItems, _b = _a.overflowListProps, overflowListProps = _b === void 0 ? {} : _b;
        return (React.createElement(OverflowList, __assign({ collapseFrom: collapseFrom, minVisibleItems: minVisibleItems, tagName: "ul" }, overflowListProps, { className: classNames(Classes.BREADCRUMBS, overflowListProps.className, className), items: items, overflowRenderer: this.renderOverflow, visibleItemRenderer: this.renderBreadcrumbWrapper })));
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
            return React.createElement(Breadcrumb, __assign({ current: isCurrent }, props));
        }
    };
    Breadcrumbs.defaultProps = {
        collapseFrom: Boundary.START,
    };
    Breadcrumbs = __decorate([
        polyfill
    ], Breadcrumbs);
    return Breadcrumbs;
}(AbstractPureComponent2));
export { Breadcrumbs };
//# sourceMappingURL=breadcrumbs.js.map