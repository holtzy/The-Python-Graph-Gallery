"use strict";
/*
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.throttleReactEventCallback = exports.throttleEvent = exports.elementIsOrContains = void 0;
var functionUtils_1 = require("./functionUtils");
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
exports.elementIsOrContains = elementIsOrContains;
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
function throttleEvent(target, eventName, newEventName) {
    var throttledFunc = throttleImpl(function (event) {
        target.dispatchEvent(new CustomEvent(newEventName, event));
    });
    target.addEventListener(eventName, throttledFunc);
    return throttledFunc;
}
exports.throttleEvent = throttleEvent;
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
function throttleReactEventCallback(callback, options) {
    if (options === void 0) { options = {}; }
    var throttledFunc = throttleImpl(callback, function (event2) {
        if (options.preventDefault) {
            event2.preventDefault();
        }
    }, 
    // prevent React from reclaiming the event object before we reference it
    function (event2) { return event2.persist(); });
    return throttledFunc;
}
exports.throttleReactEventCallback = throttleReactEventCallback;
/**
 * Throttle a method by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function throttle(method) {
    return throttleImpl(method);
}
exports.throttle = throttle;
// eslint-disable-next-line @typescript-eslint/ban-types
function throttleImpl(onAnimationFrameRequested, onBeforeIsRunningCheck, onAfterIsRunningCheck) {
    var isRunning = false;
    var func = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't use safeInvoke, because we might have more than its max number
        // of typed params
        if (functionUtils_1.isFunction(onBeforeIsRunningCheck)) {
            onBeforeIsRunningCheck.apply(void 0, args);
        }
        if (isRunning) {
            return;
        }
        isRunning = true;
        if (functionUtils_1.isFunction(onAfterIsRunningCheck)) {
            onAfterIsRunningCheck.apply(void 0, args);
        }
        requestAnimationFrame(function () {
            onAnimationFrameRequested.apply(void 0, args);
            isRunning = false;
        });
    };
    return func;
}
//# sourceMappingURL=domUtils.js.map