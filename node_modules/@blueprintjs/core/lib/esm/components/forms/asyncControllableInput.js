/* !
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
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
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * A stateful wrapper around the low-level <input> component which works around a
 * [React bug](https://github.com/facebook/react/issues/3926). This bug is reproduced when an input
 * receives CompositionEvents (for example, through IME composition) and has its value prop updated
 * asychronously. This might happen if a component chooses to do async validation of a value
 * returned by the input's `onChange` callback.
 *
 * Note: this component does not apply any Blueprint-specific styling.
 */
var AsyncControllableInput = /** @class */ (function (_super) {
    __extends(AsyncControllableInput, _super);
    function AsyncControllableInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasPendingUpdate: false,
            isComposing: false,
            nextValue: _this.props.value,
            value: _this.props.value,
        };
        _this.handleCompositionStart = function (e) {
            var _a, _b;
            _this.setState({
                isComposing: true,
                // Make sure that localValue matches externalValue, in case externalValue
                // has changed since the last onChange event.
                nextValue: _this.state.value,
            });
            (_b = (_a = _this.props).onCompositionStart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleCompositionEnd = function (e) {
            var _a, _b;
            _this.setState({ isComposing: false });
            (_b = (_a = _this.props).onCompositionEnd) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleChange = function (e) {
            var _a, _b;
            var value = e.target.value;
            _this.setState({ nextValue: value });
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        return _this;
    }
    AsyncControllableInput.getDerivedStateFromProps = function (nextProps, nextState) {
        if (nextState.isComposing || nextProps.value === undefined) {
            // don't derive anything from props if:
            // - in uncontrolled mode, OR
            // - currently composing, since we'll do that after composition ends
            return null;
        }
        var userTriggeredUpdate = nextState.nextValue !== nextState.value;
        if (userTriggeredUpdate) {
            if (nextProps.value === nextState.nextValue) {
                // parent has processed and accepted our update
                if (nextState.hasPendingUpdate) {
                    return { value: nextProps.value, hasPendingUpdate: false };
                }
                else {
                    return { value: nextState.nextValue };
                }
            }
            else {
                if (nextProps.value === nextState.value) {
                    // we have sent the update to our parent, but it has not been processed yet. just wait.
                    // DO NOT set nextValue here, since that will temporarily render a potentially stale controlled value,
                    // causing the cursor to jump once the new value is accepted
                    return { hasPendingUpdate: true };
                }
                // accept controlled update overriding user action
                return { value: nextProps.value, nextValue: nextProps.value, hasPendingUpdate: false };
            }
        }
        else {
            // accept controlled update, could be confirming or denying user action
            return { value: nextProps.value, nextValue: nextProps.value, hasPendingUpdate: false };
        }
    };
    AsyncControllableInput.prototype.render = function () {
        var _a = this.state, isComposing = _a.isComposing, hasPendingUpdate = _a.hasPendingUpdate, value = _a.value, nextValue = _a.nextValue;
        var _b = this.props, inputRef = _b.inputRef, restProps = __rest(_b, ["inputRef"]);
        return (React.createElement("input", __assign({}, restProps, { ref: inputRef, 
            // render the pending value even if it is not confirmed by a parent's async controlled update
            // so that the cursor does not jump to the end of input as reported in
            // https://github.com/palantir/blueprint/issues/4298
            value: isComposing || hasPendingUpdate ? nextValue : value, onCompositionStart: this.handleCompositionStart, onCompositionEnd: this.handleCompositionEnd, onChange: this.handleChange })));
    };
    AsyncControllableInput.displayName = DISPLAYNAME_PREFIX + ".AsyncControllableInput";
    AsyncControllableInput = __decorate([
        polyfill
    ], AsyncControllableInput);
    return AsyncControllableInput;
}(React.PureComponent));
export { AsyncControllableInput };
//# sourceMappingURL=asyncControllableInput.js.map