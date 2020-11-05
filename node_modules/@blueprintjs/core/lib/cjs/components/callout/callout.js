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
exports.Callout = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
var Callout = /** @class */ (function (_super) {
    tslib_1.__extends(Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, children = _b.children, icon = _b.icon, intent = _b.intent, title = _b.title, htmlProps = tslib_1.__rest(_b, ["className", "children", "icon", "intent", "title"]);
        var iconName = this.getIconName(icon, intent);
        var classes = classnames_1.default(common_1.Classes.CALLOUT, common_1.Classes.intentClass(intent), (_a = {}, _a[common_1.Classes.CALLOUT_ICON] = iconName != null, _a), className);
        return (React.createElement("div", tslib_1.__assign({ className: classes }, htmlProps),
            iconName && React.createElement(icon_1.Icon, { icon: iconName, iconSize: icon_1.Icon.SIZE_LARGE }),
            title && React.createElement(html_1.H4, null, title),
            children));
    };
    Callout.prototype.getIconName = function (icon, intent) {
        // 1. no icon
        if (icon === null) {
            return undefined;
        }
        // 2. defined iconName prop
        if (icon !== undefined) {
            return icon;
        }
        // 3. default intent icon
        switch (intent) {
            case common_1.Intent.DANGER:
                return "error";
            case common_1.Intent.PRIMARY:
                return "info-sign";
            case common_1.Intent.WARNING:
                return "warning-sign";
            case common_1.Intent.SUCCESS:
                return "tick";
            default:
                return undefined;
        }
    };
    Callout.displayName = common_1.DISPLAYNAME_PREFIX + ".Callout";
    Callout = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Callout);
    return Callout;
}(common_1.AbstractPureComponent2));
exports.Callout = Callout;
//# sourceMappingURL=callout.js.map