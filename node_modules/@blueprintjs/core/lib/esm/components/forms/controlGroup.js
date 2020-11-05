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
var ControlGroup = /** @class */ (function (_super) {
    __extends(ControlGroup, _super);
    function ControlGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlGroup.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, className = _b.className, fill = _b.fill, vertical = _b.vertical, htmlProps = __rest(_b, ["children", "className", "fill", "vertical"]);
        var rootClasses = classNames(Classes.CONTROL_GROUP, (_a = {},
            _a[Classes.FILL] = fill,
            _a[Classes.VERTICAL] = vertical,
            _a), className);
        return (React.createElement("div", __assign({}, htmlProps, { className: rootClasses }), children));
    };
    ControlGroup.displayName = DISPLAYNAME_PREFIX + ".ControlGroup";
    ControlGroup = __decorate([
        polyfill
    ], ControlGroup);
    return ControlGroup;
}(AbstractPureComponent2));
export { ControlGroup };
//# sourceMappingURL=controlGroup.js.map