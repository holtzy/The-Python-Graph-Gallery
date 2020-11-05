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
import { Children } from "react";
import { isElementOfType } from "../../common/utils";
import { Hotkey } from "./hotkey";
import { comboMatches, getKeyCombo, parseKeyCombo } from "./hotkeyParser";
import { hideHotkeysDialogAfterDelay, isHotkeysDialogShowing, showHotkeysDialog } from "./hotkeysDialog";
const SHOW_DIALOG_KEY = "?";
export var HotkeyScope;
(function (HotkeyScope) {
    HotkeyScope["LOCAL"] = "local";
    HotkeyScope["GLOBAL"] = "global";
})(HotkeyScope || (HotkeyScope = {}));
export class HotkeysEvents {
    constructor(scope) {
        this.scope = scope;
        this.actions = [];
        this.handleKeyDown = (e) => {
            const combo = getKeyCombo(e);
            const isTextInput = this.isTextInput(e);
            if (!isTextInput && comboMatches(parseKeyCombo(SHOW_DIALOG_KEY), combo)) {
                if (isHotkeysDialogShowing()) {
                    hideHotkeysDialogAfterDelay();
                }
                else {
                    showHotkeysDialog(this.actions.map(action => action.props));
                }
                return;
            }
            else if (isHotkeysDialogShowing()) {
                return;
            }
            this.invokeNamedCallbackIfComboRecognized(combo, "onKeyDown", e);
        };
        this.handleKeyUp = (e) => {
            if (isHotkeysDialogShowing()) {
                return;
            }
            this.invokeNamedCallbackIfComboRecognized(getKeyCombo(e), "onKeyUp", e);
        };
    }
    count() {
        return this.actions.length;
    }
    clear() {
        this.actions = [];
    }
    setHotkeys(props) {
        const actions = [];
        Children.forEach(props.children, (child) => {
            if (isElementOfType(child, Hotkey) && this.isScope(child.props)) {
                actions.push({
                    combo: parseKeyCombo(child.props.combo),
                    props: child.props,
                });
            }
        });
        this.actions = actions;
    }
    invokeNamedCallbackIfComboRecognized(combo, callbackName, e) {
        const isTextInput = this.isTextInput(e);
        for (const action of this.actions) {
            const shouldIgnore = (isTextInput && !action.props.allowInInput) || action.props.disabled;
            if (!shouldIgnore && comboMatches(action.combo, combo)) {
                if (action.props.preventDefault) {
                    e.preventDefault();
                }
                if (action.props.stopPropagation) {
                    // set a flag just for unit testing. not meant to be referenced in feature work.
                    e.isPropagationStopped = true;
                    e.stopPropagation();
                }
                action.props[callbackName]?.(e);
            }
        }
    }
    isScope(props) {
        return (props.global ? HotkeyScope.GLOBAL : HotkeyScope.LOCAL) === this.scope;
    }
    isTextInput(e) {
        const elem = e.target;
        // we check these cases for unit testing, but this should not happen
        // during normal operation
        if (elem == null || elem.closest == null) {
            return false;
        }
        const editable = elem.closest("input, textarea, [contenteditable=true]");
        if (editable == null) {
            return false;
        }
        // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
        if (editable.tagName.toLowerCase() === "input") {
            const inputType = editable.type;
            if (inputType === "checkbox" || inputType === "radio") {
                return false;
            }
        }
        // don't let read-only fields prevent hotkey behavior
        if (editable.readOnly) {
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=hotkeysEvents.js.map