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
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var NavbarHeading = /** @class */ (function (_super) {
    __extends(NavbarHeading, _super);
    function NavbarHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarHeading.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, htmlProps = __rest(_a, ["children", "className"]);
        return (React.createElement("div", __assign({ className: classNames(Classes.NAVBAR_HEADING, className) }, htmlProps), children));
    };
    NavbarHeading.displayName = DISPLAYNAME_PREFIX + ".NavbarHeading";
    NavbarHeading = __decorate([
        polyfill
    ], NavbarHeading);
    return NavbarHeading;
}(AbstractPureComponent2));
export { NavbarHeading };
//# sourceMappingURL=navbarHeading.js.map