/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// eslint-disable-next-line import/no-cycle
import { Popover, PopoverInteractionKind } from "../popover/popover";
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popover = null;
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, intent = _a.intent, popoverClassName = _a.popoverClassName, restProps = __rest(_a, ["children", "intent", "popoverClassName"]);
        var classes = classNames(Classes.TOOLTIP, Classes.intentClass(intent), popoverClassName);
        return (React.createElement(Popover, __assign({ interactionKind: PopoverInteractionKind.HOVER_TARGET_ONLY }, restProps, { autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, lazy: true, popoverClassName: classes, portalContainer: this.props.portalContainer, ref: function (ref) { return (_this.popover = ref); } }), children));
    };
    Tooltip.prototype.reposition = function () {
        if (this.popover != null) {
            this.popover.reposition();
        }
    };
    Tooltip.displayName = DISPLAYNAME_PREFIX + ".Tooltip";
    Tooltip.defaultProps = {
        hoverCloseDelay: 0,
        hoverOpenDelay: 100,
        transitionDuration: 100,
    };
    Tooltip = __decorate([
        polyfill
    ], Tooltip);
    return Tooltip;
}(AbstractPureComponent2));
export { Tooltip };
//# sourceMappingURL=tooltip.js.map