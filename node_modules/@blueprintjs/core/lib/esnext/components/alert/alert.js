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
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, DISPLAYNAME_PREFIX } from "../../common";
import { ALERT_WARN_CANCEL_ESCAPE_KEY, ALERT_WARN_CANCEL_OUTSIDE_CLICK, ALERT_WARN_CANCEL_PROPS, } from "../../common/errors";
import { Button } from "../button/buttons";
import { Dialog } from "../dialog/dialog";
import { Icon } from "../icon/icon";
let Alert = class Alert extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.handleCancel = (evt) => this.internalHandleCallbacks(false, evt);
        this.handleConfirm = (evt) => this.internalHandleCallbacks(true, evt);
    }
    render() {
        const { canEscapeKeyCancel, canOutsideClickCancel, children, className, icon, intent, cancelButtonText, confirmButtonText, onClose, ...overlayProps } = this.props;
        return (React.createElement(Dialog, Object.assign({}, overlayProps, { className: classNames(Classes.ALERT, className), canEscapeKeyClose: canEscapeKeyCancel, canOutsideClickClose: canOutsideClickCancel, onClose: this.handleCancel, portalContainer: this.props.portalContainer }),
            React.createElement("div", { className: Classes.ALERT_BODY },
                React.createElement(Icon, { icon: icon, iconSize: 40, intent: intent }),
                React.createElement("div", { className: Classes.ALERT_CONTENTS }, children)),
            React.createElement("div", { className: Classes.ALERT_FOOTER },
                React.createElement(Button, { intent: intent, text: confirmButtonText, onClick: this.handleConfirm }),
                cancelButtonText && React.createElement(Button, { text: cancelButtonText, onClick: this.handleCancel }))));
    }
    validateProps(props) {
        if (props.onClose == null && (props.cancelButtonText == null) !== (props.onCancel == null)) {
            console.warn(ALERT_WARN_CANCEL_PROPS);
        }
        const hasCancelHandler = props.onCancel != null || props.onClose != null;
        if (props.canEscapeKeyCancel && !hasCancelHandler) {
            console.warn(ALERT_WARN_CANCEL_ESCAPE_KEY);
        }
        if (props.canOutsideClickCancel && !hasCancelHandler) {
            console.warn(ALERT_WARN_CANCEL_OUTSIDE_CLICK);
        }
    }
    internalHandleCallbacks(confirmed, evt) {
        const { onCancel, onClose, onConfirm } = this.props;
        (confirmed ? onConfirm : onCancel)?.(evt);
        onClose?.(confirmed, evt);
    }
};
Alert.defaultProps = {
    canEscapeKeyCancel: false,
    canOutsideClickCancel: false,
    confirmButtonText: "OK",
    isOpen: false,
};
Alert.displayName = `${DISPLAYNAME_PREFIX}.Alert`;
Alert = __decorate([
    polyfill
], Alert);
export { Alert };
//# sourceMappingURL=alert.js.map