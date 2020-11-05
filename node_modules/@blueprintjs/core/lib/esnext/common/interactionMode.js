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
const TAB_KEY_CODE = 9;
/* istanbul ignore next */
/**
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 */
export class InteractionModeEngine {
    constructor(container, className) {
        this.container = container;
        this.className = className;
        this.isRunning = false;
        this.handleKeyDown = (e) => {
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            // eslint-disable-next-line deprecation/deprecation
            if (e.which === TAB_KEY_CODE) {
                this.reset();
                this.container.addEventListener("mousedown", this.handleMouseDown);
            }
        };
        this.handleMouseDown = () => {
            this.reset();
            this.container.classList.add(this.className);
            // HACKHACK: see https://github.com/palantir/blueprint/issues/4342
            this.container.addEventListener("keydown", this.handleKeyDown);
        };
    }
    /** Returns whether the engine is currently running. */
    isActive() {
        return this.isRunning;
    }
    /** Enable behavior which applies the given className when in mouse mode. */
    start() {
        this.container.addEventListener("mousedown", this.handleMouseDown);
        this.isRunning = true;
    }
    /** Disable interaction mode behavior and remove className from container. */
    stop() {
        this.reset();
        this.isRunning = false;
    }
    reset() {
        this.container.classList.remove(this.className);
        // HACKHACK: see https://github.com/palantir/blueprint/issues/4342
        this.container.removeEventListener("keydown", this.handleKeyDown);
        this.container.removeEventListener("mousedown", this.handleMouseDown);
    }
}
//# sourceMappingURL=interactionMode.js.map