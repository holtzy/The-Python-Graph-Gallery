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
import { __assign, __decorate, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var HTMLTable = /** @class */ (function (_super) {
    __extends(HTMLTable, _super);
    function HTMLTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTable.prototype.render = function () {
        var _a;
        // eslint-disable-next-line deprecation/deprecation
        var _b = this.props, bordered = _b.bordered, className = _b.className, condensed = _b.condensed, elementRef = _b.elementRef, interactive = _b.interactive, small = _b.small, striped = _b.striped, htmlProps = __rest(_b, ["bordered", "className", "condensed", "elementRef", "interactive", "small", "striped"]);
        var classes = classNames(Classes.HTML_TABLE, (_a = {},
            _a[Classes.HTML_TABLE_BORDERED] = bordered,
            _a[Classes.HTML_TABLE_CONDENSED] = condensed,
            _a[Classes.HTML_TABLE_STRIPED] = striped,
            _a[Classes.INTERACTIVE] = interactive,
            _a[Classes.SMALL] = small,
            _a), className);
        // eslint-disable-next-line @blueprintjs/html-components
        return React.createElement("table", __assign({}, htmlProps, { ref: elementRef, className: classes }));
    };
    HTMLTable = __decorate([
        polyfill
    ], HTMLTable);
    return HTMLTable;
}(AbstractPureComponent2));
export { HTMLTable };
//# sourceMappingURL=htmlTable.js.map