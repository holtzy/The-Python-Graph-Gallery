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
var Toaster_1;
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, Position } from "../../common";
import { TOASTER_CREATE_NULL, TOASTER_MAX_TOASTS_INVALID, TOASTER_WARN_INLINE } from "../../common/errors";
import { ESCAPE } from "../../common/keys";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { isNodeEnv } from "../../common/utils";
import { Overlay } from "../overlay/overlay";
import { Toast } from "./toast";
let Toaster = Toaster_1 = class Toaster extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            toasts: [],
        };
        // auto-incrementing identifier for un-keyed toasts
        this.toastId = 0;
        this.getDismissHandler = (toast) => (timeoutExpired) => {
            this.dismiss(toast.key, timeoutExpired);
        };
        this.handleClose = (e) => {
            // NOTE that `e` isn't always a KeyboardEvent but that's the only type we care about
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable-next-line deprecation/deprecation */
            if (e.which === ESCAPE) {
                this.clear();
            }
        };
    }
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    static create(props, container = document.body) {
        if (props != null && props.usePortal != null && !isNodeEnv("production")) {
            console.warn(TOASTER_WARN_INLINE);
        }
        const containerElement = document.createElement("div");
        container.appendChild(containerElement);
        const toaster = ReactDOM.render(React.createElement(Toaster_1, Object.assign({}, props, { usePortal: false })), containerElement);
        if (toaster == null) {
            throw new Error(TOASTER_CREATE_NULL);
        }
        return toaster;
    }
    show(props, key) {
        if (this.props.maxToasts) {
            // check if active number of toasts are at the maxToasts limit
            this.dismissIfAtLimit();
        }
        const options = this.createToastOptions(props, key);
        if (key === undefined || this.isNewToastKey(key)) {
            this.setState(prevState => ({
                toasts: [options, ...prevState.toasts],
            }));
        }
        else {
            this.setState(prevState => ({
                toasts: prevState.toasts.map(t => (t.key === key ? options : t)),
            }));
        }
        return options.key;
    }
    dismiss(key, timeoutExpired = false) {
        this.setState(({ toasts }) => ({
            toasts: toasts.filter(t => {
                const matchesKey = t.key === key;
                if (matchesKey) {
                    t.onDismiss?.(timeoutExpired);
                }
                return !matchesKey;
            }),
        }));
    }
    clear() {
        this.state.toasts.forEach(t => t.onDismiss?.(false));
        this.setState({ toasts: [] });
    }
    getToasts() {
        return this.state.toasts;
    }
    render() {
        // $pt-transition-duration * 3 + $pt-transition-duration / 2
        const classes = classNames(Classes.TOAST_CONTAINER, this.getPositionClasses(), this.props.className);
        return (React.createElement(Overlay, { autoFocus: this.props.autoFocus, canEscapeKeyClose: this.props.canEscapeKeyClear, canOutsideClickClose: false, className: classes, enforceFocus: false, hasBackdrop: false, isOpen: this.state.toasts.length > 0 || this.props.children != null, onClose: this.handleClose, transitionDuration: 350, transitionName: Classes.TOAST, usePortal: this.props.usePortal },
            this.state.toasts.map(this.renderToast, this),
            this.props.children));
    }
    validateProps({ maxToasts }) {
        // maximum number of toasts should not be a number less than 1
        if (maxToasts !== undefined && maxToasts < 1) {
            throw new Error(TOASTER_MAX_TOASTS_INVALID);
        }
    }
    isNewToastKey(key) {
        return this.state.toasts.every(toast => toast.key !== key);
    }
    dismissIfAtLimit() {
        if (this.state.toasts.length === this.props.maxToasts) {
            // dismiss the oldest toast to stay within the maxToasts limit
            this.dismiss(this.state.toasts[this.state.toasts.length - 1].key);
        }
    }
    renderToast(toast) {
        return React.createElement(Toast, Object.assign({}, toast, { onDismiss: this.getDismissHandler(toast) }));
    }
    createToastOptions(props, key = `toast-${this.toastId++}`) {
        // clone the object before adding the key prop to avoid leaking the mutation
        return { ...props, key };
    }
    getPositionClasses() {
        const positions = this.props.position.split("-");
        // NOTE that there is no -center class because that's the default style
        return positions.map(p => `${Classes.TOAST_CONTAINER}-${p.toLowerCase()}`);
    }
};
Toaster.displayName = `${DISPLAYNAME_PREFIX}.Toaster`;
Toaster.defaultProps = {
    autoFocus: false,
    canEscapeKeyClear: true,
    position: Position.TOP,
    usePortal: true,
};
Toaster = Toaster_1 = __decorate([
    polyfill
], Toaster);
export { Toaster };
//# sourceMappingURL=toaster.js.map