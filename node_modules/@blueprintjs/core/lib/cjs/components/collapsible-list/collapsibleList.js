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
exports.CollapsibleList = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var boundary_1 = require("../../common/boundary");
var Classes = tslib_1.__importStar(require("../../common/classes"));
var Errors = tslib_1.__importStar(require("../../common/errors"));
var position_1 = require("../../common/position");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var menu_1 = require("../menu/menu");
var menuItem_1 = require("../menu/menuItem");
var popover_1 = require("../popover/popover");
/** @deprecated use `<OverflowList>` for automatic overflow based on available space. */
var CollapsibleList = /** @class */ (function (_super) {
    tslib_1.__extends(CollapsibleList, _super);
    function CollapsibleList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var collapseFrom = this.props.collapseFrom;
        var childrenLength = React.Children.count(this.props.children);
        var _a = this.partitionChildren(), visibleChildren = _a[0], collapsedChildren = _a[1];
        var visibleItems = visibleChildren.map(function (child, index) {
            var absoluteIndex = collapseFrom === boundary_1.Boundary.START ? childrenLength - 1 - index : index;
            return (React.createElement("li", { className: _this.props.visibleItemClassName, key: absoluteIndex }, _this.props.visibleItemRenderer(child.props, absoluteIndex)));
        });
        if (collapseFrom === boundary_1.Boundary.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        var collapsedPopover;
        if (collapsedChildren.length > 0) {
            var position = collapseFrom === boundary_1.Boundary.END ? position_1.Position.BOTTOM_RIGHT : position_1.Position.BOTTOM_LEFT;
            collapsedPopover = (React.createElement("li", { className: this.props.visibleItemClassName },
                React.createElement(popover_1.Popover, tslib_1.__assign({ content: React.createElement(menu_1.Menu, null, collapsedChildren), position: position }, this.props.dropdownProps), this.props.dropdownTarget)));
        }
        return (React.createElement("ul", { className: classnames_1.default(Classes.COLLAPSIBLE_LIST, this.props.className) },
            collapseFrom === boundary_1.Boundary.START ? collapsedPopover : null,
            visibleItems,
            collapseFrom === boundary_1.Boundary.END ? collapsedPopover : null));
    };
    // splits the list of children into two arrays: visible and collapsed
    CollapsibleList.prototype.partitionChildren = function () {
        var childrenArray = React.Children.map(this.props.children, function (child, index) {
            if (!utils_1.isElementOfType(child, menuItem_1.MenuItem)) {
                throw new Error(Errors.COLLAPSIBLE_LIST_INVALID_CHILD);
            }
            return React.cloneElement(child, { key: "visible-" + index });
        });
        if (childrenArray == null) {
            return [[], []];
        }
        if (this.props.collapseFrom === boundary_1.Boundary.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        var visibleItemCount = this.props.visibleItemCount;
        return [childrenArray.slice(0, visibleItemCount), childrenArray.slice(visibleItemCount)];
    };
    CollapsibleList.displayName = props_1.DISPLAYNAME_PREFIX + ".CollapsibleList";
    CollapsibleList.defaultProps = {
        collapseFrom: boundary_1.Boundary.START,
        visibleItemCount: 3,
    };
    return CollapsibleList;
}(React.Component));
exports.CollapsibleList = CollapsibleList;
//# sourceMappingURL=collapsibleList.js.map