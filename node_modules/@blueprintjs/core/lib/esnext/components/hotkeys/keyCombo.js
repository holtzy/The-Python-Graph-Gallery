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
import { Icon } from "../icon/icon";
import { normalizeKeyCombo } from "./hotkeyParser";
const KeyIcons = {
    alt: "key-option",
    cmd: "key-command",
    ctrl: "key-control",
    delete: "key-delete",
    down: "arrow-down",
    enter: "key-enter",
    left: "arrow-left",
    meta: "key-command",
    right: "arrow-right",
    shift: "key-shift",
    up: "arrow-up",
};
let KeyCombo = class KeyCombo extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.renderKey = (key, index) => {
            const icon = KeyIcons[key];
            const reactKey = `key-${index}`;
            return icon == null ? (React.createElement("kbd", { className: Classes.KEY, key: reactKey }, key)) : (React.createElement("kbd", { className: classNames(Classes.KEY, Classes.MODIFIER_KEY), key: reactKey },
                React.createElement(Icon, { icon: icon }),
                " ",
                key));
        };
        this.renderMinimalKey = (key, index) => {
            const icon = KeyIcons[key];
            return icon == null ? key : React.createElement(Icon, { icon: icon, key: `key-${index}` });
        };
    }
    render() {
        const { className, combo, minimal } = this.props;
        const keys = normalizeKeyCombo(combo)
            .map(key => (key.length === 1 ? key.toUpperCase() : key))
            .map(minimal ? this.renderMinimalKey : this.renderKey);
        return React.createElement("span", { className: classNames(Classes.KEY_COMBO, className) }, keys);
    }
};
KeyCombo.displayName = `${DISPLAYNAME_PREFIX}.KeyCombo`;
KeyCombo = __decorate([
    polyfill
], KeyCombo);
export { KeyCombo };
//# sourceMappingURL=keyCombo.js.map