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
import { __assign, __decorate, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { MenuDivider } from "./menuDivider";
// eslint-disable-next-line import/no-cycle
import { MenuItem } from "./menuItem";
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, children = _b.children, large = _b.large, ulRef = _b.ulRef, htmlProps = __rest(_b, ["className", "children", "large", "ulRef"]);
        var classes = classNames(Classes.MENU, (_a = {}, _a[Classes.LARGE] = large, _a), className);
        return (React.createElement("ul", __assign({}, htmlProps, { className: classes, ref: ulRef }), children));
    };
    Menu.displayName = DISPLAYNAME_PREFIX + ".Menu";
    Menu.Divider = MenuDivider;
    Menu.Item = MenuItem;
    Menu = __decorate([
        polyfill
    ], Menu);
    return Menu;
}(AbstractPureComponent2));
export { Menu };
//# sourceMappingURL=menu.js.map