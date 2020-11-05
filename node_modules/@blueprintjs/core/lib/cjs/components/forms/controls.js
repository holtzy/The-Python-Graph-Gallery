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
exports.Checkbox = exports.Radio = exports.Switch = void 0;
var tslib_1 = require("tslib");
// we need some empty interfaces to show up in docs
// HACKHACK: these components should go in separate files
/* eslint-disable max-classes-per-file, @typescript-eslint/no-empty-interface */
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
/**
 * Renders common control elements, with additional props to customize appearance.
 * This component is not exported and is only used in this file for `Checkbox`, `Radio`, and `Switch` below.
 */
var Control = function (_a) {
    var _b;
    var alignIndicator = _a.alignIndicator, children = _a.children, className = _a.className, indicatorChildren = _a.indicatorChildren, inline = _a.inline, inputRef = _a.inputRef, label = _a.label, labelElement = _a.labelElement, large = _a.large, style = _a.style, type = _a.type, typeClassName = _a.typeClassName, _c = _a.tagName, tagName = _c === void 0 ? "label" : _c, htmlProps = tslib_1.__rest(_a, ["alignIndicator", "children", "className", "indicatorChildren", "inline", "inputRef", "label", "labelElement", "large", "style", "type", "typeClassName", "tagName"]);
    var classes = classnames_1.default(common_1.Classes.CONTROL, typeClassName, (_b = {},
        _b[common_1.Classes.DISABLED] = htmlProps.disabled,
        _b[common_1.Classes.INLINE] = inline,
        _b[common_1.Classes.LARGE] = large,
        _b), common_1.Classes.alignmentClass(alignIndicator), className);
    return React.createElement(tagName, { className: classes, style: style }, React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: inputRef, type: type })), React.createElement("span", { className: common_1.Classes.CONTROL_INDICATOR }, indicatorChildren), label, labelElement, children);
};
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, innerLabelChecked = _a.innerLabelChecked, innerLabel = _a.innerLabel, controlProps = tslib_1.__rest(_a, ["innerLabelChecked", "innerLabel"]);
        var switchLabels = innerLabel || innerLabelChecked
            ? [
                React.createElement("div", { key: "checked", className: common_1.Classes.CONTROL_INDICATOR_CHILD },
                    React.createElement("div", { className: common_1.Classes.SWITCH_INNER_TEXT }, innerLabelChecked ? innerLabelChecked : innerLabel)),
                React.createElement("div", { key: "unchecked", className: common_1.Classes.CONTROL_INDICATOR_CHILD },
                    React.createElement("div", { className: common_1.Classes.SWITCH_INNER_TEXT }, innerLabel)),
            ]
            : null;
        return (React.createElement(Control, tslib_1.__assign({}, controlProps, { type: "checkbox", typeClassName: common_1.Classes.SWITCH, indicatorChildren: switchLabels })));
    };
    Switch.displayName = props_1.DISPLAYNAME_PREFIX + ".Switch";
    Switch = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Switch);
    return Switch;
}(common_1.AbstractPureComponent2));
exports.Switch = Switch;
var Radio = /** @class */ (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        return React.createElement(Control, tslib_1.__assign({}, this.props, { type: "radio", typeClassName: common_1.Classes.RADIO }));
    };
    Radio.displayName = props_1.DISPLAYNAME_PREFIX + ".Radio";
    Radio = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Radio);
    return Radio;
}(common_1.AbstractPureComponent2));
exports.Radio = Radio;
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            indeterminate: _this.props.indeterminate || _this.props.defaultIndeterminate || false,
        };
        // must maintain internal reference for `indeterminate` support
        _this.input = null;
        _this.handleChange = function (evt) {
            var _a, _b;
            var indeterminate = evt.target.indeterminate;
            // update state immediately only if uncontrolled
            if (_this.props.indeterminate == null) {
                _this.setState({ indeterminate: indeterminate });
            }
            // otherwise wait for props change. always invoke handler.
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
        };
        _this.handleInputRef = function (ref) {
            var _a, _b;
            _this.input = ref;
            (_b = (_a = _this.props).inputRef) === null || _b === void 0 ? void 0 : _b.call(_a, ref);
        };
        return _this;
    }
    Checkbox.getDerivedStateFromProps = function (_a) {
        var indeterminate = _a.indeterminate;
        // put props into state if controlled by props
        if (indeterminate != null) {
            return { indeterminate: indeterminate };
        }
        return null;
    };
    Checkbox.prototype.render = function () {
        var _a = this.props, defaultIndeterminate = _a.defaultIndeterminate, indeterminate = _a.indeterminate, controlProps = tslib_1.__rest(_a, ["defaultIndeterminate", "indeterminate"]);
        return (React.createElement(Control, tslib_1.__assign({}, controlProps, { inputRef: this.handleInputRef, onChange: this.handleChange, type: "checkbox", typeClassName: common_1.Classes.CHECKBOX })));
    };
    Checkbox.prototype.componentDidMount = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.input != null) {
            this.input.indeterminate = this.state.indeterminate;
        }
    };
    Checkbox.displayName = props_1.DISPLAYNAME_PREFIX + ".Checkbox";
    Checkbox = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Checkbox);
    return Checkbox;
}(common_1.AbstractPureComponent2));
exports.Checkbox = Checkbox;
//# sourceMappingURL=controls.js.map