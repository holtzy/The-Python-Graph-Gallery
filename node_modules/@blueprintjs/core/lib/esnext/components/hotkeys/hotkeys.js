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
import { HOTKEYS_HOTKEY_CHILDREN } from "../../common/errors";
import { isElementOfType, isReactChildrenElementOrElements } from "../../common/utils";
import { H4 } from "../html/html";
import { Hotkey } from "./hotkey";
let Hotkeys = class Hotkeys extends AbstractPureComponent2 {
    render() {
        if (!isReactChildrenElementOrElements(this.props.children)) {
            return null;
        }
        const hotkeys = React.Children.map(this.props.children, (child) => child.props);
        // sort by group label alphabetically, prioritize globals
        hotkeys.sort((a, b) => {
            if (a.global === b.global && a.group && b.group) {
                return a.group.localeCompare(b.group);
            }
            return a.global ? -1 : 1;
        });
        let lastGroup;
        const elems = [];
        for (const hotkey of hotkeys) {
            const groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(React.createElement(H4, { key: `group-${elems.length}` }, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(React.createElement(Hotkey, Object.assign({ key: elems.length }, hotkey)));
        }
        const rootClasses = classNames(Classes.HOTKEY_COLUMN, this.props.className);
        return React.createElement("div", { className: rootClasses }, elems);
    }
    validateProps(props) {
        if (!isReactChildrenElementOrElements(props.children)) {
            return;
        }
        React.Children.forEach(props.children, (child) => {
            if (!isElementOfType(child, Hotkey)) {
                throw new Error(HOTKEYS_HOTKEY_CHILDREN);
            }
        });
    }
};
Hotkeys.displayName = `${DISPLAYNAME_PREFIX}.Hotkeys`;
Hotkeys.defaultProps = {
    tabIndex: 0,
};
Hotkeys = __decorate([
    polyfill
], Hotkeys);
export { Hotkeys };
//# sourceMappingURL=hotkeys.js.map