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
exports.Tree = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var Classes = tslib_1.__importStar(require("../../common/classes"));
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var treeNode_1 = require("./treeNode");
// eslint-disable-next-line @typescript-eslint/ban-types
var Tree = /** @class */ (function (_super) {
    tslib_1.__extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeRefs = {};
        _this.handleNodeCollapse = function (node, e) {
            _this.handlerHelper(_this.props.onNodeCollapse, node, e);
        };
        _this.handleNodeClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeClick, node, e);
        };
        _this.handleContentRef = function (node, element) {
            if (element != null) {
                _this.nodeRefs[node.props.id] = element;
            }
            else {
                // don't want our object to get bloated with old keys
                delete _this.nodeRefs[node.props.id];
            }
        };
        _this.handleNodeContextMenu = function (node, e) {
            _this.handlerHelper(_this.props.onNodeContextMenu, node, e);
        };
        _this.handleNodeDoubleClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeDoubleClick, node, e);
        };
        _this.handleNodeExpand = function (node, e) {
            _this.handlerHelper(_this.props.onNodeExpand, node, e);
        };
        _this.handleNodeMouseEnter = function (node, e) {
            _this.handlerHelper(_this.props.onNodeMouseEnter, node, e);
        };
        _this.handleNodeMouseLeave = function (node, e) {
            _this.handlerHelper(_this.props.onNodeMouseLeave, node, e);
        };
        return _this;
    }
    Tree.ofType = function () {
        return Tree;
    };
    Tree.nodeFromPath = function (path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    };
    Tree.prototype.render = function () {
        return (React.createElement("div", { className: classnames_1.default(Classes.TREE, this.props.className) }, this.renderNodes(this.props.contents, [], Classes.TREE_ROOT)));
    };
    /**
     * Returns the underlying HTML element of the `Tree` node with an id of `nodeId`.
     * This element does not contain the children of the node, only its label and controls.
     * If the node is not currently mounted, `undefined` is returned.
     */
    Tree.prototype.getNodeContentElement = function (nodeId) {
        return this.nodeRefs[nodeId];
    };
    Tree.prototype.renderNodes = function (treeNodes, currentPath, className) {
        var _this = this;
        if (treeNodes == null) {
            return null;
        }
        var nodeItems = treeNodes.map(function (node, i) {
            var elementPath = currentPath.concat(i);
            var TypedTreeNode = treeNode_1.TreeNode.ofType();
            return (React.createElement(TypedTreeNode, tslib_1.__assign({}, node, { key: node.id, contentRef: _this.handleContentRef, depth: elementPath.length - 1, onClick: _this.handleNodeClick, onContextMenu: _this.handleNodeContextMenu, onCollapse: _this.handleNodeCollapse, onDoubleClick: _this.handleNodeDoubleClick, onExpand: _this.handleNodeExpand, onMouseEnter: _this.handleNodeMouseEnter, onMouseLeave: _this.handleNodeMouseLeave, path: elementPath }), _this.renderNodes(node.childNodes, elementPath)));
        });
        return React.createElement("ul", { className: classnames_1.default(Classes.TREE_NODE_LIST, className) }, nodeItems);
    };
    Tree.prototype.handlerHelper = function (handlerFromProps, node, e) {
        if (utils_1.isFunction(handlerFromProps)) {
            var nodeData = Tree.nodeFromPath(node.props.path, this.props.contents);
            handlerFromProps(nodeData, node.props.path, e);
        }
    };
    Tree.displayName = props_1.DISPLAYNAME_PREFIX + ".Tree";
    return Tree;
}(React.Component));
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map