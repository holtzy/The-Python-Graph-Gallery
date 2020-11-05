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
exports.Slider = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var multiSlider_1 = require("./multiSlider");
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.prototype.render = function () {
        var _a = this.props, initialValue = _a.initialValue, intent = _a.intent, value = _a.value, onChange = _a.onChange, onRelease = _a.onRelease, props = tslib_1.__rest(_a, ["initialValue", "intent", "value", "onChange", "onRelease"]);
        return (React.createElement(multiSlider_1.MultiSlider, tslib_1.__assign({}, props),
            React.createElement(multiSlider_1.MultiSlider.Handle, { value: value, intentAfter: value < initialValue ? intent : undefined, intentBefore: value >= initialValue ? intent : undefined, onChange: onChange, onRelease: onRelease }),
            React.createElement(multiSlider_1.MultiSlider.Handle, { value: initialValue, interactionKind: "none" })));
    };
    Slider.defaultProps = tslib_1.__assign(tslib_1.__assign({}, multiSlider_1.MultiSlider.defaultSliderProps), { initialValue: 0, intent: common_1.Intent.PRIMARY, value: 0 });
    Slider.displayName = props_1.DISPLAYNAME_PREFIX + ".Slider";
    Slider = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Slider);
    return Slider;
}(common_1.AbstractPureComponent2));
exports.Slider = Slider;
//# sourceMappingURL=slider.js.map