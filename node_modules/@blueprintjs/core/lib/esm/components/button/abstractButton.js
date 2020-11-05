/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import { __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent2, Classes, getRef, Keys, Utils, } from "../../common";
import { Icon } from "../icon/icon";
import { Spinner } from "../spinner/spinner";
var AbstractButton = /** @class */ (function (_super) {
    __extends(AbstractButton, _super);
    function AbstractButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        _this.handleKeyDown = function (e) {
            var _a, _b;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable deprecation/deprecation */
            if (Keys.isKeyboardClick(e.which)) {
                e.preventDefault();
                if (e.which !== _this.currentKeyDown) {
                    _this.setState({ isActive: true });
                }
            }
            _this.currentKeyDown = e.which;
            (_b = (_a = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleKeyUp = function (e) {
            var _a, _b, _c;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable deprecation/deprecation */
            if (Keys.isKeyboardClick(e.which)) {
                _this.setState({ isActive: false });
                (_a = getRef(_this.buttonRef)) === null || _a === void 0 ? void 0 : _a.click();
            }
            _this.currentKeyDown = undefined;
            (_c = (_b = _this.props).onKeyUp) === null || _c === void 0 ? void 0 : _c.call(_b, e);
        };
        _this.handleBlur = function (e) {
            var _a, _b;
            if (_this.state.isActive) {
                _this.setState({ isActive: false });
            }
            (_b = (_a = _this.props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        return _this;
    }
    AbstractButton.prototype.getCommonButtonProps = function () {
        var _a;
        var _b = this.props, active = _b.active, alignText = _b.alignText, fill = _b.fill, large = _b.large, loading = _b.loading, outlined = _b.outlined, minimal = _b.minimal, small = _b.small, tabIndex = _b.tabIndex;
        var disabled = this.props.disabled || loading;
        var className = classNames(Classes.BUTTON, (_a = {},
            _a[Classes.ACTIVE] = !disabled && (active || this.state.isActive),
            _a[Classes.DISABLED] = disabled,
            _a[Classes.FILL] = fill,
            _a[Classes.LARGE] = large,
            _a[Classes.LOADING] = loading,
            _a[Classes.MINIMAL] = minimal,
            _a[Classes.OUTLINED] = outlined,
            _a[Classes.SMALL] = small,
            _a), Classes.alignmentClass(alignText), Classes.intentClass(this.props.intent), this.props.className);
        return {
            className: className,
            disabled: disabled,
            onBlur: this.handleBlur,
            onClick: disabled ? undefined : this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            tabIndex: disabled ? -1 : tabIndex,
        };
    };
    AbstractButton.prototype.renderChildren = function () {
        var _a = this.props, children = _a.children, icon = _a.icon, loading = _a.loading, rightIcon = _a.rightIcon, text = _a.text;
        return [
            loading && React.createElement(Spinner, { key: "loading", className: Classes.BUTTON_SPINNER, size: Icon.SIZE_LARGE }),
            React.createElement(Icon, { key: "leftIcon", icon: icon }),
            (!Utils.isReactNodeEmpty(text) || !Utils.isReactNodeEmpty(children)) && (React.createElement("span", { key: "text", className: Classes.BUTTON_TEXT },
                text,
                children)),
            React.createElement(Icon, { key: "rightIcon", icon: rightIcon }),
        ];
    };
    return AbstractButton;
}(AbstractPureComponent2));
export { AbstractButton };
//# sourceMappingURL=abstractButton.js.map