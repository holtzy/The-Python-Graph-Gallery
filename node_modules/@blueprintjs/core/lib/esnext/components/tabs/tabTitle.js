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
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps } from "../../common/props";
let TabTitle = class TabTitle extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.handleClick = (e) => this.props.onClick(this.props.id, e);
    }
    render() {
        const { className, children, disabled, id, parentId, selected, title, ...htmlProps } = this.props;
        return (React.createElement("div", Object.assign({}, removeNonHTMLProps(htmlProps), { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: classNames(Classes.TAB, className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", tabIndex: disabled ? undefined : 0 }),
            title,
            children));
    }
};
TabTitle.displayName = `${DISPLAYNAME_PREFIX}.TabTitle`;
TabTitle = __decorate([
    polyfill
], TabTitle);
export { TabTitle };
export function generateTabPanelId(parentId, tabId) {
    return `${Classes.TAB_PANEL}_${parentId}_${tabId}`;
}
export function generateTabTitleId(parentId, tabId) {
    return `${Classes.TAB}-title_${parentId}_${tabId}`;
}
//# sourceMappingURL=tabTitle.js.map