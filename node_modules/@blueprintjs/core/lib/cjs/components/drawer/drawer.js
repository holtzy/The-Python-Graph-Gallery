"use strict";
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
exports.Drawer = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var Errors = tslib_1.__importStar(require("../../common/errors"));
var position_1 = require("../../common/position");
var props_1 = require("../../common/props");
var buttons_1 = require("../button/buttons");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
var overlay_1 = require("../overlay/overlay");
var Drawer = /** @class */ (function (_super) {
    tslib_1.__extends(Drawer, _super);
    function Drawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drawer.prototype.render = function () {
        var _a, _b;
        var _c;
        // eslint-disable-next-line deprecation/deprecation
        var _d = this.props, size = _d.size, style = _d.style, position = _d.position, vertical = _d.vertical;
        var realPosition = position ? position_1.getPositionIgnoreAngles(position) : undefined;
        var classes = classnames_1.default(common_1.Classes.DRAWER, (_a = {},
            _a[common_1.Classes.VERTICAL] = !realPosition && vertical,
            _a[(_c = common_1.Classes.positionClass(realPosition)) !== null && _c !== void 0 ? _c : ""] = true,
            _a), this.props.className);
        var styleProp = size == null
            ? style
            : tslib_1.__assign(tslib_1.__assign({}, style), (_b = {}, _b[(realPosition ? position_1.isPositionHorizontal(realPosition) : vertical) ? "height" : "width"] = size, _b));
        return (React.createElement(overlay_1.Overlay, tslib_1.__assign({}, this.props, { className: common_1.Classes.OVERLAY_CONTAINER }),
            React.createElement("div", { className: classes, style: styleProp },
                this.maybeRenderHeader(),
                this.props.children)));
    };
    Drawer.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.icon != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
        if (props.position != null) {
            // eslint-disable-next-line deprecation/deprecation
            if (props.vertical) {
                console.warn(Errors.DRAWER_VERTICAL_IS_IGNORED);
            }
            if (props.position !== position_1.getPositionIgnoreAngles(props.position)) {
                console.warn(Errors.DRAWER_ANGLE_POSITIONS_ARE_CASTED);
            }
        }
    };
    Drawer.prototype.maybeRenderCloseButton = function () {
        // `isCloseButtonShown` can't be defaulted through default props because of props validation
        // so this check actually defaults it to true (fails only if directly set to false)
        if (this.props.isCloseButtonShown !== false) {
            return (React.createElement(buttons_1.Button, { "aria-label": "Close", className: common_1.Classes.DIALOG_CLOSE_BUTTON, icon: React.createElement(icon_1.Icon, { icon: "small-cross", iconSize: icon_1.Icon.SIZE_LARGE }), minimal: true, onClick: this.props.onClose }));
        }
        else {
            return null;
        }
    };
    Drawer.prototype.maybeRenderHeader = function () {
        var _a = this.props, icon = _a.icon, title = _a.title;
        if (title == null) {
            return null;
        }
        return (React.createElement("div", { className: common_1.Classes.DRAWER_HEADER },
            React.createElement(icon_1.Icon, { icon: icon, iconSize: icon_1.Icon.SIZE_LARGE }),
            React.createElement(html_1.H4, null, title),
            this.maybeRenderCloseButton()));
    };
    Drawer.displayName = props_1.DISPLAYNAME_PREFIX + ".Drawer";
    Drawer.defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
        style: {},
        vertical: false,
    };
    Drawer.SIZE_SMALL = "360px";
    Drawer.SIZE_STANDARD = "50%";
    Drawer.SIZE_LARGE = "90%";
    Drawer = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], Drawer);
    return Drawer;
}(common_1.AbstractPureComponent2));
exports.Drawer = Drawer;
//# sourceMappingURL=drawer.js.map