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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AbstractPureComponent2, Classes } from "../../common";
import * as Errors from "../../common/errors";
import { PanelView } from "./panelView";
let PanelStack = class PanelStack extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            direction: "push",
            stack: this.props.stack != null
                ? this.props.stack.slice().reverse()
                : this.props.initialPanel !== undefined
                    ? [this.props.initialPanel]
                    : [],
        };
        this.renderPanel = (panel, index) => {
            const { renderActivePanelOnly, showPanelHeader = true } = this.props;
            const { stack } = this.state;
            // With renderActivePanelOnly={false} we would keep all the CSSTransitions rendered,
            // therefore they would not trigger the "enter" transition event as they were entered.
            // To force the enter event, we want to change the key, but stack.length is not enough
            // and a single panel should not rerender as long as it's hidden.
            // This key contains two parts: first one, stack.length - index is constant (and unique) for each panel,
            // second one, active changes only when the panel becomes or stops being active.
            const layer = stack.length - index;
            const key = renderActivePanelOnly ? stack.length : layer;
            return (React.createElement(CSSTransition, { classNames: Classes.PANEL_STACK, key: key, timeout: 400 },
                React.createElement(PanelView, { onClose: this.handlePanelClose, onOpen: this.handlePanelOpen, panel: panel, previousPanel: stack[index + 1], showHeader: showPanelHeader })));
        };
        this.handlePanelClose = (panel) => {
            const { stack } = this.state;
            // only remove this panel if it is at the top and not the only one.
            if (stack[0] !== panel || stack.length <= 1) {
                return;
            }
            this.props.onClose?.(panel);
            if (this.props.stack == null) {
                this.setState(state => ({
                    direction: "pop",
                    stack: state.stack.slice(1),
                }));
            }
        };
        this.handlePanelOpen = (panel) => {
            this.props.onOpen?.(panel);
            if (this.props.stack == null) {
                this.setState(state => ({
                    direction: "push",
                    stack: [panel, ...state.stack],
                }));
            }
        };
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        // Always update local stack if stack prop changes
        if (this.props.stack !== prevProps.stack && prevProps.stack != null) {
            this.setState({ stack: this.props.stack.slice().reverse() });
        }
        // Only update animation direction if stack length changes
        const stackLength = this.props.stack != null ? this.props.stack.length : 0;
        const prevStackLength = prevProps.stack != null ? prevProps.stack.length : 0;
        if (stackLength !== prevStackLength && prevProps.stack != null) {
            this.setState({
                direction: prevProps.stack.length - this.props.stack.length < 0 ? "push" : "pop",
            });
        }
    }
    render() {
        const classes = classNames(Classes.PANEL_STACK, `${Classes.PANEL_STACK}-${this.state.direction}`, this.props.className);
        return (React.createElement(TransitionGroup, { className: classes, component: "div" }, this.renderPanels()));
    }
    validateProps(props) {
        if ((props.initialPanel == null && props.stack == null) ||
            (props.initialPanel != null && props.stack != null)) {
            throw new Error(Errors.PANEL_STACK_INITIAL_PANEL_STACK_MUTEX);
        }
        if (props.stack != null && props.stack.length === 0) {
            throw new Error(Errors.PANEL_STACK_REQUIRES_PANEL);
        }
    }
    renderPanels() {
        const { renderActivePanelOnly = true } = this.props;
        const { stack } = this.state;
        if (stack.length === 0) {
            return null;
        }
        const panelsToRender = renderActivePanelOnly ? [stack[0]] : stack;
        const panelViews = panelsToRender.map(this.renderPanel).reverse();
        return panelViews;
    }
};
PanelStack = __decorate([
    polyfill
], PanelStack);
export { PanelStack };
//# sourceMappingURL=panelStack.js.map