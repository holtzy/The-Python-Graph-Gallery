/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
import { AbstractPureComponent2 } from "../../common";
import { DISABLED, FILL, HTML_SELECT, LARGE, MINIMAL } from "../../common/classes";
import { Icon } from "../icon/icon";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var HTMLSelect = /** @class */ (function (_super) {
    __extends(HTMLSelect, _super);
    function HTMLSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLSelect.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, elementRef = _b.elementRef, fill = _b.fill, iconProps = _b.iconProps, large = _b.large, minimal = _b.minimal, _c = _b.options, options = _c === void 0 ? [] : _c, htmlProps = __rest(_b, ["className", "disabled", "elementRef", "fill", "iconProps", "large", "minimal", "options"]);
        var classes = classNames(HTML_SELECT, (_a = {},
            _a[DISABLED] = disabled,
            _a[FILL] = fill,
            _a[LARGE] = large,
            _a[MINIMAL] = minimal,
            _a), className);
        var optionChildren = options.map(function (option) {
            var props = typeof option === "object" ? option : { value: option };
            return React.createElement("option", __assign({}, props, { key: props.value, children: props.label || props.value }));
        });
        return (React.createElement("div", { className: classes },
            React.createElement("select", __assign({ disabled: disabled, ref: elementRef }, htmlProps, { multiple: false }),
                optionChildren,
                htmlProps.children),
            React.createElement(Icon, __assign({ icon: "double-caret-vertical" }, iconProps))));
    };
    HTMLSelect = __decorate([
        polyfill
    ], HTMLSelect);
    return HTMLSelect;
}(AbstractPureComponent2));
export { HTMLSelect };
//# sourceMappingURL=htmlSelect.js.map