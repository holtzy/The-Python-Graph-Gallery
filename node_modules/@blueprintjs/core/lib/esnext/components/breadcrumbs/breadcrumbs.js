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
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Boundary, Classes, Position, removeNonHTMLProps } from "../../common";
import { Menu } from "../menu/menu";
import { MenuItem } from "../menu/menuItem";
import { OverflowList } from "../overflow-list/overflowList";
import { Popover } from "../popover/popover";
import { Breadcrumb } from "./breadcrumb";
let Breadcrumbs = class Breadcrumbs extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.renderOverflow = (items) => {
            const { collapseFrom } = this.props;
            const position = collapseFrom === Boundary.END ? Position.BOTTOM_RIGHT : Position.BOTTOM_LEFT;
            let orderedItems = items;
            if (collapseFrom === Boundary.START) {
                // If we're collapsing from the start, the menu should be read from the bottom to the
                // top, continuing with the breadcrumbs to the right. Since this means the first
                // breadcrumb in the props must be the last in the menu, we need to reverse the overlow
                // order.
                orderedItems = items.slice().reverse();
            }
            return (React.createElement("li", null,
                React.createElement(Popover, Object.assign({ position: position }, this.props.popoverProps),
                    React.createElement("span", { className: Classes.BREADCRUMBS_COLLAPSED }),
                    React.createElement(Menu, null, orderedItems.map(this.renderOverflowBreadcrumb)))));
        };
        this.renderOverflowBreadcrumb = (props, index) => {
            const isClickable = props.href != null || props.onClick != null;
            const htmlProps = removeNonHTMLProps(props);
            return React.createElement(MenuItem, Object.assign({ disabled: !isClickable }, htmlProps, { text: props.text, key: index }));
        };
        this.renderBreadcrumbWrapper = (props, index) => {
            const isCurrent = this.props.items[this.props.items.length - 1] === props;
            return React.createElement("li", { key: index }, this.renderBreadcrumb(props, isCurrent));
        };
    }
    render() {
        const { className, collapseFrom, items, minVisibleItems, overflowListProps = {} } = this.props;
        return (React.createElement(OverflowList, Object.assign({ collapseFrom: collapseFrom, minVisibleItems: minVisibleItems, tagName: "ul" }, overflowListProps, { className: classNames(Classes.BREADCRUMBS, overflowListProps.className, className), items: items, overflowRenderer: this.renderOverflow, visibleItemRenderer: this.renderBreadcrumbWrapper })));
    }
    renderBreadcrumb(props, isCurrent) {
        if (isCurrent && this.props.currentBreadcrumbRenderer != null) {
            return this.props.currentBreadcrumbRenderer(props);
        }
        else if (this.props.breadcrumbRenderer != null) {
            return this.props.breadcrumbRenderer(props);
        }
        else {
            // allow user to override 'current' prop
            return React.createElement(Breadcrumb, Object.assign({ current: isCurrent }, props));
        }
    }
};
Breadcrumbs.defaultProps = {
    collapseFrom: Boundary.START,
};
Breadcrumbs = __decorate([
    polyfill
], Breadcrumbs);
export { Breadcrumbs };
//# sourceMappingURL=breadcrumbs.js.map