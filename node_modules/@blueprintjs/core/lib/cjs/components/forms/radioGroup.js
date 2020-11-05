"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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
exports.RadioGroup = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var Errors = tslib_1.__importStar(require("../../common/errors"));
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var controls_1 = require("./controls");
var counter = 0;
function nextName() {
    return RadioGroup.displayName + "-" + counter++;
}
var RadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
    function RadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // a unique name for this group, which can be overridden by `name` prop.
        _this.autoGroupName = nextName();
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var label = this.props.label;
        return (React.createElement("div", { className: this.props.className },
            label == null ? null : React.createElement("label", { className: common_1.Classes.LABEL }, label),
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    };
    RadioGroup.prototype.validateProps = function () {
        if (this.props.children != null && this.props.options != null) {
            console.warn(Errors.RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX);
        }
    };
    RadioGroup.prototype.renderChildren = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child) {
            if (utils_1.isElementOfType(child, controls_1.Radio)) {
                return React.cloneElement(child, _this.getRadioProps(child.props));
            }
            else {
                return child;
            }
        });
    };
    RadioGroup.prototype.renderOptions = function () {
        var _this = this;
        var _a;
        return (_a = this.props.options) === null || _a === void 0 ? void 0 : _a.map(function (option) { return (React.createElement(controls_1.Radio, tslib_1.__assign({}, _this.getRadioProps(option), { key: option.value, labelElement: option.label || option.value }))); });
    };
    RadioGroup.prototype.getRadioProps = function (optionProps) {
        var name = this.props.name;
        var className = optionProps.className, disabled = optionProps.disabled, value = optionProps.value;
        return {
            checked: value === this.props.selectedValue,
            className: className,
            disabled: disabled || this.props.disabled,
            inline: this.props.inline,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
            value: value,
        };
    };
    RadioGroup.displayName = props_1.DISPLAYNAME_PREFIX + ".RadioGroup";
    RadioGroup = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], RadioGroup);
    return RadioGroup;
}(common_1.AbstractPureComponent2));
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=radioGroup.js.map