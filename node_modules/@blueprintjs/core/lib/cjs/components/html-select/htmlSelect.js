"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSelect = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var classes_1 = require("../../common/classes");
var icon_1 = require("../icon/icon");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var HTMLSelect = /** @class */ (function (_super) {
    tslib_1.__extends(HTMLSelect, _super);
    function HTMLSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLSelect.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, elementRef = _b.elementRef, fill = _b.fill, iconProps = _b.iconProps, large = _b.large, minimal = _b.minimal, _c = _b.options, options = _c === void 0 ? [] : _c, htmlProps = tslib_1.__rest(_b, ["className", "disabled", "elementRef", "fill", "iconProps", "large", "minimal", "options"]);
        var classes = classnames_1.default(classes_1.HTML_SELECT, (_a = {},
            _a[classes_1.DISABLED] = disabled,
            _a[classes_1.FILL] = fill,
            _a[classes_1.LARGE] = large,
            _a[classes_1.MINIMAL] = minimal,
            _a), className);
        var optionChildren = options.map(function (option) {
            var props = typeof option === "object" ? option : { value: option };
            return React.createElement("option", tslib_1.__assign({}, props, { key: props.value, children: props.label || props.value }));
        });
        return (React.createElement("div", { className: classes },
            React.createElement("select", tslib_1.__assign({ disabled: disabled, ref: elementRef }, htmlProps, { multiple: false }),
                optionChildren,
                htmlProps.children),
            React.createElement(icon_1.Icon, tslib_1.__assign({ icon: "double-caret-vertical" }, iconProps))));
    };
    HTMLSelect = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], HTMLSelect);
    return HTMLSelect;
}(common_1.AbstractPureComponent2));
exports.HTMLSelect = HTMLSelect;
//# sourceMappingURL=htmlSelect.js.map