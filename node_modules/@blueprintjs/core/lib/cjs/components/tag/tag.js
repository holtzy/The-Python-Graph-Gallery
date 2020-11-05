"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var utils_1 = require("../../common/utils");
var icon_1 = require("../icon/icon");
var text_1 = require("../text/text");
var Tag = /** @class */ (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRemoveClick = function (e) {
            var _a, _b;
            (_b = (_a = _this.props).onRemove) === null || _b === void 0 ? void 0 : _b.call(_a, e, _this.props);
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _a;
        var _b = this.props, active = _b.active, children = _b.children, className = _b.className, fill = _b.fill, icon = _b.icon, intent = _b.intent, interactive = _b.interactive, large = _b.large, minimal = _b.minimal, multiline = _b.multiline, onRemove = _b.onRemove, rightIcon = _b.rightIcon, round = _b.round, _c = _b.tabIndex, tabIndex = _c === void 0 ? 0 : _c, htmlTitle = _b.htmlTitle, elementRef = _b.elementRef, htmlProps = tslib_1.__rest(_b, ["active", "children", "className", "fill", "icon", "intent", "interactive", "large", "minimal", "multiline", "onRemove", "rightIcon", "round", "tabIndex", "htmlTitle", "elementRef"]);
        var isRemovable = common_1.Utils.isFunction(onRemove);
        var tagClasses = classnames_1.default(common_1.Classes.TAG, common_1.Classes.intentClass(intent), (_a = {},
            _a[common_1.Classes.ACTIVE] = active,
            _a[common_1.Classes.FILL] = fill,
            _a[common_1.Classes.INTERACTIVE] = interactive,
            _a[common_1.Classes.LARGE] = large,
            _a[common_1.Classes.MINIMAL] = minimal,
            _a[common_1.Classes.ROUND] = round,
            _a), className);
        var isLarge = large || tagClasses.indexOf(common_1.Classes.LARGE) >= 0;
        var removeButton = isRemovable ? (React.createElement("button", { type: "button", className: common_1.Classes.TAG_REMOVE, onClick: this.onRemoveClick, tabIndex: interactive ? tabIndex : undefined },
            React.createElement(icon_1.Icon, { icon: "small-cross", iconSize: isLarge ? icon_1.Icon.SIZE_LARGE : icon_1.Icon.SIZE_STANDARD }))) : null;
        return (React.createElement("span", tslib_1.__assign({}, htmlProps, { className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: elementRef }),
            React.createElement(icon_1.Icon, { icon: icon }),
            !utils_1.isReactNodeEmpty(children) && (React.createElement(text_1.Text, { className: common_1.Classes.FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
            React.createElement(icon_1.Icon, { icon: rightIcon }),
            removeButton));
    };
    Tag.displayName = common_1.DISPLAYNAME_PREFIX + ".Tag";
    Tag = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Tag);
    return Tag;
}(common_1.AbstractPureComponent2));
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map