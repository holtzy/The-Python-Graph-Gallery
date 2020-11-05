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
import { __assign, __decorate, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { NavbarDivider } from "./navbarDivider";
import { NavbarGroup } from "./navbarGroup";
import { NavbarHeading } from "./navbarHeading";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, className = _b.className, fixedToTop = _b.fixedToTop, htmlProps = __rest(_b, ["children", "className", "fixedToTop"]);
        var classes = classNames(Classes.NAVBAR, (_a = {}, _a[Classes.FIXED_TOP] = fixedToTop, _a), className);
        return (React.createElement("div", __assign({ className: classes }, htmlProps), children));
    };
    Navbar.displayName = DISPLAYNAME_PREFIX + ".Navbar";
    Navbar.Divider = NavbarDivider;
    Navbar.Group = NavbarGroup;
    Navbar.Heading = NavbarHeading;
    Navbar = __decorate([
        polyfill
    ], Navbar);
    return Navbar;
}(AbstractPureComponent2));
export { Navbar };
//# sourceMappingURL=navbar.js.map