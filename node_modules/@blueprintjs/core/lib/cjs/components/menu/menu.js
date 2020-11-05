"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var menuDivider_1 = require("./menuDivider");
// eslint-disable-next-line import/no-cycle
var menuItem_1 = require("./menuItem");
var Menu = /** @class */ (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, children = _b.children, large = _b.large, ulRef = _b.ulRef, htmlProps = tslib_1.__rest(_b, ["className", "children", "large", "ulRef"]);
        var classes = classnames_1.default(common_1.Classes.MENU, (_a = {}, _a[common_1.Classes.LARGE] = large, _a), className);
        return (React.createElement("ul", tslib_1.__assign({}, htmlProps, { className: classes, ref: ulRef }), children));
    };
    Menu.displayName = props_1.DISPLAYNAME_PREFIX + ".Menu";
    Menu.Divider = menuDivider_1.MenuDivider;
    Menu.Item = menuItem_1.MenuItem;
    Menu = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Menu);
    return Menu;
}(common_1.AbstractPureComponent2));
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map