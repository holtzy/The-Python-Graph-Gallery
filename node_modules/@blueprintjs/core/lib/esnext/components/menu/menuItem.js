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
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, Position } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Icon } from "../icon/icon";
import { Popover, PopoverInteractionKind } from "../popover/popover";
import { Text } from "../text/text";
// eslint-disable-next-line import/no-cycle
import { Menu } from "./menu";
let MenuItem = class MenuItem extends AbstractPureComponent2 {
    render() {
        const { active, className, children, disabled, icon, intent, labelClassName, labelElement, multiline, popoverProps, shouldDismissPopover, text, textClassName, tagName = "a", htmlTitle, ...htmlProps } = this.props;
        const hasSubmenu = children != null;
        const intentClass = Classes.intentClass(intent);
        const anchorClasses = classNames(Classes.MENU_ITEM, intentClass, {
            [Classes.ACTIVE]: active,
            [Classes.INTENT_PRIMARY]: active && intentClass == null,
            [Classes.DISABLED]: disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            [Classes.POPOVER_DISMISS]: shouldDismissPopover && !disabled && !hasSubmenu,
        }, className);
        const target = React.createElement(tagName, {
            ...htmlProps,
            ...(disabled ? DISABLED_PROPS : {}),
            className: anchorClasses,
        }, React.createElement(Icon, { icon: icon }), React.createElement(Text, { className: classNames(Classes.FILL, textClassName), ellipsize: !multiline, title: htmlTitle }, text), this.maybeRenderLabel(labelElement), hasSubmenu ? React.createElement(Icon, { icon: "caret-right" }) : undefined);
        const liClasses = classNames({ [Classes.MENU_SUBMENU]: hasSubmenu });
        return React.createElement("li", { className: liClasses }, this.maybeRenderPopover(target, children));
    }
    maybeRenderLabel(labelElement) {
        const { label, labelClassName } = this.props;
        if (label == null && labelElement == null) {
            return null;
        }
        return (React.createElement("span", { className: classNames(Classes.MENU_ITEM_LABEL, labelClassName) },
            label,
            labelElement));
    }
    maybeRenderPopover(target, children) {
        if (children == null) {
            return target;
        }
        const { disabled, popoverProps } = this.props;
        return (React.createElement(Popover, Object.assign({ autoFocus: false, captureDismiss: false, disabled: disabled, enforceFocus: false, hoverCloseDelay: 0, interactionKind: PopoverInteractionKind.HOVER, modifiers: SUBMENU_POPOVER_MODIFIERS, position: Position.RIGHT_TOP, usePortal: false }, popoverProps, { content: React.createElement(Menu, null, children), minimal: true, popoverClassName: classNames(Classes.MENU_SUBMENU, popoverProps?.popoverClassName), target: target })));
    }
};
MenuItem.defaultProps = {
    disabled: false,
    multiline: false,
    popoverProps: {},
    shouldDismissPopover: true,
    text: "",
};
MenuItem.displayName = `${DISPLAYNAME_PREFIX}.MenuItem`;
MenuItem = __decorate([
    polyfill
], MenuItem);
export { MenuItem };
const SUBMENU_POPOVER_MODIFIERS = {
    // 20px padding - scrollbar width + a bit
    flip: { boundariesElement: "viewport", padding: 20 },
    // shift popover up 5px so MenuItems align
    offset: { offset: -5 },
    preventOverflow: { boundariesElement: "viewport", padding: 20 },
};
// props to ignore when disabled
const DISABLED_PROPS = {
    href: undefined,
    onClick: undefined,
    onMouseDown: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    tabIndex: -1,
};
//# sourceMappingURL=menuItem.js.map