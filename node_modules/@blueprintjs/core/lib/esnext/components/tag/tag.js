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
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes, DISPLAYNAME_PREFIX, Utils, } from "../../common";
import { isReactNodeEmpty } from "../../common/utils";
import { Icon } from "../icon/icon";
import { Text } from "../text/text";
let Tag = class Tag extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.onRemoveClick = (e) => {
            this.props.onRemove?.(e, this.props);
        };
    }
    render() {
        const { active, children, className, fill, icon, intent, interactive, large, minimal, multiline, onRemove, rightIcon, round, tabIndex = 0, htmlTitle, elementRef, ...htmlProps } = this.props;
        const isRemovable = Utils.isFunction(onRemove);
        const tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), {
            [Classes.ACTIVE]: active,
            [Classes.FILL]: fill,
            [Classes.INTERACTIVE]: interactive,
            [Classes.LARGE]: large,
            [Classes.MINIMAL]: minimal,
            [Classes.ROUND]: round,
        }, className);
        const isLarge = large || tagClasses.indexOf(Classes.LARGE) >= 0;
        const removeButton = isRemovable ? (React.createElement("button", { type: "button", className: Classes.TAG_REMOVE, onClick: this.onRemoveClick, tabIndex: interactive ? tabIndex : undefined },
            React.createElement(Icon, { icon: "small-cross", iconSize: isLarge ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD }))) : null;
        return (React.createElement("span", Object.assign({}, htmlProps, { className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: elementRef }),
            React.createElement(Icon, { icon: icon }),
            !isReactNodeEmpty(children) && (React.createElement(Text, { className: Classes.FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
            React.createElement(Icon, { icon: rightIcon }),
            removeButton));
    }
};
Tag.displayName = `${DISPLAYNAME_PREFIX}.Tag`;
Tag = __decorate([
    polyfill
], Tag);
export { Tag };
//# sourceMappingURL=tag.js.map