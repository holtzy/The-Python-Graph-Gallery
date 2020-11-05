"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeSensor = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var resize_observer_polyfill_1 = tslib_1.__importDefault(require("resize-observer-polyfill"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var ResizeSensor = /** @class */ (function (_super) {
    tslib_1.__extends(ResizeSensor, _super);
    function ResizeSensor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        _this.observer = new resize_observer_polyfill_1.default(function (entries) { var _a, _b; return (_b = (_a = _this.props).onResize) === null || _b === void 0 ? void 0 : _b.call(_a, entries); });
        return _this;
    }
    ResizeSensor.prototype.render = function () {
        // pass-through render of single child
        return React.Children.only(this.props.children);
    };
    ResizeSensor.prototype.componentDidMount = function () {
        this.observeElement();
    };
    ResizeSensor.prototype.componentDidUpdate = function (prevProps) {
        this.observeElement(this.props.observeParents !== prevProps.observeParents);
    };
    ResizeSensor.prototype.componentWillUnmount = function () {
        this.observer.disconnect();
    };
    /**
     * Observe the DOM element, if defined and different from the currently
     * observed element. Pass `force` argument to skip element checks and always
     * re-observe.
     */
    ResizeSensor.prototype.observeElement = function (force) {
        if (force === void 0) { force = false; }
        var element = this.getElement();
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
            var parent_1 = element.parentElement;
            while (parent_1 != null) {
                this.observer.observe(parent_1);
                parent_1 = parent_1.parentElement;
            }
        }
    };
    ResizeSensor.prototype.getElement = function () {
        try {
            // using findDOMNode for two reasons:
            // 1. cloning to insert a ref is unwieldy and not performant.
            // 2. ensure that we resolve to an actual DOM node (instead of any JSX ref instance).
            return react_dom_1.findDOMNode(this);
        }
        catch (_a) {
            // swallow error if findDOMNode is run on unmounted component.
            return null;
        }
    };
    ResizeSensor.displayName = props_1.DISPLAYNAME_PREFIX + ".ResizeSensor";
    ResizeSensor = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], ResizeSensor);
    return ResizeSensor;
}(common_1.AbstractPureComponent2));
exports.ResizeSensor = ResizeSensor;
//# sourceMappingURL=resizeSensor.js.map