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
import * as React from "react";
import { isNodeEnv } from "./utils";
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 * @deprecated componentWillReceiveProps is deprecated in React 16.9; use AbstractComponent2 instead
 */
export class AbstractComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        this.clearTimeouts = () => {
            if (this.timeoutIds.length > 0) {
                for (const timeoutId of this.timeoutIds) {
                    window.clearTimeout(timeoutId);
                }
                this.timeoutIds = [];
            }
        };
        if (!isNodeEnv("production")) {
            this.validateProps(this.props);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!isNodeEnv("production")) {
            this.validateProps(nextProps);
        }
    }
    componentWillUnmount() {
        this.clearTimeouts();
    }
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    setTimeout(callback, timeout) {
        const handle = window.setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return () => window.clearTimeout(handle);
    }
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * Like propTypes, these runtime checks run only in development mode.
     */
    validateProps(_) {
        // implement in subclass
    }
}
//# sourceMappingURL=abstractComponent.js.map