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
exports.Divider = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var classes_1 = require("../../common/classes");
var props_1 = require("../../common/props");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Divider = /** @class */ (function (_super) {
    tslib_1.__extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.tagName, tagName = _b === void 0 ? "div" : _b, htmlProps = tslib_1.__rest(_a, ["className", "tagName"]);
        var classes = classnames_1.default(classes_1.DIVIDER, className);
        return React.createElement(tagName, tslib_1.__assign(tslib_1.__assign({}, htmlProps), { className: classes }));
    };
    Divider.displayName = props_1.DISPLAYNAME_PREFIX + ".Divider";
    Divider = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Divider);
    return Divider;
}(common_1.AbstractPureComponent2));
exports.Divider = Divider;
//# sourceMappingURL=divider.js.map