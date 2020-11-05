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
exports.KeyCombo = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var icon_1 = require("../icon/icon");
var hotkeyParser_1 = require("./hotkeyParser");
var KeyIcons = {
    alt: "key-option",
    cmd: "key-command",
    ctrl: "key-control",
    delete: "key-delete",
    down: "arrow-down",
    enter: "key-enter",
    left: "arrow-left",
    meta: "key-command",
    right: "arrow-right",
    shift: "key-shift",
    up: "arrow-up",
};
var KeyCombo = /** @class */ (function (_super) {
    tslib_1.__extends(KeyCombo, _super);
    function KeyCombo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderKey = function (key, index) {
            var icon = KeyIcons[key];
            var reactKey = "key-" + index;
            return icon == null ? (React.createElement("kbd", { className: common_1.Classes.KEY, key: reactKey }, key)) : (React.createElement("kbd", { className: classnames_1.default(common_1.Classes.KEY, common_1.Classes.MODIFIER_KEY), key: reactKey },
                React.createElement(icon_1.Icon, { icon: icon }),
                " ",
                key));
        };
        _this.renderMinimalKey = function (key, index) {
            var icon = KeyIcons[key];
            return icon == null ? key : React.createElement(icon_1.Icon, { icon: icon, key: "key-" + index });
        };
        return _this;
    }
    KeyCombo.prototype.render = function () {
        var _a = this.props, className = _a.className, combo = _a.combo, minimal = _a.minimal;
        var keys = hotkeyParser_1.normalizeKeyCombo(combo)
            .map(function (key) { return (key.length === 1 ? key.toUpperCase() : key); })
            .map(minimal ? this.renderMinimalKey : this.renderKey);
        return React.createElement("span", { className: classnames_1.default(common_1.Classes.KEY_COMBO, className) }, keys);
    };
    KeyCombo.displayName = common_1.DISPLAYNAME_PREFIX + ".KeyCombo";
    KeyCombo = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], KeyCombo);
    return KeyCombo;
}(common_1.AbstractPureComponent2));
exports.KeyCombo = KeyCombo;
//# sourceMappingURL=keyCombo.js.map