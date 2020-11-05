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
exports.Hotkey = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var keyCombo_1 = require("./keyCombo");
var Hotkey = /** @class */ (function (_super) {
    tslib_1.__extends(Hotkey, _super);
    function Hotkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkey.prototype.render = function () {
        var _a = this.props, label = _a.label, className = _a.className, spreadableProps = tslib_1.__rest(_a, ["label", "className"]);
        var rootClasses = classnames_1.default(common_1.Classes.HOTKEY, className);
        return (React.createElement("div", { className: rootClasses },
            React.createElement("div", { className: common_1.Classes.HOTKEY_LABEL }, label),
            React.createElement(keyCombo_1.KeyCombo, tslib_1.__assign({}, spreadableProps))));
    };
    Hotkey.prototype.validateProps = function (props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    };
    Hotkey.displayName = common_1.DISPLAYNAME_PREFIX + ".Hotkey";
    Hotkey.defaultProps = {
        allowInInput: false,
        disabled: false,
        global: false,
        preventDefault: false,
        stopPropagation: false,
    };
    Hotkey = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Hotkey);
    return Hotkey;
}(common_1.AbstractPureComponent2));
exports.Hotkey = Hotkey;
//# sourceMappingURL=hotkey.js.map