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
import { DISPLAYNAME_PREFIX } from "../../common/props";
let Tab = class Tab extends AbstractPureComponent2 {
    // this component is never rendered directly; see Tabs#renderTabPanel()
    /* istanbul ignore next */
    render() {
        const { className, panel } = this.props;
        return (React.createElement("div", { className: classNames(Classes.TAB_PANEL, className), role: "tablist" }, panel));
    }
};
Tab.defaultProps = {
    disabled: false,
};
Tab.displayName = `${DISPLAYNAME_PREFIX}.Tab`;
Tab = __decorate([
    polyfill
], Tab);
export { Tab };
//# sourceMappingURL=tab.js.map