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
exports.NavbarHeading = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var NavbarHeading = /** @class */ (function (_super) {
    tslib_1.__extends(NavbarHeading, _super);
    function NavbarHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarHeading.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, htmlProps = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames_1.default(common_1.Classes.NAVBAR_HEADING, className) }, htmlProps), children));
    };
    NavbarHeading.displayName = props_1.DISPLAYNAME_PREFIX + ".NavbarHeading";
    NavbarHeading = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], NavbarHeading);
    return NavbarHeading;
}(common_1.AbstractPureComponent2));
exports.NavbarHeading = NavbarHeading;
//# sourceMappingURL=navbarHeading.js.map