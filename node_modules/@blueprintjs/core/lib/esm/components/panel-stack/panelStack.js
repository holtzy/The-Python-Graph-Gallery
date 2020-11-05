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
import { __decorate, __extends, __spreadArrays } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AbstractPureComponent2, Classes } from "../../common";
import * as Errors from "../../common/errors";
import { PanelView } from "./panelView";
var PanelStack = /** @class */ (function (_super) {
    __extends(PanelStack, _super);
    function PanelStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            direction: "push",
            stack: _this.props.stack != null
                ? _this.props.stack.slice().reverse()
                : _this.props.initialPanel !== undefined
                    ? [_this.props.initialPanel]
                    : [],
        };
        _this.renderPanel = function (panel, index) {
            var _a = _this.props, renderActivePanelOnly = _a.renderActivePanelOnly, _b = _a.showPanelHeader, showPanelHeader = _b === void 0 ? true : _b;
            var stack = _this.state.stack;
            // With renderActivePanelOnly={false} we would keep all the CSSTransitions rendered,
            // therefore they would not trigger the "enter" transition event as they were entered.
            // To force the enter event, we want to change the key, but stack.length is not enough
            // and a single panel should not rerender as long as it's hidden.
            // This key contains two parts: first one, stack.length - index is constant (and unique) for each panel,
            // second one, active changes only when the panel becomes or stops being active.
            var layer = stack.length - index;
            var key = renderActivePanelOnly ? stack.length : layer;
            return (React.createElement(CSSTransition, { classNames: Classes.PANEL_STACK, key: key, timeout: 400 },
                React.createElement(PanelView, { onClose: _this.handlePanelClose, onOpen: _this.handlePanelOpen, panel: panel, previousPanel: stack[index + 1], showHeader: showPanelHeader })));
        };
        _this.handlePanelClose = function (panel) {
            var _a, _b;
            var stack = _this.state.stack;
            // only remove this panel if it is at the top and not the only one.
            if (stack[0] !== panel || stack.length <= 1) {
                return;
            }
            (_b = (_a = _this.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a, panel);
            if (_this.props.stack == null) {
                _this.setState(function (state) { return ({
                    direction: "pop",
                    stack: state.stack.slice(1),
                }); });
            }
        };
        _this.handlePanelOpen = function (panel) {
            var _a, _b;
            (_b = (_a = _this.props).onOpen) === null || _b === void 0 ? void 0 : _b.call(_a, panel);
            if (_this.props.stack == null) {
                _this.setState(function (state) { return ({
                    direction: "push",
                    stack: __spreadArrays([panel], state.stack),
                }); });
            }
        };
        return _this;
    }
    PanelStack.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        // Always update local stack if stack prop changes
        if (this.props.stack !== prevProps.stack && prevProps.stack != null) {
            this.setState({ stack: this.props.stack.slice().reverse() });
        }
        // Only update animation direction if stack length changes
        var stackLength = this.props.stack != null ? this.props.stack.length : 0;
        var prevStackLength = prevProps.stack != null ? prevProps.stack.length : 0;
        if (stackLength !== prevStackLength && prevProps.stack != null) {
            this.setState({
                direction: prevProps.stack.length - this.props.stack.length < 0 ? "push" : "pop",
            });
        }
    };
    PanelStack.prototype.render = function () {
        var classes = classNames(Classes.PANEL_STACK, Classes.PANEL_STACK + "-" + this.state.direction, this.props.className);
        return (React.createElement(TransitionGroup, { className: classes, component: "div" }, this.renderPanels()));
    };
    PanelStack.prototype.validateProps = function (props) {
        if ((props.initialPanel == null && props.stack == null) ||
            (props.initialPanel != null && props.stack != null)) {
            throw new Error(Errors.PANEL_STACK_INITIAL_PANEL_STACK_MUTEX);
        }
        if (props.stack != null && props.stack.length === 0) {
            throw new Error(Errors.PANEL_STACK_REQUIRES_PANEL);
        }
    };
    PanelStack.prototype.renderPanels = function () {
        var _a = this.props.renderActivePanelOnly, renderActivePanelOnly = _a === void 0 ? true : _a;
        var stack = this.state.stack;
        if (stack.length === 0) {
            return null;
        }
        var panelsToRender = renderActivePanelOnly ? [stack[0]] : stack;
        var panelViews = panelsToRender.map(this.renderPanel).reverse();
        return panelViews;
    };
    PanelStack = __decorate([
        polyfill
    ], PanelStack);
    return PanelStack;
}(AbstractPureComponent2));
export { PanelStack };
//# sourceMappingURL=panelStack.js.map