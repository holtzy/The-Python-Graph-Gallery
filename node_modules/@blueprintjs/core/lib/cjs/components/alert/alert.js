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
exports.Alert = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var errors_1 = require("../../common/errors");
var buttons_1 = require("../button/buttons");
var dialog_1 = require("../dialog/dialog");
var icon_1 = require("../icon/icon");
var Alert = /** @class */ (function (_super) {
    tslib_1.__extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCancel = function (evt) { return _this.internalHandleCallbacks(false, evt); };
        _this.handleConfirm = function (evt) { return _this.internalHandleCallbacks(true, evt); };
        return _this;
    }
    Alert.prototype.render = function () {
        var _a = this.props, canEscapeKeyCancel = _a.canEscapeKeyCancel, canOutsideClickCancel = _a.canOutsideClickCancel, children = _a.children, className = _a.className, icon = _a.icon, intent = _a.intent, cancelButtonText = _a.cancelButtonText, confirmButtonText = _a.confirmButtonText, onClose = _a.onClose, overlayProps = tslib_1.__rest(_a, ["canEscapeKeyCancel", "canOutsideClickCancel", "children", "className", "icon", "intent", "cancelButtonText", "confirmButtonText", "onClose"]);
        return (React.createElement(dialog_1.Dialog, tslib_1.__assign({}, overlayProps, { className: classnames_1.default(common_1.Classes.ALERT, className), canEscapeKeyClose: canEscapeKeyCancel, canOutsideClickClose: canOutsideClickCancel, onClose: this.handleCancel, portalContainer: this.props.portalContainer }),
            React.createElement("div", { className: common_1.Classes.ALERT_BODY },
                React.createElement(icon_1.Icon, { icon: icon, iconSize: 40, intent: intent }),
                React.createElement("div", { className: common_1.Classes.ALERT_CONTENTS }, children)),
            React.createElement("div", { className: common_1.Classes.ALERT_FOOTER },
                React.createElement(buttons_1.Button, { intent: intent, text: confirmButtonText, onClick: this.handleConfirm }),
                cancelButtonText && React.createElement(buttons_1.Button, { text: cancelButtonText, onClick: this.handleCancel }))));
    };
    Alert.prototype.validateProps = function (props) {
        if (props.onClose == null && (props.cancelButtonText == null) !== (props.onCancel == null)) {
            console.warn(errors_1.ALERT_WARN_CANCEL_PROPS);
        }
        var hasCancelHandler = props.onCancel != null || props.onClose != null;
        if (props.canEscapeKeyCancel && !hasCancelHandler) {
            console.warn(errors_1.ALERT_WARN_CANCEL_ESCAPE_KEY);
        }
        if (props.canOutsideClickCancel && !hasCancelHandler) {
            console.warn(errors_1.ALERT_WARN_CANCEL_OUTSIDE_CLICK);
        }
    };
    Alert.prototype.internalHandleCallbacks = function (confirmed, evt) {
        var _a;
        var _b = this.props, onCancel = _b.onCancel, onClose = _b.onClose, onConfirm = _b.onConfirm;
        (_a = (confirmed ? onConfirm : onCancel)) === null || _a === void 0 ? void 0 : _a(evt);
        onClose === null || onClose === void 0 ? void 0 : onClose(confirmed, evt);
    };
    Alert.defaultProps = {
        canEscapeKeyCancel: false,
        canOutsideClickCancel: false,
        confirmButtonText: "OK",
        isOpen: false,
    };
    Alert.displayName = common_1.DISPLAYNAME_PREFIX + ".Alert";
    Alert = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Alert);
    return Alert;
}(common_1.AbstractPureComponent2));
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map