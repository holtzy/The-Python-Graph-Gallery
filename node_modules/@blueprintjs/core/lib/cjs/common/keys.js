"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
exports.isKeyboardClick = exports.DELETE = exports.ARROW_DOWN = exports.ARROW_RIGHT = exports.ARROW_UP = exports.ARROW_LEFT = exports.SPACE = exports.ESCAPE = exports.SHIFT = exports.ENTER = exports.TAB = exports.BACKSPACE = void 0;
exports.BACKSPACE = 8;
exports.TAB = 9;
exports.ENTER = 13;
exports.SHIFT = 16;
exports.ESCAPE = 27;
exports.SPACE = 32;
exports.ARROW_LEFT = 37;
exports.ARROW_UP = 38;
exports.ARROW_RIGHT = 39;
exports.ARROW_DOWN = 40;
exports.DELETE = 46;
/** Returns whether the key code is `enter` or `space`, the two keys that can click a button. */
function isKeyboardClick(keyCode) {
    return keyCode === exports.ENTER || keyCode === exports.SPACE;
}
exports.isKeyboardClick = isKeyboardClick;
//# sourceMappingURL=keys.js.map