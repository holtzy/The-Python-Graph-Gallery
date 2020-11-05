"use strict";
/*
 * Copyright 2019 Palantir Technologies, Inc. All rights reserved.
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
exports.AbstractComponent2 = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("./utils");
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var AbstractComponent2 = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractComponent2, _super);
    function AbstractComponent2(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        _this.requestIds = [];
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
        /**
         * Clear all known animation frame requests.
         */
        _this.cancelAnimationFrames = function () {
            if (_this.requestIds.length > 0) {
                for (var _i = 0, _a = _this.requestIds; _i < _a.length; _i++) {
                    var requestId = _a[_i];
                    window.cancelAnimationFrame(requestId);
                }
                _this.requestIds = [];
            }
        };
        if (!utils_1.isNodeEnv("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractComponent2.prototype.componentDidUpdate = function (_prevProps, _prevState, _snapshot) {
        if (!utils_1.isNodeEnv("production")) {
            this.validateProps(this.props);
        }
    };
    AbstractComponent2.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
        this.cancelAnimationFrames();
    };
    /**
     * Request an animation frame and remember its ID.
     * All pending requests will be canceled when component unmounts.
     * @returns a "cancel" function that will cancel the request when invoked.
     */
    AbstractComponent2.prototype.requestAnimationFrame = function (callback) {
        var handle = window.requestAnimationFrame(callback);
        this.requestIds.push(handle);
        return function () { return window.cancelAnimationFrame(handle); };
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractComponent2.prototype.setTimeout = function (callback, timeout) {
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
    AbstractComponent2.prototype.validateProps = function (_props) {
        // implement in subclass
    };
    return AbstractComponent2;
}(React.Component));
exports.AbstractComponent2 = AbstractComponent2;
//# sourceMappingURL=abstractComponent2.js.map