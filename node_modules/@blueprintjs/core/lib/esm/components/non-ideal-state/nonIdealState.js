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
import { __decorate, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2 } from "../../common";
import * as Classes from "../../common/classes";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { ensureElement } from "../../common/utils";
import { H4 } from "../html/html";
import { Icon } from "../icon/icon";
var NonIdealState = /** @class */ (function (_super) {
    __extends(NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        var _a = this.props, action = _a.action, children = _a.children, className = _a.className, description = _a.description, title = _a.title;
        return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE, className) },
            this.maybeRenderVisual(),
            title && React.createElement(H4, null, title),
            description && ensureElement(description, "div"),
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
                React.createElement(Icon, { icon: icon, iconSize: Icon.SIZE_LARGE * 3 })));
        }
    };
    NonIdealState.displayName = DISPLAYNAME_PREFIX + ".NonIdealState";
    NonIdealState = __decorate([
        polyfill
    ], NonIdealState);
    return NonIdealState;
}(AbstractPureComponent2));
export { NonIdealState };
//# sourceMappingURL=nonIdealState.js.map