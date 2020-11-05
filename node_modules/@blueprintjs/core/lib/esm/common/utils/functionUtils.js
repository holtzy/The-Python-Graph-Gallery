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
/** Returns whether the value is a function. Acts as a type guard. */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value) {
    return typeof value === "function";
}
// eslint-disable-next-line @typescript-eslint/ban-types
export function safeInvoke(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
    return undefined;
}
// eslint-disable-next-line @typescript-eslint/ban-types
export function safeInvokeOrValue(funcOrValue) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return isFunction(funcOrValue) ? funcOrValue.apply(void 0, args) : funcOrValue;
}
//# sourceMappingURL=functionUtils.js.map