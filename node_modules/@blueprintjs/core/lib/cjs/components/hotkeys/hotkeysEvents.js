"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotkeysEvents = exports.HotkeyScope = void 0;
var react_1 = require("react");
var utils_1 = require("../../common/utils");
var hotkey_1 = require("./hotkey");
var hotkeyParser_1 = require("./hotkeyParser");
var hotkeysDialog_1 = require("./hotkeysDialog");
var SHOW_DIALOG_KEY = "?";
var HotkeyScope;
(function (HotkeyScope) {
    HotkeyScope["LOCAL"] = "local";
    HotkeyScope["GLOBAL"] = "global";
})(HotkeyScope = exports.HotkeyScope || (exports.HotkeyScope = {}));
var HotkeysEvents = /** @class */ (function () {
    function HotkeysEvents(scope) {
        var _this = this;
        this.scope = scope;
        this.actions = [];
        this.handleKeyDown = function (e) {
            var combo = hotkeyParser_1.getKeyCombo(e);
            var isTextInput = _this.isTextInput(e);
            if (!isTextInput && hotkeyParser_1.comboMatches(hotkeyParser_1.parseKeyCombo(SHOW_DIALOG_KEY), combo)) {
                if (hotkeysDialog_1.isHotkeysDialogShowing()) {
                    hotkeysDialog_1.hideHotkeysDialogAfterDelay();
                }
                else {
                    hotkeysDialog_1.showHotkeysDialog(_this.actions.map(function (action) { return action.props; }));
                }
                return;
            }
            else if (hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            _this.invokeNamedCallbackIfComboRecognized(combo, "onKeyDown", e);
        };
        this.handleKeyUp = function (e) {
            if (hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            _this.invokeNamedCallbackIfComboRecognized(hotkeyParser_1.getKeyCombo(e), "onKeyUp", e);
        };
    }
    HotkeysEvents.prototype.count = function () {
        return this.actions.length;
    };
    HotkeysEvents.prototype.clear = function () {
        this.actions = [];
    };
    HotkeysEvents.prototype.setHotkeys = function (props) {
        var _this = this;
        var actions = [];
        react_1.Children.forEach(props.children, function (child) {
            if (utils_1.isElementOfType(child, hotkey_1.Hotkey) && _this.isScope(child.props)) {
                actions.push({
                    combo: hotkeyParser_1.parseKeyCombo(child.props.combo),
                    props: child.props,
                });
            }
        });
        this.actions = actions;
    };
    HotkeysEvents.prototype.invokeNamedCallbackIfComboRecognized = function (combo, callbackName, e) {
        var _a, _b;
        var isTextInput = this.isTextInput(e);
        for (var _i = 0, _c = this.actions; _i < _c.length; _i++) {
            var action = _c[_i];
            var shouldIgnore = (isTextInput && !action.props.allowInInput) || action.props.disabled;
            if (!shouldIgnore && hotkeyParser_1.comboMatches(action.combo, combo)) {
                if (action.props.preventDefault) {
                    e.preventDefault();
                }
                if (action.props.stopPropagation) {
                    // set a flag just for unit testing. not meant to be referenced in feature work.
                    e.isPropagationStopped = true;
                    e.stopPropagation();
                }
                (_b = (_a = action.props)[callbackName]) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            }
        }
    };
    HotkeysEvents.prototype.isScope = function (props) {
        return (props.global ? HotkeyScope.GLOBAL : HotkeyScope.LOCAL) === this.scope;
    };
    HotkeysEvents.prototype.isTextInput = function (e) {
        var elem = e.target;
        // we check these cases for unit testing, but this should not happen
        // during normal operation
        if (elem == null || elem.closest == null) {
            return false;
        }
        var editable = elem.closest("input, textarea, [contenteditable=true]");
        if (editable == null) {
            return false;
        }
        // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
        if (editable.tagName.toLowerCase() === "input") {
            var inputType = editable.type;
            if (inputType === "checkbox" || inputType === "radio") {
                return false;
            }
        }
        // don't let read-only fields prevent hotkey behavior
        if (editable.readOnly) {
            return false;
        }
        return true;
    };
    return HotkeysEvents;
}());
exports.HotkeysEvents = HotkeysEvents;
//# sourceMappingURL=hotkeysEvents.js.map