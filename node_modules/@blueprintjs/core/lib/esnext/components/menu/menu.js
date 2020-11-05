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
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { MenuDivider } from "./menuDivider";
// eslint-disable-next-line import/no-cycle
import { MenuItem } from "./menuItem";
let Menu = class Menu extends AbstractPureComponent2 {
    render() {
        const { className, children, large, ulRef, ...htmlProps } = this.props;
        const classes = classNames(Classes.MENU, { [Classes.LARGE]: large }, className);
        return (React.createElement("ul", Object.assign({}, htmlProps, { className: classes, ref: ulRef }), children));
    }
};
Menu.displayName = `${DISPLAYNAME_PREFIX}.Menu`;
Menu.Divider = MenuDivider;
Menu.Item = MenuItem;
Menu = __decorate([
    polyfill
], Menu);
export { Menu };
//# sourceMappingURL=menu.js.map