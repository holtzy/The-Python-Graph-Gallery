"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
// eslint-disable-next-line import/no-cycle
var popover_1 = require("../popover/popover");
var Tooltip = /** @class */ (function (_super) {
    tslib_1.__extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popover = null;
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, intent = _a.intent, popoverClassName = _a.popoverClassName, restProps = tslib_1.__rest(_a, ["children", "intent", "popoverClassName"]);
        var classes = classnames_1.default(common_1.Classes.TOOLTIP, common_1.Classes.intentClass(intent), popoverClassName);
        return (React.createElement(popover_1.Popover, tslib_1.__assign({ interactionKind: popover_1.PopoverInteractionKind.HOVER_TARGET_ONLY }, restProps, { autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, lazy: true, popoverClassName: classes, portalContainer: this.props.portalContainer, ref: function (ref) { return (_this.popover = ref); } }), children));
    };
    Tooltip.prototype.reposition = function () {
        if (this.popover != null) {
            this.popover.reposition();
        }
    };
    Tooltip.displayName = props_1.DISPLAYNAME_PREFIX + ".Tooltip";
    Tooltip.defaultProps = {
        hoverCloseDelay: 0,
        hoverOpenDelay: 100,
        transitionDuration: 100,
    };
    Tooltip = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Tooltip);
    return Tooltip;
}(common_1.AbstractPureComponent2));
exports.Tooltip = Tooltip;
//# sourceMappingURL=tooltip.js.map