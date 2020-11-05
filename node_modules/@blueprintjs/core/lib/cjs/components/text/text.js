"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
exports.Text = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        _this.textRef = null;
        return _this;
    }
    Text.prototype.componentDidMount = function () {
        this.update();
    };
    Text.prototype.componentDidUpdate = function () {
        this.update();
    };
    Text.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = classnames_1.default((_a = {},
            _a[common_1.Classes.TEXT_OVERFLOW_ELLIPSIS] = this.props.ellipsize,
            _a), this.props.className);
        var _b = this.props, children = _b.children, tagName = _b.tagName, title = _b.title;
        return React.createElement(tagName, {
            className: classes,
            ref: function (ref) { return (_this.textRef = ref); },
            title: title !== null && title !== void 0 ? title : (this.state.isContentOverflowing ? this.state.textContent : undefined),
        }, children);
    };
    Text.prototype.update = function () {
        var _a;
        if (((_a = this.textRef) === null || _a === void 0 ? void 0 : _a.textContent) == null) {
            return;
        }
        var newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    };
    Text.displayName = props_1.DISPLAYNAME_PREFIX + ".Text";
    Text.defaultProps = {
        ellipsize: false,
        tagName: "div",
    };
    Text = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Text);
    return Text;
}(common_1.AbstractPureComponent2));
exports.Text = Text;
//# sourceMappingURL=text.js.map