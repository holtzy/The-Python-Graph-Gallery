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
exports.generateTabTitleId = exports.generateTabPanelId = exports.TabTitle = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var TabTitle = /** @class */ (function (_super) {
    tslib_1.__extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected, title = _a.title, htmlProps = tslib_1.__rest(_a, ["className", "children", "disabled", "id", "parentId", "selected", "title"]);
        return (React.createElement("div", tslib_1.__assign({}, props_1.removeNonHTMLProps(htmlProps), { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: classnames_1.default(common_1.Classes.TAB, className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", tabIndex: disabled ? undefined : 0 }),
            title,
            children));
    };
    TabTitle.displayName = props_1.DISPLAYNAME_PREFIX + ".TabTitle";
    TabTitle = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], TabTitle);
    return TabTitle;
}(common_1.AbstractPureComponent2));
exports.TabTitle = TabTitle;
function generateTabPanelId(parentId, tabId) {
    return common_1.Classes.TAB_PANEL + "_" + parentId + "_" + tabId;
}
exports.generateTabPanelId = generateTabPanelId;
function generateTabTitleId(parentId, tabId) {
    return common_1.Classes.TAB + "-title_" + parentId + "_" + tabId;
}
exports.generateTabTitleId = generateTabTitleId;
//# sourceMappingURL=tabTitle.js.map