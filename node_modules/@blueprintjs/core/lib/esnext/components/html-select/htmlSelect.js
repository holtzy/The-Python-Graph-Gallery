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
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2 } from "../../common";
import { DISABLED, FILL, HTML_SELECT, LARGE, MINIMAL } from "../../common/classes";
import { Icon } from "../icon/icon";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
let HTMLSelect = class HTMLSelect extends AbstractPureComponent2 {
    render() {
        const { className, disabled, elementRef, fill, iconProps, large, minimal, options = [], ...htmlProps } = this.props;
        const classes = classNames(HTML_SELECT, {
            [DISABLED]: disabled,
            [FILL]: fill,
            [LARGE]: large,
            [MINIMAL]: minimal,
        }, className);
        const optionChildren = options.map(option => {
            const props = typeof option === "object" ? option : { value: option };
            return React.createElement("option", Object.assign({}, props, { key: props.value, children: props.label || props.value }));
        });
        return (React.createElement("div", { className: classes },
            React.createElement("select", Object.assign({ disabled: disabled, ref: elementRef }, htmlProps, { multiple: false }),
                optionChildren,
                htmlProps.children),
            React.createElement(Icon, Object.assign({ icon: "double-caret-vertical" }, iconProps))));
    }
};
HTMLSelect = __decorate([
    polyfill
], HTMLSelect);
export { HTMLSelect };
//# sourceMappingURL=htmlSelect.js.map