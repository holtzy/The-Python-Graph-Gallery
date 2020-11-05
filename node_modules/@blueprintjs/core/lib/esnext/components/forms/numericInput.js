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
var NumericInput_1;
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, DISPLAYNAME_PREFIX, Intent, Keys, Position, removeNonHTMLProps, Utils, } from "../../common";
import * as Errors from "../../common/errors";
import { ButtonGroup } from "../button/buttonGroup";
import { Button } from "../button/buttons";
import { ControlGroup } from "./controlGroup";
import { InputGroup } from "./inputGroup";
import { clampValue, getValueOrEmptyValue, isValidNumericKeyboardEvent, isValueNumeric, sanitizeNumericInput, toMaxPrecision, } from "./numericInputUtils";
var IncrementDirection;
(function (IncrementDirection) {
    IncrementDirection[IncrementDirection["DOWN"] = -1] = "DOWN";
    IncrementDirection[IncrementDirection["UP"] = 1] = "UP";
})(IncrementDirection || (IncrementDirection = {}));
const NON_HTML_PROPS = [
    "allowNumericCharactersOnly",
    "buttonPosition",
    "clampValueOnBlur",
    "className",
    "defaultValue",
    "majorStepSize",
    "minorStepSize",
    "onButtonClick",
    "onValueChange",
    "selectAllOnFocus",
    "selectAllOnIncrement",
    "stepSize",
];
let NumericInput = NumericInput_1 = class NumericInput extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            currentImeInputInvalid: false,
            shouldSelectAfterUpdate: false,
            stepMaxPrecision: NumericInput_1.getStepMaxPrecision(this.props),
            value: getValueOrEmptyValue(this.props.value ?? this.props.defaultValue),
        };
        // updating these flags need not trigger re-renders, so don't include them in this.state.
        this.didPasteEventJustOccur = false;
        this.delta = 0;
        this.inputElement = null;
        this.incrementButtonHandlers = this.getButtonEventHandlers(IncrementDirection.UP);
        this.decrementButtonHandlers = this.getButtonEventHandlers(IncrementDirection.DOWN);
        this.inputRef = (input) => {
            this.inputElement = input;
            this.props.inputRef?.(input);
        };
        this.handleButtonClick = (e, direction) => {
            const delta = this.updateDelta(direction, e);
            const nextValue = this.incrementValue(delta);
            this.props.onButtonClick?.(+nextValue, nextValue);
        };
        this.stopContinuousChange = () => {
            this.delta = 0;
            this.clearTimeouts();
            clearInterval(this.intervalId);
            document.removeEventListener("mouseup", this.stopContinuousChange);
        };
        this.handleContinuousChange = () => {
            // If either min or max prop is set, when reaching the limit
            // the button will be disabled and stopContinuousChange will be never fired,
            // hence the need to check on each iteration to properly clear the timeout
            if (this.props.min !== undefined || this.props.max !== undefined) {
                const min = this.props.min ?? -Infinity;
                const max = this.props.max ?? Infinity;
                if (Number(this.state.value) <= min || Number(this.state.value) >= max) {
                    this.stopContinuousChange();
                    return;
                }
            }
            const nextValue = this.incrementValue(this.delta);
            this.props.onButtonClick?.(+nextValue, nextValue);
        };
        // Callbacks - Input
        // =================
        this.handleInputFocus = (e) => {
            // update this state flag to trigger update for input selection (see componentDidUpdate)
            this.setState({ shouldSelectAfterUpdate: this.props.selectAllOnFocus });
            this.props.onFocus?.(e);
        };
        this.handleInputBlur = (e) => {
            // always disable this flag on blur so it's ready for next time.
            this.setState({ shouldSelectAfterUpdate: false });
            if (this.props.clampValueOnBlur) {
                const { value } = e.target;
                this.handleNextValue(this.roundAndClampValue(value));
            }
            this.props.onBlur?.(e);
        };
        this.handleInputKeyDown = (e) => {
            if (this.props.disabled || this.props.readOnly) {
                return;
            }
            // eslint-disable-next-line deprecation/deprecation
            const { keyCode } = e;
            let direction;
            if (keyCode === Keys.ARROW_UP) {
                direction = IncrementDirection.UP;
            }
            else if (keyCode === Keys.ARROW_DOWN) {
                direction = IncrementDirection.DOWN;
            }
            if (direction !== undefined) {
                // when the input field has focus, some key combinations will modify
                // the field's selection range. we'll actually want to select all
                // text in the field after we modify the value on the following
                // lines. preventing the default selection behavior lets us do that
                // without interference.
                e.preventDefault();
                const delta = this.updateDelta(direction, e);
                this.incrementValue(delta);
            }
            this.props.onKeyDown?.(e);
        };
        this.handleCompositionEnd = (e) => {
            if (this.props.allowNumericCharactersOnly) {
                this.handleNextValue(sanitizeNumericInput(e.data));
                this.setState({ currentImeInputInvalid: false });
            }
        };
        this.handleCompositionUpdate = (e) => {
            if (this.props.allowNumericCharactersOnly) {
                const { data } = e;
                const sanitizedValue = sanitizeNumericInput(data);
                if (sanitizedValue.length === 0 && data.length > 0) {
                    this.setState({ currentImeInputInvalid: true });
                }
                else {
                    this.setState({ currentImeInputInvalid: false });
                }
            }
        };
        this.handleInputKeyPress = (e) => {
            // we prohibit keystrokes in onKeyPress instead of onKeyDown, because
            // e.key is not trustworthy in onKeyDown in all browsers.
            if (this.props.allowNumericCharactersOnly && !isValidNumericKeyboardEvent(e)) {
                e.preventDefault();
            }
            this.props.onKeyPress?.(e);
        };
        this.handleInputPaste = (e) => {
            this.didPasteEventJustOccur = true;
            this.props.onPaste?.(e);
        };
        this.handleInputChange = (e) => {
            const { value } = e.target;
            let nextValue = value;
            if (this.props.allowNumericCharactersOnly && this.didPasteEventJustOccur) {
                this.didPasteEventJustOccur = false;
                nextValue = sanitizeNumericInput(value);
            }
            this.handleNextValue(nextValue);
            this.setState({ shouldSelectAfterUpdate: false });
        };
    }
    static getDerivedStateFromProps(props, state) {
        const nextState = {
            prevMaxProp: props.max,
            prevMinProp: props.min,
        };
        const didMinChange = props.min !== state.prevMinProp;
        const didMaxChange = props.max !== state.prevMaxProp;
        const didBoundsChange = didMinChange || didMaxChange;
        // in controlled mode, use props.value
        // in uncontrolled mode, if state.value has not been assigned yet (upon initial mount), use props.defaultValue
        const value = props.value?.toString() ?? state.value;
        const stepMaxPrecision = NumericInput_1.getStepMaxPrecision(props);
        const sanitizedValue = value !== NumericInput_1.VALUE_EMPTY
            ? NumericInput_1.roundAndClampValue(value, stepMaxPrecision, props.min, props.max)
            : NumericInput_1.VALUE_EMPTY;
        // if a new min and max were provided that cause the existing value to fall
        // outside of the new bounds, then clamp the value to the new valid range.
        if (didBoundsChange && sanitizedValue !== state.value) {
            return { ...nextState, stepMaxPrecision, value: sanitizedValue };
        }
        return { ...nextState, stepMaxPrecision, value };
    }
    // Value Helpers
    // =============
    static getStepMaxPrecision(props) {
        if (props.minorStepSize != null) {
            return Utils.countDecimalPlaces(props.minorStepSize);
        }
        else {
            return Utils.countDecimalPlaces(props.stepSize);
        }
    }
    static roundAndClampValue(value, stepMaxPrecision, min, max, delta = 0) {
        if (!isValueNumeric(value)) {
            return NumericInput_1.VALUE_EMPTY;
        }
        const nextValue = toMaxPrecision(parseFloat(value) + delta, stepMaxPrecision);
        return clampValue(nextValue, min, max).toString();
    }
    render() {
        const { buttonPosition, className, fill, large } = this.props;
        const containerClasses = classNames(Classes.NUMERIC_INPUT, { [Classes.LARGE]: large }, className);
        const buttons = this.renderButtons();
        return (React.createElement(ControlGroup, { className: containerClasses, fill: fill },
            buttonPosition === Position.LEFT && buttons,
            this.renderInput(),
            buttonPosition === Position.RIGHT && buttons));
    }
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        if (this.state.shouldSelectAfterUpdate) {
            this.inputElement?.setSelectionRange(0, this.state.value.length);
        }
        const didMinChange = this.props.min !== prevProps.min;
        const didMaxChange = this.props.max !== prevProps.max;
        const didBoundsChange = didMinChange || didMaxChange;
        if (didBoundsChange && this.state.value !== prevState.value) {
            // we clamped the value due to a bounds change, so we should fire the change callback
            this.props.onValueChange?.(+this.state.value, this.state.value, this.inputElement);
        }
    }
    validateProps(nextProps) {
        const { majorStepSize, max, min, minorStepSize, stepSize, value } = nextProps;
        if (min != null && max != null && min > max) {
            throw new Error(Errors.NUMERIC_INPUT_MIN_MAX);
        }
        if (stepSize <= 0) {
            throw new Error(Errors.NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE);
        }
        if (minorStepSize && minorStepSize <= 0) {
            throw new Error(Errors.NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE);
        }
        if (majorStepSize && majorStepSize <= 0) {
            throw new Error(Errors.NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE);
        }
        if (minorStepSize && minorStepSize > stepSize) {
            throw new Error(Errors.NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND);
        }
        if (majorStepSize && majorStepSize < stepSize) {
            throw new Error(Errors.NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND);
        }
        // controlled mode
        if (value != null) {
            const stepMaxPrecision = NumericInput_1.getStepMaxPrecision(nextProps);
            const sanitizedValue = NumericInput_1.roundAndClampValue(value.toString(), stepMaxPrecision, min, max);
            if (sanitizedValue !== value.toString()) {
                console.warn(Errors.NUMERIC_INPUT_CONTROLLED_VALUE_INVALID);
            }
        }
    }
    // Render Helpers
    // ==============
    renderButtons() {
        const { intent, max, min } = this.props;
        const { value } = this.state;
        const disabled = this.props.disabled || this.props.readOnly;
        const isIncrementDisabled = max !== undefined && value !== "" && +value >= max;
        const isDecrementDisabled = min !== undefined && value !== "" && +value <= min;
        return (React.createElement(ButtonGroup, { className: Classes.FIXED, key: "button-group", vertical: true },
            React.createElement(Button, Object.assign({ disabled: disabled || isIncrementDisabled, icon: "chevron-up", intent: intent }, this.incrementButtonHandlers)),
            React.createElement(Button, Object.assign({ disabled: disabled || isDecrementDisabled, icon: "chevron-down", intent: intent }, this.decrementButtonHandlers))));
    }
    renderInput() {
        const inputGroupHtmlProps = removeNonHTMLProps(this.props, NON_HTML_PROPS, true);
        return (React.createElement(InputGroup, Object.assign({ autoComplete: "off" }, inputGroupHtmlProps, { intent: this.state.currentImeInputInvalid ? Intent.DANGER : this.props.intent, inputRef: this.inputRef, large: this.props.large, leftIcon: this.props.leftIcon, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onChange: this.handleInputChange, onCompositionEnd: this.handleCompositionEnd, onCompositionUpdate: this.handleCompositionUpdate, onKeyDown: this.handleInputKeyDown, onKeyPress: this.handleInputKeyPress, onPaste: this.handleInputPaste, rightElement: this.props.rightElement, value: this.state.value })));
    }
    // Callbacks - Buttons
    // ===================
    getButtonEventHandlers(direction) {
        return {
            // keydown is fired repeatedly when held so it's implicitly continuous
            onKeyDown: evt => {
                // eslint-disable-next-line deprecation/deprecation
                if (!this.props.disabled && Keys.isKeyboardClick(evt.keyCode)) {
                    this.handleButtonClick(evt, direction);
                }
            },
            onMouseDown: evt => {
                if (!this.props.disabled) {
                    this.handleButtonClick(evt, direction);
                    this.startContinuousChange();
                }
            },
        };
    }
    startContinuousChange() {
        // The button's onMouseUp event handler doesn't fire if the user
        // releases outside of the button, so we need to watch all the way
        // from the top.
        document.addEventListener("mouseup", this.stopContinuousChange);
        // Initial delay is slightly longer to prevent the user from
        // accidentally triggering the continuous increment/decrement.
        this.setTimeout(() => {
            this.intervalId = window.setInterval(this.handleContinuousChange, NumericInput_1.CONTINUOUS_CHANGE_INTERVAL);
        }, NumericInput_1.CONTINUOUS_CHANGE_DELAY);
    }
    // Data logic
    // ==========
    handleNextValue(valueAsString) {
        if (this.props.value == null) {
            this.setState({ value: valueAsString });
        }
        this.props.onValueChange?.(+valueAsString, valueAsString, this.inputElement);
    }
    incrementValue(delta) {
        // pretend we're incrementing from 0 if currValue is empty
        const currValue = this.state.value === NumericInput_1.VALUE_EMPTY ? NumericInput_1.VALUE_ZERO : this.state.value;
        const nextValue = this.roundAndClampValue(currValue, delta);
        if (nextValue !== this.state.value) {
            this.handleNextValue(nextValue);
            this.setState({ shouldSelectAfterUpdate: this.props.selectAllOnIncrement });
        }
        // return value used in continuous change updates
        return nextValue;
    }
    getIncrementDelta(direction, isShiftKeyPressed, isAltKeyPressed) {
        const { majorStepSize, minorStepSize, stepSize } = this.props;
        if (isShiftKeyPressed && majorStepSize != null) {
            return direction * majorStepSize;
        }
        else if (isAltKeyPressed && minorStepSize != null) {
            return direction * minorStepSize;
        }
        else {
            return direction * stepSize;
        }
    }
    roundAndClampValue(value, delta = 0) {
        return NumericInput_1.roundAndClampValue(value, this.state.stepMaxPrecision, this.props.min, this.props.max, delta);
    }
    updateDelta(direction, e) {
        this.delta = this.getIncrementDelta(direction, e.shiftKey, e.altKey);
        return this.delta;
    }
};
NumericInput.displayName = `${DISPLAYNAME_PREFIX}.NumericInput`;
NumericInput.VALUE_EMPTY = "";
NumericInput.VALUE_ZERO = "0";
NumericInput.defaultProps = {
    allowNumericCharactersOnly: true,
    buttonPosition: Position.RIGHT,
    clampValueOnBlur: false,
    defaultValue: NumericInput_1.VALUE_EMPTY,
    large: false,
    majorStepSize: 10,
    minorStepSize: 0.1,
    selectAllOnFocus: false,
    selectAllOnIncrement: false,
    stepSize: 1,
};
NumericInput.CONTINUOUS_CHANGE_DELAY = 300;
NumericInput.CONTINUOUS_CHANGE_INTERVAL = 100;
NumericInput = NumericInput_1 = __decorate([
    polyfill
], NumericInput);
export { NumericInput };
//# sourceMappingURL=numericInput.js.map