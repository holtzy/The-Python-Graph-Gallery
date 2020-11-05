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
import { AbstractPureComponent2, Classes, Elevation } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, elevation = _b.elevation, interactive = _b.interactive, htmlProps = __rest(_b, ["className", "elevation", "interactive"]);
        var classes = classNames(Classes.CARD, (_a = {}, _a[Classes.INTERACTIVE] = interactive, _a), Classes.elevationClass(elevation), className);
        return React.createElement("div", __assign({ className: classes }, htmlProps));
    };
    Card.displayName = DISPLAYNAME_PREFIX + ".Card";
    Card.defaultProps = {
        elevation: Elevation.ZERO,
        interactive: false,
    };
    Card = __decorate([
        polyfill
    ], Card);
    return Card;
}(AbstractPureComponent2));
export { Card };
//# sourceMappingURL=card.js.map