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
import { __assign, __decorate, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import * as Errors from "../../common/errors";
import { getPositionIgnoreAngles, isPositionHorizontal } from "../../common/position";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Button } from "../button/buttons";
import { H4 } from "../html/html";
import { Icon } from "../icon/icon";
import { Overlay } from "../overlay/overlay";
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drawer.prototype.render = function () {
        var _a, _b;
        var _c;
        // eslint-disable-next-line deprecation/deprecation
        var _d = this.props, size = _d.size, style = _d.style, position = _d.position, vertical = _d.vertical;
        var realPosition = position ? getPositionIgnoreAngles(position) : undefined;
        var classes = classNames(Classes.DRAWER, (_a = {},
            _a[Classes.VERTICAL] = !realPosition && vertical,
            _a[(_c = Classes.positionClass(realPosition)) !== null && _c !== void 0 ? _c : ""] = true,
            _a), this.props.className);
        var styleProp = size == null
            ? style
            : __assign(__assign({}, style), (_b = {}, _b[(realPosition ? isPositionHorizontal(realPosition) : vertical) ? "height" : "width"] = size, _b));
        return (React.createElement(Overlay, __assign({}, this.props, { className: Classes.OVERLAY_CONTAINER }),
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
            if (props.position !== getPositionIgnoreAngles(props.position)) {
                console.warn(Errors.DRAWER_ANGLE_POSITIONS_ARE_CASTED);
            }
        }
    };
    Drawer.prototype.maybeRenderCloseButton = function () {
        // `isCloseButtonShown` can't be defaulted through default props because of props validation
        // so this check actually defaults it to true (fails only if directly set to false)
        if (this.props.isCloseButtonShown !== false) {
            return (React.createElement(Button, { "aria-label": "Close", className: Classes.DIALOG_CLOSE_BUTTON, icon: React.createElement(Icon, { icon: "small-cross", iconSize: Icon.SIZE_LARGE }), minimal: true, onClick: this.props.onClose }));
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
        return (React.createElement("div", { className: Classes.DRAWER_HEADER },
            React.createElement(Icon, { icon: icon, iconSize: Icon.SIZE_LARGE }),
            React.createElement(H4, null, title),
            this.maybeRenderCloseButton()));
    };
    Drawer.displayName = DISPLAYNAME_PREFIX + ".Drawer";
    Drawer.defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
        style: {},
        vertical: false,
    };
    Drawer.SIZE_SMALL = "360px";
    Drawer.SIZE_STANDARD = "50%";
    Drawer.SIZE_LARGE = "90%";
    Drawer = __decorate([
        polyfill
    ], Drawer);
    return Drawer;
}(AbstractPureComponent2));
export { Drawer };
//# sourceMappingURL=drawer.js.map