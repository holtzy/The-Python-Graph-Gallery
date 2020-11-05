"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTable = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var common_1 = require("../../common");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var HTMLTable = /** @class */ (function (_super) {
    tslib_1.__extends(HTMLTable, _super);
    function HTMLTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTable.prototype.render = function () {
        var _a;
        // eslint-disable-next-line deprecation/deprecation
        var _b = this.props, bordered = _b.bordered, className = _b.className, condensed = _b.condensed, elementRef = _b.elementRef, interactive = _b.interactive, small = _b.small, striped = _b.striped, htmlProps = tslib_1.__rest(_b, ["bordered", "className", "condensed", "elementRef", "interactive", "small", "striped"]);
        var classes = classnames_1.default(common_1.Classes.HTML_TABLE, (_a = {},
            _a[common_1.Classes.HTML_TABLE_BORDERED] = bordered,
            _a[common_1.Classes.HTML_TABLE_CONDENSED] = condensed,
            _a[common_1.Classes.HTML_TABLE_STRIPED] = striped,
            _a[common_1.Classes.INTERACTIVE] = interactive,
            _a[common_1.Classes.SMALL] = small,
            _a), className);
        // eslint-disable-next-line @blueprintjs/html-components
        return React.createElement("table", tslib_1.__assign({}, htmlProps, { ref: elementRef, className: classes }));
    };
    HTMLTable = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], HTMLTable);
    return HTMLTable;
}(common_1.AbstractPureComponent2));
exports.HTMLTable = HTMLTable;
//# sourceMappingURL=htmlTable.js.map