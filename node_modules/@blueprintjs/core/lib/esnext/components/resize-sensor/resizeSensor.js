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
import { __decorate } from "tslib";
import * as React from "react";
import { findDOMNode } from "react-dom";
import { polyfill } from "react-lifecycles-compat";
import ResizeObserver from "resize-observer-polyfill";
import { AbstractPureComponent2 } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
let ResizeSensor = class ResizeSensor extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.element = null;
        this.observer = new ResizeObserver(entries => this.props.onResize?.(entries));
    }
    render() {
        // pass-through render of single child
        return React.Children.only(this.props.children);
    }
    componentDidMount() {
        this.observeElement();
    }
    componentDidUpdate(prevProps) {
        this.observeElement(this.props.observeParents !== prevProps.observeParents);
    }
    componentWillUnmount() {
        this.observer.disconnect();
    }
    /**
     * Observe the DOM element, if defined and different from the currently
     * observed element. Pass `force` argument to skip element checks and always
     * re-observe.
     */
    observeElement(force = false) {
        const element = this.getElement();
        if (!(element instanceof Element)) {
            // stop everything if not defined
            this.observer.disconnect();
            return;
        }
        if (element === this.element && !force) {
            // quit if given same element -- nothing to update (unless forced)
            return;
        }
        else {
            // clear observer list if new element
            this.observer.disconnect();
            // remember element reference for next time
            this.element = element;
        }
        // observer callback is invoked immediately when observing new elements
        this.observer.observe(element);
        if (this.props.observeParents) {
            let parent = element.parentElement;
            while (parent != null) {
                this.observer.observe(parent);
                parent = parent.parentElement;
            }
        }
    }
    getElement() {
        try {
            // using findDOMNode for two reasons:
            // 1. cloning to insert a ref is unwieldy and not performant.
            // 2. ensure that we resolve to an actual DOM node (instead of any JSX ref instance).
            return findDOMNode(this);
        }
        catch {
            // swallow error if findDOMNode is run on unmounted component.
            return null;
        }
    }
};
ResizeSensor.displayName = `${DISPLAYNAME_PREFIX}.ResizeSensor`;
ResizeSensor = __decorate([
    polyfill
], ResizeSensor);
export { ResizeSensor };
//# sourceMappingURL=resizeSensor.js.map