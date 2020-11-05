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
import { __decorate } from "tslib";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Intent } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { MultiSlider } from "./multiSlider";
let Slider = class Slider extends AbstractPureComponent2 {
    render() {
        const { initialValue, intent, value, onChange, onRelease, ...props } = this.props;
        return (React.createElement(MultiSlider, Object.assign({}, props),
            React.createElement(MultiSlider.Handle, { value: value, intentAfter: value < initialValue ? intent : undefined, intentBefore: value >= initialValue ? intent : undefined, onChange: onChange, onRelease: onRelease }),
            React.createElement(MultiSlider.Handle, { value: initialValue, interactionKind: "none" })));
    }
};
Slider.defaultProps = {
    ...MultiSlider.defaultSliderProps,
    initialValue: 0,
    intent: Intent.PRIMARY,
    value: 0,
};
Slider.displayName = `${DISPLAYNAME_PREFIX}.Slider`;
Slider = __decorate([
    polyfill
], Slider);
export { Slider };
//# sourceMappingURL=slider.js.map