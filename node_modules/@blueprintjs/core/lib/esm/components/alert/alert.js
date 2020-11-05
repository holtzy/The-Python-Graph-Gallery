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
import { __assign, __decorate, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, DISPLAYNAME_PREFIX } from "../../common";
import { ALERT_WARN_CANCEL_ESCAPE_KEY, ALERT_WARN_CANCEL_OUTSIDE_CLICK, ALERT_WARN_CANCEL_PROPS, } from "../../common/errors";
import { Button } from "../button/buttons";
import { Dialog } from "../dialog/dialog";
import { Icon } from "../icon/icon";
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCancel = function (evt) { return _this.internalHandleCallbacks(false, evt); };
        _this.handleConfirm = function (evt) { return _this.internalHandleCallbacks(true, evt); };
        return _this;
    }
    Alert.prototype.render = function () {
        var _a = this.props, canEscapeKeyCancel = _a.canEscapeKeyCancel, canOutsideClickCancel = _a.canOutsideClickCancel, children = _a.children, className = _a.className, icon = _a.icon, intent = _a.intent, cancelButtonText = _a.cancelButtonText, confirmButtonText = _a.confirmButtonText, onClose = _a.onClose, overlayProps = __rest(_a, ["canEscapeKeyCancel", "canOutsideClickCancel", "children", "className", "icon", "intent", "cancelButtonText", "confirmButtonText", "onClose"]);
        return (React.createElement(Dialog, __assign({}, overlayProps, { className: classNames(Classes.ALERT, className), canEscapeKeyClose: canEscapeKeyCancel, canOutsideClickClose: canOutsideClickCancel, onClose: this.handleCancel, portalContainer: this.props.portalContainer }),
            React.createElement("div", { className: Classes.ALERT_BODY },
                React.createElement(Icon, { icon: icon, iconSize: 40, intent: intent }),
                React.createElement("div", { className: Classes.ALERT_CONTENTS }, children)),
            React.createElement("div", { className: Classes.ALERT_FOOTER },
                React.createElement(Button, { intent: intent, text: confirmButtonText, onClick: this.handleConfirm }),
                cancelButtonText && React.createElement(Button, { text: cancelButtonText, onClick: this.handleCancel }))));
    };
    Alert.prototype.validateProps = function (props) {
        if (props.onClose == null && (props.cancelButtonText == null) !== (props.onCancel == null)) {
            console.warn(ALERT_WARN_CANCEL_PROPS);
        }
        var hasCancelHandler = props.onCancel != null || props.onClose != null;
        if (props.canEscapeKeyCancel && !hasCancelHandler) {
            console.warn(ALERT_WARN_CANCEL_ESCAPE_KEY);
        }
        if (props.canOutsideClickCancel && !hasCancelHandler) {
            console.warn(ALERT_WARN_CANCEL_OUTSIDE_CLICK);
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
    Alert.displayName = DISPLAYNAME_PREFIX + ".Alert";
    Alert = __decorate([
        polyfill
    ], Alert);
    return Alert;
}(AbstractPureComponent2));
export { Alert };
//# sourceMappingURL=alert.js.map