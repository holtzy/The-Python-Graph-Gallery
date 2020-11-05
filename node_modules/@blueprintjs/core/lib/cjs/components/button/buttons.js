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
exports.AnchorButton = exports.Button = void 0;
var tslib_1 = require("tslib");
// HACKHACK: these components should go in separate files
/* eslint-disable max-classes-per-file */
var React = tslib_1.__importStar(require("react"));
var props_1 = require("../../common/props");
var refs_1 = require("../../common/refs");
var abstractButton_1 = require("./abstractButton");
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // need to keep this ref so that we can access it in AbstractButton#handleKeyUp
        _this.buttonRef = null;
        _this.handleRef = refs_1.isRefObject(_this.props.elementRef)
            ? (_this.buttonRef = _this.props.elementRef)
            : function (ref) {
                var _a;
                _this.buttonRef = ref;
                (_a = _this.props.elementRef) === null || _a === void 0 ? void 0 : _a(ref);
            };
        return _this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", tslib_1.__assign({ type: "button", ref: this.handleRef }, props_1.removeNonHTMLProps(this.props), this.getCommonButtonProps()), this.renderChildren()));
    };
    Button.displayName = props_1.DISPLAYNAME_PREFIX + ".Button";
    return Button;
}(abstractButton_1.AbstractButton));
exports.Button = Button;
var AnchorButton = /** @class */ (function (_super) {
    tslib_1.__extends(AnchorButton, _super);
    function AnchorButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // need to keep this ref so that we can access it in AbstractButton#handleKeyUp
        _this.buttonRef = null;
        _this.handleRef = refs_1.isRefObject(_this.props.elementRef)
            ? (_this.buttonRef = _this.props.elementRef)
            : function (ref) {
                var _a;
                _this.buttonRef = ref;
                (_a = _this.props.elementRef) === null || _a === void 0 ? void 0 : _a(ref);
            };
        return _this;
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, href = _a.href, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b;
        var commonProps = this.getCommonButtonProps();
        return (React.createElement("a", tslib_1.__assign({ role: "button", ref: this.handleRef }, props_1.removeNonHTMLProps(this.props), commonProps, { href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? -1 : tabIndex }), this.renderChildren()));
    };
    AnchorButton.displayName = props_1.DISPLAYNAME_PREFIX + ".AnchorButton";
    return AnchorButton;
}(abstractButton_1.AbstractButton));
exports.AnchorButton = AnchorButton;
//# sourceMappingURL=buttons.js.map