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
exports.Card = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, elevation = _b.elevation, interactive = _b.interactive, htmlProps = tslib_1.__rest(_b, ["className", "elevation", "interactive"]);
        var classes = classnames_1.default(common_1.Classes.CARD, (_a = {}, _a[common_1.Classes.INTERACTIVE] = interactive, _a), common_1.Classes.elevationClass(elevation), className);
        return React.createElement("div", tslib_1.__assign({ className: classes }, htmlProps));
    };
    Card.displayName = props_1.DISPLAYNAME_PREFIX + ".Card";
    Card.defaultProps = {
        elevation: common_1.Elevation.ZERO,
        interactive: false,
    };
    Card = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Card);
    return Card;
}(common_1.AbstractPureComponent2));
exports.Card = Card;
//# sourceMappingURL=card.js.map