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
exports.Dialog = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var Errors = tslib_1.__importStar(require("../../common/errors"));
var props_1 = require("../../common/props");
var buttons_1 = require("../button/buttons");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
var overlay_1 = require("../overlay/overlay");
var Dialog = /** @class */ (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, tslib_1.__assign({}, this.props, { className: common_1.Classes.OVERLAY_SCROLL_CONTAINER, hasBackdrop: true }),
            React.createElement("div", { className: common_1.Classes.DIALOG_CONTAINER },
                React.createElement("div", { className: classnames_1.default(common_1.Classes.DIALOG, this.props.className), style: this.props.style },
                    this.maybeRenderHeader(),
                    this.props.children))));
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.icon != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            return (React.createElement(buttons_1.Button, { "aria-label": "Close", className: common_1.Classes.DIALOG_CLOSE_BUTTON, icon: React.createElement(icon_1.Icon, { icon: "small-cross", iconSize: icon_1.Icon.SIZE_LARGE }), minimal: true, onClick: this.props.onClose }));
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        var _a = this.props, icon = _a.icon, title = _a.title;
        if (title == null) {
            return undefined;
        }
        return (React.createElement("div", { className: common_1.Classes.DIALOG_HEADER },
            React.createElement(icon_1.Icon, { icon: icon, iconSize: icon_1.Icon.SIZE_LARGE }),
            React.createElement(html_1.H4, null, title),
            this.maybeRenderCloseButton()));
    };
    Dialog.defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
    };
    Dialog.displayName = props_1.DISPLAYNAME_PREFIX + ".Dialog";
    Dialog = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Dialog);
    return Dialog;
}(common_1.AbstractPureComponent2));
exports.Dialog = Dialog;
//# sourceMappingURL=dialog.js.map