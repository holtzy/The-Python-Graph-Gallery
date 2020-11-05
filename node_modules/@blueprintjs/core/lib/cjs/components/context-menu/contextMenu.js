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
exports.isOpen = exports.hide = exports.show = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var popover_1 = require("../popover/popover");
var POPPER_MODIFIERS = {
    preventOverflow: { boundariesElement: "viewport" },
};
var TRANSITION_DURATION = 100;
/* istanbul ignore next */
var ContextMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isDarkTheme: false,
            isOpen: false,
        };
        _this.cancelContextMenu = function (e) { return e.preventDefault(); };
        _this.handleBackdropContextMenu = function (e) {
            // React function to remove from the event pool, useful when using a event within a callback
            e.persist();
            e.preventDefault();
            // wait for backdrop to disappear so we can find the "real" element at event coordinates.
            // timeout duration is equivalent to transition duration so we know it's animated out.
            _this.setTimeout(function () {
                // retrigger context menu event at the element beneath the backdrop.
                // if it has a `contextmenu` event handler then it'll be invoked.
                // if it doesn't, no native menu will show (at least on OSX) :(
                var newTarget = document.elementFromPoint(e.clientX, e.clientY);
                var view = e.view, newEventInit = tslib_1.__rest(e, ["view"]);
                newTarget === null || newTarget === void 0 ? void 0 : newTarget.dispatchEvent(new MouseEvent("contextmenu", newEventInit));
            }, TRANSITION_DURATION);
        };
        _this.handlePopoverInteraction = function (nextOpenState) {
            if (!nextOpenState) {
                // delay the actual hiding till the event queue clears
                // to avoid flicker of opening twice
                _this.requestAnimationFrame(function () { return _this.hide(); });
            }
        };
        return _this;
    }
    ContextMenu.prototype.render = function () {
        var _a;
        // prevent right-clicking in a context menu
        var content = React.createElement("div", { onContextMenu: this.cancelContextMenu }, this.state.menu);
        var popoverClassName = classnames_1.default((_a = {}, _a[common_1.Classes.DARK] = this.state.isDarkTheme, _a));
        // HACKHACK: workaround until we have access to Popper#scheduleUpdate().
        // https://github.com/palantir/blueprint/issues/692
        // Generate key based on offset so a new Popover instance is created
        // when offset changes, to force recomputing position.
        var key = this.state.offset === undefined ? "" : this.state.offset.left + "x" + this.state.offset.top;
        // wrap the popover in a positioned div to make sure it is properly
        // offset on the screen.
        return (React.createElement("div", { className: common_1.Classes.CONTEXT_MENU_POPOVER_TARGET, style: this.state.offset },
            React.createElement(popover_1.Popover, tslib_1.__assign({}, this.props, { backdropProps: { onContextMenu: this.handleBackdropContextMenu }, content: content, enforceFocus: false, key: key, hasBackdrop: true, isOpen: this.state.isOpen, minimal: true, modifiers: POPPER_MODIFIERS, onInteraction: this.handlePopoverInteraction, position: common_1.Position.RIGHT_TOP, popoverClassName: popoverClassName, target: React.createElement("div", null), transitionDuration: TRANSITION_DURATION }))));
    };
    ContextMenu.prototype.show = function (menu, offset, onClose, isDarkTheme) {
        if (isDarkTheme === void 0) { isDarkTheme = false; }
        this.setState({ isOpen: true, menu: menu, offset: offset, onClose: onClose, isDarkTheme: isDarkTheme });
    };
    ContextMenu.prototype.hide = function () {
        var _a, _b;
        (_b = (_a = this.state).onClose) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.setState({ isOpen: false, onClose: undefined });
    };
    ContextMenu = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], ContextMenu);
    return ContextMenu;
}(common_1.AbstractPureComponent2));
var contextMenuElement;
var contextMenu;
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 */
function show(menu, offset, onClose, isDarkTheme) {
    if (contextMenuElement === undefined) {
        contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(common_1.Classes.CONTEXT_MENU);
        document.body.appendChild(contextMenuElement);
        contextMenu = ReactDOM.render(React.createElement(ContextMenu, { onClosed: remove }), contextMenuElement);
    }
    contextMenu.show(menu, offset, onClose, isDarkTheme);
}
exports.show = show;
/** Hide the open context menu. */
function hide() {
    contextMenu === null || contextMenu === void 0 ? void 0 : contextMenu.hide();
}
exports.hide = hide;
/** Return whether a context menu is currently open. */
function isOpen() {
    return contextMenu != null && contextMenu.state.isOpen;
}
exports.isOpen = isOpen;
function remove() {
    if (contextMenuElement != null) {
        ReactDOM.unmountComponentAtNode(contextMenuElement);
        contextMenuElement.remove();
        contextMenuElement = undefined;
        contextMenu = undefined;
    }
}
//# sourceMappingURL=contextMenu.js.map