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
import { __assign, __decorate, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, DISPLAYNAME_PREFIX, Utils, } from "../../common";
import { isReactNodeEmpty } from "../../common/utils";
import { Icon } from "../icon/icon";
import { Text } from "../text/text";
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
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
        var _b = this.props, active = _b.active, children = _b.children, className = _b.className, fill = _b.fill, icon = _b.icon, intent = _b.intent, interactive = _b.interactive, large = _b.large, minimal = _b.minimal, multiline = _b.multiline, onRemove = _b.onRemove, rightIcon = _b.rightIcon, round = _b.round, _c = _b.tabIndex, tabIndex = _c === void 0 ? 0 : _c, htmlTitle = _b.htmlTitle, elementRef = _b.elementRef, htmlProps = __rest(_b, ["active", "children", "className", "fill", "icon", "intent", "interactive", "large", "minimal", "multiline", "onRemove", "rightIcon", "round", "tabIndex", "htmlTitle", "elementRef"]);
        var isRemovable = Utils.isFunction(onRemove);
        var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_a = {},
            _a[Classes.ACTIVE] = active,
            _a[Classes.FILL] = fill,
            _a[Classes.INTERACTIVE] = interactive,
            _a[Classes.LARGE] = large,
            _a[Classes.MINIMAL] = minimal,
            _a[Classes.ROUND] = round,
            _a), className);
        var isLarge = large || tagClasses.indexOf(Classes.LARGE) >= 0;
        var removeButton = isRemovable ? (React.createElement("button", { type: "button", className: Classes.TAG_REMOVE, onClick: this.onRemoveClick, tabIndex: interactive ? tabIndex : undefined },
            React.createElement(Icon, { icon: "small-cross", iconSize: isLarge ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD }))) : null;
        return (React.createElement("span", __assign({}, htmlProps, { className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: elementRef }),
            React.createElement(Icon, { icon: icon }),
            !isReactNodeEmpty(children) && (React.createElement(Text, { className: Classes.FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
            React.createElement(Icon, { icon: rightIcon }),
            removeButton));
    };
    Tag.displayName = DISPLAYNAME_PREFIX + ".Tag";
    Tag = __decorate([
        polyfill
    ], Tag);
    return Tag;
}(AbstractPureComponent2));
export { Tag };
//# sourceMappingURL=tag.js.map