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
import * as Classes from "../../common/classes";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Collapse } from "../collapse/collapse";
import { Icon } from "../icon/icon";
// eslint-disable-next-line @typescript-eslint/ban-types
export class TreeNode extends React.Component {
    constructor() {
        super(...arguments);
        this.handleCaretClick = (e) => {
            e.stopPropagation();
            const { isExpanded, onCollapse, onExpand } = this.props;
            (isExpanded ? onCollapse : onExpand)?.(this, e);
        };
        this.handleClick = (e) => {
            this.props.onClick?.(this, e);
        };
        this.handleContentRef = (element) => {
            this.props.contentRef?.(this, element);
        };
        this.handleContextMenu = (e) => {
            this.props.onContextMenu?.(this, e);
        };
        this.handleDoubleClick = (e) => {
            this.props.onDoubleClick?.(this, e);
        };
        this.handleMouseEnter = (e) => {
            this.props.onMouseEnter?.(this, e);
        };
        this.handleMouseLeave = (e) => {
            this.props.onMouseLeave?.(this, e);
        };
    }
    static ofType() {
        return TreeNode;
    }
    render() {
        const { children, className, disabled, icon, isExpanded, isSelected, label } = this.props;
        const classes = classNames(Classes.TREE_NODE, {
            [Classes.DISABLED]: disabled,
            [Classes.TREE_NODE_SELECTED]: isSelected,
            [Classes.TREE_NODE_EXPANDED]: isExpanded,
        }, className);
        const contentClasses = classNames(Classes.TREE_NODE_CONTENT, `${Classes.TREE_NODE_CONTENT}-${this.props.depth}`);
        const eventHandlers = disabled === true
            ? {}
            : {
                onClick: this.handleClick,
                onContextMenu: this.handleContextMenu,
                onDoubleClick: this.handleDoubleClick,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            };
        return (React.createElement("li", { className: classes },
            React.createElement("div", Object.assign({ className: contentClasses, ref: this.handleContentRef }, eventHandlers),
                this.maybeRenderCaret(),
                React.createElement(Icon, { className: Classes.TREE_NODE_ICON, icon: icon }),
                React.createElement("span", { className: Classes.TREE_NODE_LABEL }, label),
                this.maybeRenderSecondaryLabel()),
            React.createElement(Collapse, { isOpen: isExpanded }, children)));
    }
    maybeRenderCaret() {
        const { children, isExpanded, disabled, hasCaret = React.Children.count(children) > 0 } = this.props;
        if (hasCaret) {
            const caretClasses = classNames(Classes.TREE_NODE_CARET, isExpanded ? Classes.TREE_NODE_CARET_OPEN : Classes.TREE_NODE_CARET_CLOSED);
            const onClick = disabled === true ? undefined : this.handleCaretClick;
            return React.createElement(Icon, { className: caretClasses, onClick: onClick, icon: "chevron-right" });
        }
        return React.createElement("span", { className: Classes.TREE_NODE_CARET_NONE });
    }
    maybeRenderSecondaryLabel() {
        if (this.props.secondaryLabel != null) {
            return React.createElement("span", { className: Classes.TREE_NODE_SECONDARY_LABEL }, this.props.secondaryLabel);
        }
        else {
            return undefined;
        }
    }
}
TreeNode.displayName = `${DISPLAYNAME_PREFIX}.TreeNode`;
//# sourceMappingURL=treeNode.js.map