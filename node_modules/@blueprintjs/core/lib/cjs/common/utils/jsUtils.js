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
exports.countDecimalPlaces = exports.clamp = exports.approxEqual = exports.arrayLengthCompare = exports.isNodeEnv = void 0;
var errors_1 = require("../errors");
/** Returns whether `process.env.NODE_ENV` exists and equals `env`. */
function isNodeEnv(env) {
    return typeof process !== "undefined" && process.env && process.env.NODE_ENV === env;
}
exports.isNodeEnv = isNodeEnv;
/**
 * Returns the difference in length between two arrays. A `null` argument is
 * considered an empty list. The return value will be positive if `a` is longer
 * than `b`, negative if the opposite is true, and zero if their lengths are
 * equal.
 */
function arrayLengthCompare(a, b) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    return a.length - b.length;
}
exports.arrayLengthCompare = arrayLengthCompare;
/**
 * Returns true if the two numbers are within the given tolerance of each other.
 * This is useful to correct for floating point precision issues, less useful
 * for integers.
 */
function approxEqual(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 0.00001; }
    return Math.abs(a - b) <= tolerance;
}
exports.approxEqual = approxEqual;
/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
function clamp(val, min, max) {
    if (val == null) {
        return val;
    }
    if (max < min) {
        throw new Error(errors_1.CLAMP_MIN_MAX);
    }
    return Math.min(Math.max(val, min), max);
}
exports.clamp = clamp;
/** Returns the number of decimal places in the given number. */
function countDecimalPlaces(num) {
    if (!isFinite(num)) {
        return 0;
    }
    var e = 1;
    var p = 0;
    while (Math.round(num * e) / e !== num) {
        e *= 10;
        p++;
    }
    return p;
}
exports.countDecimalPlaces = countDecimalPlaces;
//# sourceMappingURL=jsUtils.js.map