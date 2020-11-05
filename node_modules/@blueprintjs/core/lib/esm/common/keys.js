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
export var BACKSPACE = 8;
export var TAB = 9;
export var ENTER = 13;
export var SHIFT = 16;
export var ESCAPE = 27;
export var SPACE = 32;
export var ARROW_LEFT = 37;
export var ARROW_UP = 38;
export var ARROW_RIGHT = 39;
export var ARROW_DOWN = 40;
export var DELETE = 46;
/** Returns whether the key code is `enter` or `space`, the two keys that can click a button. */
export function isKeyboardClick(keyCode) {
    return keyCode === ENTER || keyCode === SPACE;
}
//# sourceMappingURL=keys.js.map