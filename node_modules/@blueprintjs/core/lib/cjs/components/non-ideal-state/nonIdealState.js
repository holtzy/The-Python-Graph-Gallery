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
exports.NonIdealState = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var Classes = tslib_1.__importStar(require("../../common/classes"));
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
var NonIdealState = /** @class */ (function (_super) {
    tslib_1.__extends(NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        var _a = this.props, action = _a.action, children = _a.children, className = _a.className, description = _a.description, title = _a.title;
        return (React.createElement("div", { className: classnames_1.default(Classes.NON_IDEAL_STATE, className) },
            this.maybeRenderVisual(),
            title && React.createElement(html_1.H4, null, title),
            description && utils_1.ensureElement(description, "div"),
            action,
            children));
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var icon = this.props.icon;
        if (icon == null) {
            return null;
        }
        else {
            return (React.createElement("div", { className: Classes.NON_IDEAL_STATE_VISUAL },
                React.createElement(icon_1.Icon, { icon: icon, iconSize: icon_1.Icon.SIZE_LARGE * 3 })));
        }
    };
    NonIdealState.displayName = props_1.DISPLAYNAME_PREFIX + ".NonIdealState";
    NonIdealState = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], NonIdealState);
    return NonIdealState;
}(common_1.AbstractPureComponent2));
exports.NonIdealState = NonIdealState;
//# sourceMappingURL=nonIdealState.js.map