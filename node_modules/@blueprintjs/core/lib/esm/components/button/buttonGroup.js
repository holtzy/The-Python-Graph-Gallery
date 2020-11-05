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
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a;
        var _b = this.props, alignText = _b.alignText, className = _b.className, fill = _b.fill, minimal = _b.minimal, large = _b.large, vertical = _b.vertical, htmlProps = __rest(_b, ["alignText", "className", "fill", "minimal", "large", "vertical"]);
        var buttonGroupClasses = classNames(Classes.BUTTON_GROUP, (_a = {},
            _a[Classes.FILL] = fill,
            _a[Classes.LARGE] = large,
            _a[Classes.MINIMAL] = minimal,
            _a[Classes.VERTICAL] = vertical,
            _a), Classes.alignmentClass(alignText), className);
        return (React.createElement("div", __assign({}, htmlProps, { className: buttonGroupClasses }), this.props.children));
    };
    ButtonGroup.displayName = DISPLAYNAME_PREFIX + ".ButtonGroup";
    ButtonGroup = __decorate([
        polyfill
    ], ButtonGroup);
    return ButtonGroup;
}(AbstractPureComponent2));
export { ButtonGroup };
//# sourceMappingURL=buttonGroup.js.map