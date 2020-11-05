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
import { __decorate, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { clamp } from "../../common/utils";
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.animate, animate = _c === void 0 ? true : _c, className = _b.className, intent = _b.intent, _d = _b.stripes, stripes = _d === void 0 ? true : _d, value = _b.value;
        var classes = classNames(Classes.PROGRESS_BAR, Classes.intentClass(intent), (_a = {}, _a[Classes.PROGRESS_NO_ANIMATION] = !animate, _a[Classes.PROGRESS_NO_STRIPES] = !stripes, _a), className);
        // don't set width if value is null (rely on default CSS value)
        var width = value == null ? undefined : 100 * clamp(value, 0, 1) + "%";
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: Classes.PROGRESS_METER, style: { width: width } })));
    };
    ProgressBar.displayName = DISPLAYNAME_PREFIX + ".ProgressBar";
    ProgressBar = __decorate([
        polyfill
    ], ProgressBar);
    return ProgressBar;
}(AbstractPureComponent2));
export { ProgressBar };
//# sourceMappingURL=progressBar.js.map