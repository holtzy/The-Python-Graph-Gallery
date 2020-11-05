"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var navbarDivider_1 = require("./navbarDivider");
var navbarGroup_1 = require("./navbarGroup");
var navbarHeading_1 = require("./navbarHeading");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Navbar = /** @class */ (function (_super) {
    tslib_1.__extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, className = _b.className, fixedToTop = _b.fixedToTop, htmlProps = tslib_1.__rest(_b, ["children", "className", "fixedToTop"]);
        var classes = classnames_1.default(common_1.Classes.NAVBAR, (_a = {}, _a[common_1.Classes.FIXED_TOP] = fixedToTop, _a), className);
        return (React.createElement("div", tslib_1.__assign({ className: classes }, htmlProps), children));
    };
    Navbar.displayName = props_1.DISPLAYNAME_PREFIX + ".Navbar";
    Navbar.Divider = navbarDivider_1.NavbarDivider;
    Navbar.Group = navbarGroup_1.NavbarGroup;
    Navbar.Heading = navbarHeading_1.NavbarHeading;
    Navbar = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Navbar);
    return Navbar;
}(common_1.AbstractPureComponent2));
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.js.map