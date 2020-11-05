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
import { __assign, __decorate, __extends, __rest } from "tslib";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Intent } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { MultiSlider } from "./multiSlider";
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.prototype.render = function () {
        var _a = this.props, initialValue = _a.initialValue, intent = _a.intent, value = _a.value, onChange = _a.onChange, onRelease = _a.onRelease, props = __rest(_a, ["initialValue", "intent", "value", "onChange", "onRelease"]);
        return (React.createElement(MultiSlider, __assign({}, props),
            React.createElement(MultiSlider.Handle, { value: value, intentAfter: value < initialValue ? intent : undefined, intentBefore: value >= initialValue ? intent : undefined, onChange: onChange, onRelease: onRelease }),
            React.createElement(MultiSlider.Handle, { value: initialValue, interactionKind: "none" })));
    };
    Slider.defaultProps = __assign(__assign({}, MultiSlider.defaultSliderProps), { initialValue: 0, intent: Intent.PRIMARY, value: 0 });
    Slider.displayName = DISPLAYNAME_PREFIX + ".Slider";
    Slider = __decorate([
        polyfill
    ], Slider);
    return Slider;
}(AbstractPureComponent2));
export { Slider };
//# sourceMappingURL=slider.js.map