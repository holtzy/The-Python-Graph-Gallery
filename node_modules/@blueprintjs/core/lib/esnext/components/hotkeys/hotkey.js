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
import { AbstractPureComponent2, Classes, DISPLAYNAME_PREFIX } from "../../common";
import { KeyCombo } from "./keyCombo";
let Hotkey = class Hotkey extends AbstractPureComponent2 {
    render() {
        const { label, className, ...spreadableProps } = this.props;
        const rootClasses = classNames(Classes.HOTKEY, className);
        return (React.createElement("div", { className: rootClasses },
            React.createElement("div", { className: Classes.HOTKEY_LABEL }, label),
            React.createElement(KeyCombo, Object.assign({}, spreadableProps))));
    }
    validateProps(props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    }
};
Hotkey.displayName = `${DISPLAYNAME_PREFIX}.Hotkey`;
Hotkey.defaultProps = {
    allowInInput: false,
    disabled: false,
    global: false,
    preventDefault: false,
    stopPropagation: false,
};
Hotkey = __decorate([
    polyfill
], Hotkey);
export { Hotkey };
//# sourceMappingURL=hotkey.js.map