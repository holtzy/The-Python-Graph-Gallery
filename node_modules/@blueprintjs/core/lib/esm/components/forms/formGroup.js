/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
var FormGroup = /** @class */ (function (_super) {
    __extends(FormGroup, _super);
    function FormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, contentClassName = _a.contentClassName, helperText = _a.helperText, label = _a.label, labelFor = _a.labelFor, labelInfo = _a.labelInfo, style = _a.style;
        return (React.createElement("div", { className: this.getClassName(), style: style },
            label && (React.createElement("label", { className: Classes.LABEL, htmlFor: labelFor },
                label,
                " ",
                React.createElement("span", { className: Classes.TEXT_MUTED }, labelInfo))),
            React.createElement("div", { className: classNames(Classes.FORM_CONTENT, contentClassName) },
                children,
                helperText && React.createElement("div", { className: Classes.FORM_HELPER_TEXT }, helperText))));
    };
    FormGroup.prototype.getClassName = function () {
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, inline = _b.inline, intent = _b.intent;
        return classNames(Classes.FORM_GROUP, Classes.intentClass(intent), (_a = {},
            _a[Classes.DISABLED] = disabled,
            _a[Classes.INLINE] = inline,
            _a), className);
    };
    FormGroup.displayName = DISPLAYNAME_PREFIX + ".FormGroup";
    FormGroup = __decorate([
        polyfill
    ], FormGroup);
    return FormGroup;
}(AbstractPureComponent2));
export { FormGroup };
//# sourceMappingURL=formGroup.js.map