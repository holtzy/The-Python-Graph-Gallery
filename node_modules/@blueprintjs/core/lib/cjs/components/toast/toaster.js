"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var errors_1 = require("../../common/errors");
var keys_1 = require("../../common/keys");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var overlay_1 = require("../overlay/overlay");
var toast_1 = require("./toast");
var Toaster = /** @class */ (function (_super) {
    tslib_1.__extends(Toaster, _super);
    function Toaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toasts: [],
        };
        // auto-incrementing identifier for un-keyed toasts
        _this.toastId = 0;
        _this.getDismissHandler = function (toast) { return function (timeoutExpired) {
            _this.dismiss(toast.key, timeoutExpired);
        }; };
        _this.handleClose = function (e) {
            // NOTE that `e` isn't always a KeyboardEvent but that's the only type we care about
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable-next-line deprecation/deprecation */
            if (e.which === keys_1.ESCAPE) {
                _this.clear();
            }
        };
        return _this;
    }
    Toaster_1 = Toaster;
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    Toaster.create = function (props, container) {
        if (container === void 0) { container = document.body; }
        if (props != null && props.usePortal != null && !utils_1.isNodeEnv("production")) {
            console.warn(errors_1.TOASTER_WARN_INLINE);
        }
        var containerElement = document.createElement("div");
        container.appendChild(containerElement);
        var toaster = ReactDOM.render(React.createElement(Toaster_1, tslib_1.__assign({}, props, { usePortal: false })), containerElement);
        if (toaster == null) {
            throw new Error(errors_1.TOASTER_CREATE_NULL);
        }
        return toaster;
    };
    Toaster.prototype.show = function (props, key) {
        if (this.props.maxToasts) {
            // check if active number of toasts are at the maxToasts limit
            this.dismissIfAtLimit();
        }
        var options = this.createToastOptions(props, key);
        if (key === undefined || this.isNewToastKey(key)) {
            this.setState(function (prevState) { return ({
                toasts: tslib_1.__spreadArrays([options], prevState.toasts),
            }); });
        }
        else {
            this.setState(function (prevState) { return ({
                toasts: prevState.toasts.map(function (t) { return (t.key === key ? options : t); }),
            }); });
        }
        return options.key;
    };
    Toaster.prototype.dismiss = function (key, timeoutExpired) {
        if (timeoutExpired === void 0) { timeoutExpired = false; }
        this.setState(function (_a) {
            var toasts = _a.toasts;
            return ({
                toasts: toasts.filter(function (t) {
                    var _a;
                    var matchesKey = t.key === key;
                    if (matchesKey) {
                        (_a = t.onDismiss) === null || _a === void 0 ? void 0 : _a.call(t, timeoutExpired);
                    }
                    return !matchesKey;
                }),
            });
        });
    };
    Toaster.prototype.clear = function () {
        this.state.toasts.forEach(function (t) { var _a; return (_a = t.onDismiss) === null || _a === void 0 ? void 0 : _a.call(t, false); });
        this.setState({ toasts: [] });
    };
    Toaster.prototype.getToasts = function () {
        return this.state.toasts;
    };
    Toaster.prototype.render = function () {
        // $pt-transition-duration * 3 + $pt-transition-duration / 2
        var classes = classnames_1.default(common_1.Classes.TOAST_CONTAINER, this.getPositionClasses(), this.props.className);
        return (React.createElement(overlay_1.Overlay, { autoFocus: this.props.autoFocus, canEscapeKeyClose: this.props.canEscapeKeyClear, canOutsideClickClose: false, className: classes, enforceFocus: false, hasBackdrop: false, isOpen: this.state.toasts.length > 0 || this.props.children != null, onClose: this.handleClose, transitionDuration: 350, transitionName: common_1.Classes.TOAST, usePortal: this.props.usePortal },
            this.state.toasts.map(this.renderToast, this),
            this.props.children));
    };
    Toaster.prototype.validateProps = function (_a) {
        var maxToasts = _a.maxToasts;
        // maximum number of toasts should not be a number less than 1
        if (maxToasts !== undefined && maxToasts < 1) {
            throw new Error(errors_1.TOASTER_MAX_TOASTS_INVALID);
        }
    };
    Toaster.prototype.isNewToastKey = function (key) {
        return this.state.toasts.every(function (toast) { return toast.key !== key; });
    };
    Toaster.prototype.dismissIfAtLimit = function () {
        if (this.state.toasts.length === this.props.maxToasts) {
            // dismiss the oldest toast to stay within the maxToasts limit
            this.dismiss(this.state.toasts[this.state.toasts.length - 1].key);
        }
    };
    Toaster.prototype.renderToast = function (toast) {
        return React.createElement(toast_1.Toast, tslib_1.__assign({}, toast, { onDismiss: this.getDismissHandler(toast) }));
    };
    Toaster.prototype.createToastOptions = function (props, key) {
        if (key === void 0) { key = "toast-" + this.toastId++; }
        // clone the object before adding the key prop to avoid leaking the mutation
        return tslib_1.__assign(tslib_1.__assign({}, props), { key: key });
    };
    Toaster.prototype.getPositionClasses = function () {
        var positions = this.props.position.split("-");
        // NOTE that there is no -center class because that's the default style
        return positions.map(function (p) { return common_1.Classes.TOAST_CONTAINER + "-" + p.toLowerCase(); });
    };
    var Toaster_1;
    Toaster.displayName = props_1.DISPLAYNAME_PREFIX + ".Toaster";
    Toaster.defaultProps = {
        autoFocus: false,
        canEscapeKeyClear: true,
        position: common_1.Position.TOP,
        usePortal: true,
    };
    Toaster = Toaster_1 = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Toaster);
    return Toaster;
}(common_1.AbstractPureComponent2));
exports.Toaster = Toaster;
//# sourceMappingURL=toaster.js.map