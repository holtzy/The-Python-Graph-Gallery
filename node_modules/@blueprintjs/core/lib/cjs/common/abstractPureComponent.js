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
exports.AbstractPureComponent = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("./utils");
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 * @deprecated componentWillReceiveProps is deprecated in React 16.9; use AbstractPureComponent2 instead
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var AbstractPureComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractPureComponent, _super);
    function AbstractPureComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        _this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    window.clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        if (!utils_1.isNodeEnv("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractPureComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!utils_1.isNodeEnv("production")) {
            this.validateProps(nextProps);
        }
    };
    AbstractPureComponent.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractPureComponent.prototype.setTimeout = function (callback, timeout) {
        var handle = window.setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return function () { return window.clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * Like propTypes, these runtime checks run only in development mode.
     */
    AbstractPureComponent.prototype.validateProps = function (_props) {
        // implement in subclass
    };
    return AbstractPureComponent;
}(React.PureComponent));
exports.AbstractPureComponent = AbstractPureComponent;
//# sourceMappingURL=abstractPureComponent.js.map