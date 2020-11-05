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
exports.MenuDivider = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var Classes = tslib_1.__importStar(require("../../common/classes"));
var props_1 = require("../../common/props");
var html_1 = require("../html/html");
var MenuDivider = /** @class */ (function (_super) {
    tslib_1.__extends(MenuDivider, _super);
    function MenuDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title;
        if (title == null) {
            // simple divider
            return React.createElement("li", { className: classnames_1.default(Classes.MENU_DIVIDER, className) });
        }
        else {
            // section header with title
            return (React.createElement("li", { className: classnames_1.default(Classes.MENU_HEADER, className) },
                React.createElement(html_1.H6, null, title)));
        }
    };
    MenuDivider.displayName = props_1.DISPLAYNAME_PREFIX + ".MenuDivider";
    return MenuDivider;
}(React.Component));
exports.MenuDivider = MenuDivider;
//# sourceMappingURL=menuDivider.js.map