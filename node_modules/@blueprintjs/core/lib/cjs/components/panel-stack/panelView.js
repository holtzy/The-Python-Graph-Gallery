"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelView = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var buttons_1 = require("../button/buttons");
var text_1 = require("../text/text");
var PanelView = /** @class */ (function (_super) {
    tslib_1.__extends(PanelView, _super);
    function PanelView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClose = function () { return _this.props.onClose(_this.props.panel); };
        return _this;
    }
    PanelView.prototype.render = function () {
        var _a = this.props, panel = _a.panel, onOpen = _a.onOpen;
        // two <span> tags in header ensure title is centered as long as
        // possible, due to `flex: 1` magic.
        return (React.createElement("div", { className: common_1.Classes.PANEL_STACK_VIEW },
            this.maybeRenderHeader(),
            React.createElement(panel.component, tslib_1.__assign({ openPanel: onOpen, closePanel: this.handleClose }, panel.props))));
    };
    PanelView.prototype.maybeRenderHeader = function () {
        if (!this.props.showHeader) {
            return null;
        }
        return (React.createElement("div", { className: common_1.Classes.PANEL_STACK_HEADER },
            React.createElement("span", null, this.maybeRenderBack()),
            React.createElement(text_1.Text, { className: common_1.Classes.HEADING, ellipsize: true, title: this.props.panel.htmlTitle }, this.props.panel.title),
            React.createElement("span", null)));
    };
    PanelView.prototype.maybeRenderBack = function () {
        if (this.props.previousPanel === undefined) {
            return null;
        }
        return (React.createElement(buttons_1.Button, { className: common_1.Classes.PANEL_STACK_HEADER_BACK, icon: "chevron-left", minimal: true, onClick: this.handleClose, small: true, text: this.props.previousPanel.title, title: this.props.previousPanel.htmlTitle }));
    };
    PanelView = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], PanelView);
    return PanelView;
}(common_1.AbstractPureComponent2));
exports.PanelView = PanelView;
//# sourceMappingURL=panelView.js.map