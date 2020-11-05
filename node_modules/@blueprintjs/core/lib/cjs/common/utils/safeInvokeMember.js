"use strict";
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
exports.safeInvokeMember = void 0;
var functionUtils_1 = require("./functionUtils");
// eslint-disable-next-line @typescript-eslint/ban-types
function safeInvokeMember(obj, key) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (obj != null) {
        var member = obj[key];
        if (functionUtils_1.isFunction(member)) {
            return member.apply(void 0, args);
        }
    }
    return undefined;
}
exports.safeInvokeMember = safeInvokeMember;
//# sourceMappingURL=safeInvokeMember.js.map