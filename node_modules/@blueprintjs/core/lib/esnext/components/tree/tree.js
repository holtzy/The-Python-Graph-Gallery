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
import { isFunction } from "../../common/utils";
import { TreeNode } from "./treeNode";
// eslint-disable-next-line @typescript-eslint/ban-types
export class Tree extends React.Component {
    constructor() {
        super(...arguments);
        this.nodeRefs = {};
        this.handleNodeCollapse = (node, e) => {
            this.handlerHelper(this.props.onNodeCollapse, node, e);
        };
        this.handleNodeClick = (node, e) => {
            this.handlerHelper(this.props.onNodeClick, node, e);
        };
        this.handleContentRef = (node, element) => {
            if (element != null) {
                this.nodeRefs[node.props.id] = element;
            }
            else {
                // don't want our object to get bloated with old keys
                delete this.nodeRefs[node.props.id];
            }
        };
        this.handleNodeContextMenu = (node, e) => {
            this.handlerHelper(this.props.onNodeContextMenu, node, e);
        };
        this.handleNodeDoubleClick = (node, e) => {
            this.handlerHelper(this.props.onNodeDoubleClick, node, e);
        };
        this.handleNodeExpand = (node, e) => {
            this.handlerHelper(this.props.onNodeExpand, node, e);
        };
        this.handleNodeMouseEnter = (node, e) => {
            this.handlerHelper(this.props.onNodeMouseEnter, node, e);
        };
        this.handleNodeMouseLeave = (node, e) => {
            this.handlerHelper(this.props.onNodeMouseLeave, node, e);
        };
    }
    static ofType() {
        return Tree;
    }
    static nodeFromPath(path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    }
    render() {
        return (React.createElement("div", { className: classNames(Classes.TREE, this.props.className) }, this.renderNodes(this.props.contents, [], Classes.TREE_ROOT)));
    }
    /**
     * Returns the underlying HTML element of the `Tree` node with an id of `nodeId`.
     * This element does not contain the children of the node, only its label and controls.
     * If the node is not currently mounted, `undefined` is returned.
     */
    getNodeContentElement(nodeId) {
        return this.nodeRefs[nodeId];
    }
    renderNodes(treeNodes, currentPath, className) {
        if (treeNodes == null) {
            return null;
        }
        const nodeItems = treeNodes.map((node, i) => {
            const elementPath = currentPath.concat(i);
            const TypedTreeNode = TreeNode.ofType();
            return (React.createElement(TypedTreeNode, Object.assign({}, node, { key: node.id, contentRef: this.handleContentRef, depth: elementPath.length - 1, onClick: this.handleNodeClick, onContextMenu: this.handleNodeContextMenu, onCollapse: this.handleNodeCollapse, onDoubleClick: this.handleNodeDoubleClick, onExpand: this.handleNodeExpand, onMouseEnter: this.handleNodeMouseEnter, onMouseLeave: this.handleNodeMouseLeave, path: elementPath }), this.renderNodes(node.childNodes, elementPath)));
        });
        return React.createElement("ul", { className: classNames(Classes.TREE_NODE_LIST, className) }, nodeItems);
    }
    handlerHelper(handlerFromProps, node, e) {
        if (isFunction(handlerFromProps)) {
            const nodeData = Tree.nodeFromPath(node.props.path, this.props.contents);
            handlerFromProps(nodeData, node.props.path, e);
        }
    }
}
Tree.displayName = `${DISPLAYNAME_PREFIX}.Tree`;
//# sourceMappingURL=tree.js.map