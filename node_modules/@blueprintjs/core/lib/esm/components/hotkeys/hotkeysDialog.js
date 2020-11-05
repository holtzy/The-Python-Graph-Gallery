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
import { __assign } from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Classes } from "../../common";
import { Dialog } from "../../components";
import { Hotkey } from "./hotkey";
import { Hotkeys } from "./hotkeys";
/**
 * The delay before showing or hiding the dialog. Should be long enough to
 * allow all registered hotkey listeners to execute first.
 */
var DELAY_IN_MS = 10;
var HotkeysDialog = /** @class */ (function () {
    function HotkeysDialog() {
        var _this = this;
        this.componentProps = {
            globalHotkeysGroup: "Global hotkeys",
        };
        this.container = null;
        this.hotkeysQueue = [];
        this.isDialogShowing = false;
        this.show = function () {
            _this.isDialogShowing = true;
            _this.render();
        };
        this.hide = function () {
            _this.isDialogShowing = false;
            _this.render();
        };
    }
    HotkeysDialog.prototype.render = function () {
        if (this.container == null) {
            this.container = this.getContainer();
        }
        ReactDOM.render(this.renderComponent(), this.container);
    };
    HotkeysDialog.prototype.unmount = function () {
        if (this.container != null) {
            ReactDOM.unmountComponentAtNode(this.container);
            this.container.remove();
            this.container = null;
        }
    };
    /**
     * Because hotkeys can be registered globally and locally and because
     * event ordering cannot be guaranteed, we use this debouncing method to
     * allow all hotkey listeners to fire and add their hotkeys to the dialog.
     *
     * 10msec after the last listener adds their hotkeys, we render the dialog
     * and clear the queue.
     */
    HotkeysDialog.prototype.enqueueHotkeysForDisplay = function (hotkeys) {
        this.hotkeysQueue.push(hotkeys);
        // reset timeout for debounce
        window.clearTimeout(this.showTimeoutToken);
        this.showTimeoutToken = window.setTimeout(this.show, DELAY_IN_MS);
    };
    HotkeysDialog.prototype.hideAfterDelay = function () {
        window.clearTimeout(this.hideTimeoutToken);
        this.hideTimeoutToken = window.setTimeout(this.hide, DELAY_IN_MS);
    };
    HotkeysDialog.prototype.isShowing = function () {
        return this.isDialogShowing;
    };
    HotkeysDialog.prototype.getContainer = function () {
        if (this.container == null) {
            this.container = document.createElement("div");
            this.container.classList.add(Classes.PORTAL);
            document.body.appendChild(this.container);
        }
        return this.container;
    };
    HotkeysDialog.prototype.renderComponent = function () {
        return (React.createElement(Dialog, __assign({}, this.componentProps, { className: classNames(Classes.HOTKEY_DIALOG, this.componentProps.className), isOpen: this.isDialogShowing, onClose: this.hide }),
            React.createElement("div", { className: Classes.DIALOG_BODY }, this.renderHotkeys())));
    };
    HotkeysDialog.prototype.renderHotkeys = function () {
        var _this = this;
        var hotkeys = this.emptyHotkeyQueue();
        var elements = hotkeys.map(function (hotkey, index) {
            var group = hotkey.global === true && hotkey.group == null ? _this.componentProps.globalHotkeysGroup : hotkey.group;
            return React.createElement(Hotkey, __assign({ key: index }, hotkey, { group: group }));
        });
        return React.createElement(Hotkeys, null, elements);
    };
    HotkeysDialog.prototype.emptyHotkeyQueue = function () {
        // flatten then empty the hotkeys queue
        var hotkeys = this.hotkeysQueue.reduce(function (arr, queued) { return arr.concat(queued); }, []);
        this.hotkeysQueue.length = 0;
        return hotkeys;
    };
    return HotkeysDialog;
}());
// singleton instance
var HOTKEYS_DIALOG = new HotkeysDialog();
export function isHotkeysDialogShowing() {
    return HOTKEYS_DIALOG.isShowing();
}
export function setHotkeysDialogProps(props) {
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            HOTKEYS_DIALOG.componentProps[key] = props[key];
        }
    }
}
export function showHotkeysDialog(hotkeys) {
    HOTKEYS_DIALOG.enqueueHotkeysForDisplay(hotkeys);
}
export function hideHotkeysDialog() {
    HOTKEYS_DIALOG.hide();
}
/**
 * Use this function instead of `hideHotkeysDialog` if you need to ensure that all hotkey listeners
 * have time to execute with the dialog in a consistent open state. This can avoid flickering the
 * dialog between open and closed states as successive listeners fire.
 */
export function hideHotkeysDialogAfterDelay() {
    HOTKEYS_DIALOG.hideAfterDelay();
}
//# sourceMappingURL=hotkeysDialog.js.map