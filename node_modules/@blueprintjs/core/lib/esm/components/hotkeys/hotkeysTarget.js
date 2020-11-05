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
import { __extends } from "tslib";
import * as React from "react";
import { HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT, HOTKEYS_WARN_DECORATOR_NO_METHOD } from "../../common/errors";
import { getDisplayName, isFunction } from "../../common/utils";
import { HotkeyScope, HotkeysEvents } from "./hotkeysEvents";
export function HotkeysTarget(WrappedComponent) {
    var _a;
    if (!isFunction(WrappedComponent.prototype.renderHotkeys)) {
        console.warn(HOTKEYS_WARN_DECORATOR_NO_METHOD);
    }
    return _a = /** @class */ (function (_super) {
            __extends(HotkeysTargetClass, _super);
            function HotkeysTargetClass() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /** @internal */
                _this.globalHotkeysEvents = new HotkeysEvents(HotkeyScope.GLOBAL);
                /** @internal */
                _this.localHotkeysEvents = new HotkeysEvents(HotkeyScope.LOCAL);
                return _this;
            }
            HotkeysTargetClass.prototype.componentDidMount = function () {
                if (_super.prototype.componentDidMount != null) {
                    _super.prototype.componentDidMount.call(this);
                }
                // attach global key event listeners
                document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
                document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
            };
            HotkeysTargetClass.prototype.componentWillUnmount = function () {
                var _a;
                (_a = _super.prototype.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(this);
                document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
                document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
                this.globalHotkeysEvents.clear();
                this.localHotkeysEvents.clear();
            };
            HotkeysTargetClass.prototype.render = function () {
                var _this = this;
                var element = _super.prototype.render.call(this);
                if (element == null) {
                    // always return `element` in case caller is distinguishing between `null` and `undefined`
                    return element;
                }
                if (!React.isValidElement(element)) {
                    console.warn(HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT);
                    return element;
                }
                if (isFunction(this.renderHotkeys)) {
                    var hotkeys = this.renderHotkeys();
                    if (this.localHotkeysEvents) {
                        this.localHotkeysEvents.setHotkeys(hotkeys.props);
                    }
                    if (this.globalHotkeysEvents) {
                        this.globalHotkeysEvents.setHotkeys(hotkeys.props);
                    }
                    if (this.localHotkeysEvents.count() > 0) {
                        var tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
                        var _a = element.props, existingKeyDown_1 = _a.onKeyDown, existingKeyUp_1 = _a.onKeyUp;
                        var handleKeyDownWrapper = function (e) {
                            _this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                            existingKeyDown_1 === null || existingKeyDown_1 === void 0 ? void 0 : existingKeyDown_1(e);
                        };
                        var handleKeyUpWrapper = function (e) {
                            _this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                            existingKeyUp_1 === null || existingKeyUp_1 === void 0 ? void 0 : existingKeyUp_1(e);
                        };
                        return React.cloneElement(element, {
                            onKeyDown: handleKeyDownWrapper,
                            onKeyUp: handleKeyUpWrapper,
                            tabIndex: tabIndex,
                        });
                    }
                }
                return element;
            };
            return HotkeysTargetClass;
        }(WrappedComponent)),
        _a.displayName = "HotkeysTarget(" + getDisplayName(WrappedComponent) + ")",
        _a;
}
//# sourceMappingURL=hotkeysTarget.js.map