/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { ButtonGroup } from "../button/buttonGroup";
import { AnchorButton, Button } from "../button/buttons";
import { Icon } from "../icon/icon";
let Toast = class Toast extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.handleActionClick = (e) => {
            this.props.action?.onClick?.(e);
            this.triggerDismiss(false);
        };
        this.handleCloseClick = () => this.triggerDismiss(false);
        this.startTimeout = () => {
            this.clearTimeouts();
            if (this.props.timeout > 0) {
                this.setTimeout(() => this.triggerDismiss(true), this.props.timeout);
            }
        };
    }
    render() {
        const { className, icon, intent, message } = this.props;
        return (React.createElement("div", { className: classNames(Classes.TOAST, Classes.intentClass(intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout, tabIndex: 0 },
            React.createElement(Icon, { icon: icon }),
            React.createElement("span", { className: Classes.TOAST_MESSAGE }, message),
            React.createElement(ButtonGroup, { minimal: true },
                this.maybeRenderActionButton(),
                React.createElement(Button, { icon: "cross", onClick: this.handleCloseClick }))));
    }
    componentDidMount() {
        this.startTimeout();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.timeout !== this.props.timeout) {
            if (this.props.timeout > 0) {
                this.startTimeout();
            }
            else {
                this.clearTimeouts();
            }
        }
    }
    componentWillUnmount() {
        this.clearTimeouts();
    }
    maybeRenderActionButton() {
        const { action } = this.props;
        if (action == null) {
            return undefined;
        }
        else {
            return React.createElement(AnchorButton, Object.assign({}, action, { intent: undefined, onClick: this.handleActionClick }));
        }
    }
    triggerDismiss(didTimeoutExpire) {
        this.clearTimeouts();
        this.props.onDismiss?.(didTimeoutExpire);
    }
};
Toast.defaultProps = {
    className: "",
    message: "",
    timeout: 5000,
};
Toast.displayName = `${DISPLAYNAME_PREFIX}.Toast`;
Toast = __decorate([
    polyfill
], Toast);
export { Toast };
//# sourceMappingURL=toast.js.map