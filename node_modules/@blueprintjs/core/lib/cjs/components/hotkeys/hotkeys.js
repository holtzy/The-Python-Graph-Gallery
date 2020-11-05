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
exports.Hotkeys = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var errors_1 = require("../../common/errors");
var utils_1 = require("../../common/utils");
var html_1 = require("../html/html");
var hotkey_1 = require("./hotkey");
var Hotkeys = /** @class */ (function (_super) {
    tslib_1.__extends(Hotkeys, _super);
    function Hotkeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkeys.prototype.render = function () {
        if (!utils_1.isReactChildrenElementOrElements(this.props.children)) {
            return null;
        }
        var hotkeys = React.Children.map(this.props.children, function (child) { return child.props; });
        // sort by group label alphabetically, prioritize globals
        hotkeys.sort(function (a, b) {
            if (a.global === b.global && a.group && b.group) {
                return a.group.localeCompare(b.group);
            }
            return a.global ? -1 : 1;
        });
        var lastGroup;
        var elems = [];
        for (var _i = 0, hotkeys_1 = hotkeys; _i < hotkeys_1.length; _i++) {
            var hotkey = hotkeys_1[_i];
            var groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(React.createElement(html_1.H4, { key: "group-" + elems.length }, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(React.createElement(hotkey_1.Hotkey, tslib_1.__assign({ key: elems.length }, hotkey)));
        }
        var rootClasses = classnames_1.default(common_1.Classes.HOTKEY_COLUMN, this.props.className);
        return React.createElement("div", { className: rootClasses }, elems);
    };
    Hotkeys.prototype.validateProps = function (props) {
        if (!utils_1.isReactChildrenElementOrElements(props.children)) {
            return;
        }
        React.Children.forEach(props.children, function (child) {
            if (!utils_1.isElementOfType(child, hotkey_1.Hotkey)) {
                throw new Error(errors_1.HOTKEYS_HOTKEY_CHILDREN);
            }
        });
    };
    Hotkeys.displayName = common_1.DISPLAYNAME_PREFIX + ".Hotkeys";
    Hotkeys.defaultProps = {
        tabIndex: 0,
    };
    Hotkeys = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Hotkeys);
    return Hotkeys;
}(common_1.AbstractPureComponent2));
exports.Hotkeys = Hotkeys;
//# sourceMappingURL=hotkeys.js.map