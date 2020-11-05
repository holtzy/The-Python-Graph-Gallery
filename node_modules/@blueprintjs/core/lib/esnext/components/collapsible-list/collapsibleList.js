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
import classNames from "classnames";
import * as React from "react";
import { Boundary } from "../../common/boundary";
import * as Classes from "../../common/classes";
import * as Errors from "../../common/errors";
import { Position } from "../../common/position";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { isElementOfType } from "../../common/utils";
import { Menu } from "../menu/menu";
import { MenuItem } from "../menu/menuItem";
import { Popover } from "../popover/popover";
/** @deprecated use `<OverflowList>` for automatic overflow based on available space. */
export class CollapsibleList extends React.Component {
    render() {
        const { collapseFrom } = this.props;
        const childrenLength = React.Children.count(this.props.children);
        const [visibleChildren, collapsedChildren] = this.partitionChildren();
        const visibleItems = visibleChildren.map((child, index) => {
            const absoluteIndex = collapseFrom === Boundary.START ? childrenLength - 1 - index : index;
            return (React.createElement("li", { className: this.props.visibleItemClassName, key: absoluteIndex }, this.props.visibleItemRenderer(child.props, absoluteIndex)));
        });
        if (collapseFrom === Boundary.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        let collapsedPopover;
        if (collapsedChildren.length > 0) {
            const position = collapseFrom === Boundary.END ? Position.BOTTOM_RIGHT : Position.BOTTOM_LEFT;
            collapsedPopover = (React.createElement("li", { className: this.props.visibleItemClassName },
                React.createElement(Popover, Object.assign({ content: React.createElement(Menu, null, collapsedChildren), position: position }, this.props.dropdownProps), this.props.dropdownTarget)));
        }
        return (React.createElement("ul", { className: classNames(Classes.COLLAPSIBLE_LIST, this.props.className) },
            collapseFrom === Boundary.START ? collapsedPopover : null,
            visibleItems,
            collapseFrom === Boundary.END ? collapsedPopover : null));
    }
    // splits the list of children into two arrays: visible and collapsed
    partitionChildren() {
        const childrenArray = React.Children.map(this.props.children, (child, index) => {
            if (!isElementOfType(child, MenuItem)) {
                throw new Error(Errors.COLLAPSIBLE_LIST_INVALID_CHILD);
            }
            return React.cloneElement(child, { key: `visible-${index}` });
        });
        if (childrenArray == null) {
            return [[], []];
        }
        if (this.props.collapseFrom === Boundary.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        const { visibleItemCount } = this.props;
        return [childrenArray.slice(0, visibleItemCount), childrenArray.slice(visibleItemCount)];
    }
}
CollapsibleList.displayName = `${DISPLAYNAME_PREFIX}.CollapsibleList`;
CollapsibleList.defaultProps = {
    collapseFrom: Boundary.START,
    visibleItemCount: 3,
};
//# sourceMappingURL=collapsibleList.js.map