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
import { AbstractPureComponent2, Classes } from "../../common";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
let HTMLTable = class HTMLTable extends AbstractPureComponent2 {
    render() {
        // eslint-disable-next-line deprecation/deprecation
        const { bordered, className, condensed, elementRef, interactive, small, striped, ...htmlProps } = this.props;
        const classes = classNames(Classes.HTML_TABLE, {
            [Classes.HTML_TABLE_BORDERED]: bordered,
            [Classes.HTML_TABLE_CONDENSED]: condensed,
            [Classes.HTML_TABLE_STRIPED]: striped,
            [Classes.INTERACTIVE]: interactive,
            [Classes.SMALL]: small,
        }, className);
        // eslint-disable-next-line @blueprintjs/html-components
        return React.createElement("table", Object.assign({}, htmlProps, { ref: elementRef, className: classes }));
    }
};
HTMLTable = __decorate([
    polyfill
], HTMLTable);
export { HTMLTable };
//# sourceMappingURL=htmlTable.js.map