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
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import { Button } from "../button/buttons";
import { Text } from "../text/text";
let PanelView = class PanelView extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.handleClose = () => this.props.onClose(this.props.panel);
    }
    render() {
        const { panel, onOpen } = this.props;
        // two <span> tags in header ensure title is centered as long as
        // possible, due to `flex: 1` magic.
        return (React.createElement("div", { className: Classes.PANEL_STACK_VIEW },
            this.maybeRenderHeader(),
            React.createElement(panel.component, Object.assign({ openPanel: onOpen, closePanel: this.handleClose }, panel.props))));
    }
    maybeRenderHeader() {
        if (!this.props.showHeader) {
            return null;
        }
        return (React.createElement("div", { className: Classes.PANEL_STACK_HEADER },
            React.createElement("span", null, this.maybeRenderBack()),
            React.createElement(Text, { className: Classes.HEADING, ellipsize: true, title: this.props.panel.htmlTitle }, this.props.panel.title),
            React.createElement("span", null)));
    }
    maybeRenderBack() {
        if (this.props.previousPanel === undefined) {
            return null;
        }
        return (React.createElement(Button, { className: Classes.PANEL_STACK_HEADER_BACK, icon: "chevron-left", minimal: true, onClick: this.handleClose, small: true, text: this.props.previousPanel.title, title: this.props.previousPanel.htmlTitle }));
    }
};
PanelView = __decorate([
    polyfill
], PanelView);
export { PanelView };
//# sourceMappingURL=panelView.js.map