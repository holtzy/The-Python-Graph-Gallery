"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepUnequalKeyValues = exports.deepCompareKeys = exports.shallowCompareKeys = exports.arraysEqual = void 0;
/**
 * Returns true if the arrays are equal. Elements will be shallowly compared by
 * default, or they will be compared using the custom `compare` function if one
 * is provided.
 */
function arraysEqual(arrA, arrB, compare) {
    if (compare === void 0) { compare = function (a, b) { return a === b; }; }
    // treat `null` and `undefined` as the same
    if (arrA == null && arrB == null) {
        return true;
    }
    else if (arrA == null || arrB == null || arrA.length !== arrB.length) {
        return false;
    }
    else {
        return arrA.every(function (a, i) { return compare(a, arrB[i]); });
    }
}
exports.arraysEqual = arraysEqual;
/**
 * Shallow comparison between objects. If `keys` is provided, just that subset
 * of keys will be compared; otherwise, all keys will be compared.
 * @returns true if items are equal.
 */
function shallowCompareKeys(objA, objB, keys) {
    // treat `null` and `undefined` as the same
    if (objA == null && objB == null) {
        return true;
    }
    else if (objA == null || objB == null) {
        return false;
    }
    else if (Array.isArray(objA) || Array.isArray(objB)) {
        return false;
    }
    else if (keys != null) {
        return shallowCompareKeysImpl(objA, objB, keys);
    }
    else {
        // shallowly compare all keys from both objects
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        return (shallowCompareKeysImpl(objA, objB, { include: keysA }) &&
            shallowCompareKeysImpl(objA, objB, { include: keysB }));
    }
}
exports.shallowCompareKeys = shallowCompareKeys;
/**
 * Deep comparison between objects. If `keys` is provided, just that subset of
 * keys will be compared; otherwise, all keys will be compared.
 * @returns true if items are equal.
 */
function deepCompareKeys(objA, objB, keys) {
    if (objA === objB) {
        return true;
    }
    else if (objA == null && objB == null) {
        // treat `null` and `undefined` as the same
        return true;
    }
    else if (objA == null || objB == null) {
        return false;
    }
    else if (Array.isArray(objA) || Array.isArray(objB)) {
        return arraysEqual(objA, objB, deepCompareKeys);
    }
    else if (isSimplePrimitiveType(objA) || isSimplePrimitiveType(objB)) {
        return objA === objB;
    }
    else if (keys != null) {
        return deepCompareKeysImpl(objA, objB, keys);
    }
    else if (objA.constructor !== objB.constructor) {
        return false;
    }
    else {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA == null || keysB == null) {
            return false;
        }
        if (keysA.length === 0 && keysB.length === 0) {
            return true;
        }
        return arraysEqual(keysA, keysB) && deepCompareKeysImpl(objA, objB, keysA);
    }
}
exports.deepCompareKeys = deepCompareKeys;
/**
 * Returns a descriptive object for each key whose values are deeply unequal
 * between two provided objects. Useful for debugging shouldComponentUpdate.
 */
function getDeepUnequalKeyValues(objA, objB, keys) {
    if (objA === void 0) { objA = {}; }
    if (objB === void 0) { objB = {}; }
    var filteredKeys = keys == null ? unionKeys(objA, objB) : keys;
    return getUnequalKeyValues(objA, objB, filteredKeys, function (a, b, key) {
        return deepCompareKeys(a, b, [key]);
    });
}
exports.getDeepUnequalKeyValues = getDeepUnequalKeyValues;
// Private helpers
// ===============
/**
 * Partial shallow comparison between objects using the given list of keys.
 */
function shallowCompareKeysImpl(objA, objB, keys) {
    return filterKeys(objA, objB, keys).every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && objA[key] === objB[key];
    });
}
/**
 * Partial deep comparison between objects using the given list of keys.
 */
function deepCompareKeysImpl(objA, objB, keys) {
    return keys.every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && deepCompareKeys(objA[key], objB[key]);
    });
}
function isSimplePrimitiveType(value) {
    return typeof value === "number" || typeof value === "string" || typeof value === "boolean";
}
function filterKeys(objA, objB, keys) {
    if (isAllowlist(keys)) {
        return keys.include;
    }
    else if (isDenylist(keys)) {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        // merge keys from both objects into a big set for quick access
        var keySet_1 = arrayToObject(keysA.concat(keysB));
        // delete denied keys from the key set
        keys.exclude.forEach(function (key) { return delete keySet_1[key]; });
        // return the remaining keys as an array
        return Object.keys(keySet_1);
    }
    return [];
}
function isAllowlist(keys) {
    return keys != null && keys.include != null;
}
function isDenylist(keys) {
    return keys != null && keys.exclude != null;
}
function arrayToObject(arr) {
    return arr.reduce(function (obj, element) {
        obj[element] = true;
        return obj;
    }, {});
}
function getUnequalKeyValues(objA, objB, keys, compareFn) {
    var unequalKeys = keys.filter(function (key) { return !compareFn(objA, objB, key); });
    var unequalKeyValues = unequalKeys.map(function (key) { return ({
        key: key,
        valueA: objA[key],
        valueB: objB[key],
    }); });
    return unequalKeyValues;
}
function unionKeys(objA, objB) {
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    var concatKeys = keysA.concat(keysB);
    var keySet = arrayToObject(concatKeys);
    return Object.keys(keySet);
}
//# sourceMappingURL=compareUtils.js.map