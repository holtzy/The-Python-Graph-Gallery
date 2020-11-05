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
import * as React from "react";
import { HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT, HOTKEYS_WARN_DECORATOR_NO_METHOD } from "../../common/errors";
import { getDisplayName, isFunction } from "../../common/utils";
import { HotkeyScope, HotkeysEvents } from "./hotkeysEvents";
export function HotkeysTarget(WrappedComponent) {
    var _a;
    if (!isFunction(WrappedComponent.prototype.renderHotkeys)) {
        console.warn(HOTKEYS_WARN_DECORATOR_NO_METHOD);
    }
    return _a = class HotkeysTargetClass extends WrappedComponent {
            constructor() {
                super(...arguments);
                /** @internal */
                this.globalHotkeysEvents = new HotkeysEvents(HotkeyScope.GLOBAL);
                /** @internal */
                this.localHotkeysEvents = new HotkeysEvents(HotkeyScope.LOCAL);
            }
            componentDidMount() {
                if (super.componentDidMount != null) {
                    super.componentDidMount();
                }
                // attach global key event listeners
                document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
                document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
            }
            componentWillUnmount() {
                super.componentWillUnmount?.();
                document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
                document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
                this.globalHotkeysEvents.clear();
                this.localHotkeysEvents.clear();
            }
            render() {
                const element = super.render();
                if (element == null) {
                    // always return `element` in case caller is distinguishing between `null` and `undefined`
                    return element;
                }
                if (!React.isValidElement(element)) {
                    console.warn(HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT);
                    return element;
                }
                if (isFunction(this.renderHotkeys)) {
                    const hotkeys = this.renderHotkeys();
                    if (this.localHotkeysEvents) {
                        this.localHotkeysEvents.setHotkeys(hotkeys.props);
                    }
                    if (this.globalHotkeysEvents) {
                        this.globalHotkeysEvents.setHotkeys(hotkeys.props);
                    }
                    if (this.localHotkeysEvents.count() > 0) {
                        const tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
                        const { onKeyDown: existingKeyDown, onKeyUp: existingKeyUp } = element.props;
                        const handleKeyDownWrapper = (e) => {
                            this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                            existingKeyDown?.(e);
                        };
                        const handleKeyUpWrapper = (e) => {
                            this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                            existingKeyUp?.(e);
                        };
                        return React.cloneElement(element, {
                            onKeyDown: handleKeyDownWrapper,
                            onKeyUp: handleKeyUpWrapper,
                            tabIndex,
                        });
                    }
                }
                return element;
            }
        },
        _a.displayName = `HotkeysTarget(${getDisplayName(WrappedComponent)})`,
        _a;
}
//# sourceMappingURL=hotkeysTarget.js.map