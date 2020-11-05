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
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Alignment, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
let NavbarGroup = class NavbarGroup extends AbstractPureComponent2 {
    render() {
        const { align, children, className, ...htmlProps } = this.props;
        const classes = classNames(Classes.NAVBAR_GROUP, Classes.alignmentClass(align), className);
        return (React.createElement("div", Object.assign({ className: classes }, htmlProps), children));
    }
};
NavbarGroup.displayName = `${DISPLAYNAME_PREFIX}.NavbarGroup`;
NavbarGroup.defaultProps = {
    align: Alignment.LEFT,
};
NavbarGroup = __decorate([
    polyfill
], NavbarGroup);
export { NavbarGroup };
//# sourceMappingURL=navbarGroup.js.map