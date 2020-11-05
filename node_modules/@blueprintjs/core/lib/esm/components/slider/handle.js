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
import { __decorate, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, Keys } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { clamp } from "../../common/utils";
import { formatPercentage } from "./sliderUtils";
// props that require number values, for validation
var NUMBER_PROPS = ["max", "min", "stepSize", "tickSize", "value"];
/** Internal component for a Handle with click/drag/keyboard logic to determine a new value. */
var Handle = /** @class */ (function (_super) {
    __extends(Handle, _super);
    function Handle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMoving: false,
        };
        _this.handleElement = null;
        _this.refHandlers = {
            handle: function (el) { return (_this.handleElement = el); },
        };
        _this.beginHandleMovement = function (event) {
            document.addEventListener("mousemove", _this.handleHandleMovement);
            document.addEventListener("mouseup", _this.endHandleMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(_this.mouseEventClientOffset(event)));
        };
        _this.beginHandleTouchMovement = function (event) {
            document.addEventListener("touchmove", _this.handleHandleTouchMovement);
            document.addEventListener("touchend", _this.endHandleTouchMovement);
            document.addEventListener("touchcancel", _this.endHandleTouchMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(_this.touchEventClientOffset(event)));
        };
        _this.getStyleProperties = function () {
            if (_this.handleElement == null) {
                return {};
            }
            // The handle midpoint of RangeSlider is actually shifted by a margin to
            // be on the edge of the visible handle element. Because the midpoint
            // calculation does not take this margin into account, we instead
            // measure the long side (which is equal to the short side plus the
            // margin).
            var _a = _this.props, _b = _a.min, min = _b === void 0 ? 0 : _b, tickSizeRatio = _a.tickSizeRatio, value = _a.value, vertical = _a.vertical;
            var handleMidpoint = _this.getHandleMidpointAndOffset(_this.handleElement, true).handleMidpoint;
            var offsetRatio = (value - min) * tickSizeRatio;
            var offsetCalc = "calc(" + formatPercentage(offsetRatio) + " - " + handleMidpoint + "px)";
            return vertical ? { bottom: offsetCalc } : { left: offsetCalc };
        };
        _this.endHandleMovement = function (event) {
            _this.handleMoveEndedAt(_this.mouseEventClientOffset(event));
        };
        _this.endHandleTouchMovement = function (event) {
            _this.handleMoveEndedAt(_this.touchEventClientOffset(event));
        };
        _this.handleMoveEndedAt = function (clientPixel) {
            var _a, _b;
            _this.removeDocumentEventListeners();
            _this.setState({ isMoving: false });
            // always invoke onRelease; changeValue may call onChange if value is different
            var finalValue = _this.changeValue(_this.clientToValue(clientPixel));
            (_b = (_a = _this.props).onRelease) === null || _b === void 0 ? void 0 : _b.call(_a, finalValue);
        };
        _this.handleHandleMovement = function (event) {
            _this.handleMovedTo(_this.mouseEventClientOffset(event));
        };
        _this.handleHandleTouchMovement = function (event) {
            _this.handleMovedTo(_this.touchEventClientOffset(event));
        };
        _this.handleMovedTo = function (clientPixel) {
            if (_this.state.isMoving && !_this.props.disabled) {
                _this.changeValue(_this.clientToValue(clientPixel));
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, stepSize = _a.stepSize, value = _a.value;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable-next-line deprecation/deprecation */
            var which = event.which;
            if (which === Keys.ARROW_DOWN || which === Keys.ARROW_LEFT) {
                _this.changeValue(value - stepSize);
                // this key event has been handled! prevent browser scroll on up/down
                event.preventDefault();
            }
            else if (which === Keys.ARROW_UP || which === Keys.ARROW_RIGHT) {
                _this.changeValue(value + stepSize);
                event.preventDefault();
            }
        };
        _this.handleKeyUp = function (event) {
            var _a, _b;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable-next-line deprecation/deprecation */
            if ([Keys.ARROW_UP, Keys.ARROW_DOWN, Keys.ARROW_LEFT, Keys.ARROW_RIGHT].indexOf(event.which) >= 0) {
                (_b = (_a = _this.props).onRelease) === null || _b === void 0 ? void 0 : _b.call(_a, _this.props.value);
            }
        };
        return _this;
    }
    Handle.prototype.componentDidMount = function () {
        // The first time this component renders, it has no ref to the handle and thus incorrectly centers the handle.
        // Therefore, on the first mount, force a re-render to center the handle with the ref'd component.
        this.forceUpdate();
    };
    Handle.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, label = _b.label;
        var isMoving = this.state.isMoving;
        return (React.createElement("span", { className: classNames(Classes.SLIDER_HANDLE, (_a = {}, _a[Classes.ACTIVE] = isMoving, _a), className), onKeyDown: disabled ? undefined : this.handleKeyDown, onKeyUp: disabled ? undefined : this.handleKeyUp, onMouseDown: disabled ? undefined : this.beginHandleMovement, onTouchStart: disabled ? undefined : this.beginHandleTouchMovement, ref: this.refHandlers.handle, style: this.getStyleProperties(), tabIndex: 0 }, label == null ? null : React.createElement("span", { className: Classes.SLIDER_LABEL }, label)));
    };
    Handle.prototype.componentWillUnmount = function () {
        this.removeDocumentEventListeners();
    };
    /** Convert client pixel to value between min and max. */
    Handle.prototype.clientToValue = function (clientPixel) {
        var _a = this.props, stepSize = _a.stepSize, tickSize = _a.tickSize, value = _a.value, vertical = _a.vertical;
        if (this.handleElement == null) {
            return value;
        }
        // #1769: this logic doesn't work perfectly when the tick size is
        // smaller than the handle size; it may be off by a tick or two.
        var clientPixelNormalized = vertical ? window.innerHeight - clientPixel : clientPixel;
        var handleCenterPixel = this.getHandleElementCenterPixel(this.handleElement);
        var pixelDelta = clientPixelNormalized - handleCenterPixel;
        if (isNaN(pixelDelta)) {
            return value;
        }
        // convert pixels to range value in increments of `stepSize`
        return value + Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
    };
    Handle.prototype.mouseEventClientOffset = function (event) {
        return this.props.vertical ? event.clientY : event.clientX;
    };
    Handle.prototype.touchEventClientOffset = function (event) {
        var touch = event.changedTouches[0];
        return this.props.vertical ? touch.clientY : touch.clientX;
    };
    Handle.prototype.validateProps = function (props) {
        for (var _i = 0, NUMBER_PROPS_1 = NUMBER_PROPS; _i < NUMBER_PROPS_1.length; _i++) {
            var prop = NUMBER_PROPS_1[_i];
            if (typeof props[prop] !== "number") {
                throw new Error("[Blueprint] <Handle> requires number value for " + prop + " prop");
            }
        }
    };
    /** Clamp value and invoke callback if it differs from current value */
    Handle.prototype.changeValue = function (newValue, callback) {
        if (callback === void 0) { callback = this.props.onChange; }
        newValue = this.clamp(newValue);
        if (!isNaN(newValue) && this.props.value !== newValue) {
            callback === null || callback === void 0 ? void 0 : callback(newValue);
        }
        return newValue;
    };
    /** Clamp value between min and max props */
    Handle.prototype.clamp = function (value) {
        return clamp(value, this.props.min, this.props.max);
    };
    Handle.prototype.getHandleElementCenterPixel = function (handleElement) {
        var _a = this.getHandleMidpointAndOffset(handleElement), handleMidpoint = _a.handleMidpoint, handleOffset = _a.handleOffset;
        return handleOffset + handleMidpoint;
    };
    Handle.prototype.getHandleMidpointAndOffset = function (handleElement, useOppositeDimension) {
        if (useOppositeDimension === void 0) { useOppositeDimension = false; }
        if (handleElement == null) {
            return { handleMidpoint: 0, handleOffset: 0 };
        }
        var vertical = this.props.vertical;
        // getBoundingClientRect().height includes border size; clientHeight does not.
        var handleRect = handleElement.getBoundingClientRect();
        var sizeKey = vertical
            ? useOppositeDimension
                ? "width"
                : "height"
            : useOppositeDimension
                ? "height"
                : "width";
        // "bottom" value seems to be consistently incorrect, so explicitly
        // calculate it using the window offset instead.
        var handleOffset = vertical ? window.innerHeight - (handleRect.top + handleRect[sizeKey]) : handleRect.left;
        return { handleMidpoint: handleRect[sizeKey] / 2, handleOffset: handleOffset };
    };
    Handle.prototype.removeDocumentEventListeners = function () {
        document.removeEventListener("mousemove", this.handleHandleMovement);
        document.removeEventListener("mouseup", this.endHandleMovement);
        document.removeEventListener("touchmove", this.handleHandleTouchMovement);
        document.removeEventListener("touchend", this.endHandleTouchMovement);
        document.removeEventListener("touchcancel", this.endHandleTouchMovement);
    };
    Handle.displayName = DISPLAYNAME_PREFIX + ".SliderHandle";
    Handle = __decorate([
        polyfill
    ], Handle);
    return Handle;
}(AbstractPureComponent2));
export { Handle };
//# sourceMappingURL=handle.js.map