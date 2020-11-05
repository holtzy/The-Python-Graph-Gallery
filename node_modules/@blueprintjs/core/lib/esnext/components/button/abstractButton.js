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
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent2, Classes, getRef, Keys, Utils, } from "../../common";
import { Icon } from "../icon/icon";
import { Spinner } from "../spinner/spinner";
export class AbstractButton extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            isActive: false,
        };
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        this.handleKeyDown = (e) => {
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable deprecation/deprecation */
            if (Keys.isKeyboardClick(e.which)) {
                e.preventDefault();
                if (e.which !== this.currentKeyDown) {
                    this.setState({ isActive: true });
                }
            }
            this.currentKeyDown = e.which;
            this.props.onKeyDown?.(e);
        };
        this.handleKeyUp = (e) => {
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable deprecation/deprecation */
            if (Keys.isKeyboardClick(e.which)) {
                this.setState({ isActive: false });
                getRef(this.buttonRef)?.click();
            }
            this.currentKeyDown = undefined;
            this.props.onKeyUp?.(e);
        };
        this.handleBlur = (e) => {
            if (this.state.isActive) {
                this.setState({ isActive: false });
            }
            this.props.onBlur?.(e);
        };
    }
    getCommonButtonProps() {
        const { active, alignText, fill, large, loading, outlined, minimal, small, tabIndex } = this.props;
        const disabled = this.props.disabled || loading;
        const className = classNames(Classes.BUTTON, {
            [Classes.ACTIVE]: !disabled && (active || this.state.isActive),
            [Classes.DISABLED]: disabled,
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
            [Classes.LOADING]: loading,
            [Classes.MINIMAL]: minimal,
            [Classes.OUTLINED]: outlined,
            [Classes.SMALL]: small,
        }, Classes.alignmentClass(alignText), Classes.intentClass(this.props.intent), this.props.className);
        return {
            className,
            disabled,
            onBlur: this.handleBlur,
            onClick: disabled ? undefined : this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            tabIndex: disabled ? -1 : tabIndex,
        };
    }
    renderChildren() {
        const { children, icon, loading, rightIcon, text } = this.props;
        return [
            loading && React.createElement(Spinner, { key: "loading", className: Classes.BUTTON_SPINNER, size: Icon.SIZE_LARGE }),
            React.createElement(Icon, { key: "leftIcon", icon: icon }),
            (!Utils.isReactNodeEmpty(text) || !Utils.isReactNodeEmpty(children)) && (React.createElement("span", { key: "text", className: Classes.BUTTON_TEXT },
                text,
                children)),
            React.createElement(Icon, { key: "rightIcon", icon: rightIcon }),
        ];
    }
}
//# sourceMappingURL=abstractButton.js.map