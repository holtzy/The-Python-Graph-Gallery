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
import { __assign, __decorate, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// TODO: write tests (ignoring for now to get a build passing quickly)
/* istanbul ignore next */
var FileInput = /** @class */ (function (_super) {
    __extends(FileInput, _super);
    function FileInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInputChange = function (e) {
            var _a, _b, _c, _d;
            (_b = (_a = _this.props).onInputChange) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            (_d = (_c = _this.props.inputProps) === null || _c === void 0 ? void 0 : _c.onChange) === null || _d === void 0 ? void 0 : _d.call(_c, e);
        };
        return _this;
    }
    FileInput.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, buttonText = _d.buttonText, className = _d.className, disabled = _d.disabled, fill = _d.fill, hasSelection = _d.hasSelection, inputProps = _d.inputProps, large = _d.large, onInputChange = _d.onInputChange, text = _d.text, htmlProps = __rest(_d, ["buttonText", "className", "disabled", "fill", "hasSelection", "inputProps", "large", "onInputChange", "text"]);
        var rootClasses = classNames(Classes.FILE_INPUT, (_a = {},
            _a[Classes.FILE_INPUT_HAS_SELECTION] = hasSelection,
            _a[Classes.DISABLED] = disabled,
            _a[Classes.FILL] = fill,
            _a[Classes.LARGE] = large,
            _a), className);
        var NS = Classes.getClassNamespace();
        var uploadProps = (_b = {},
            _b[NS + "-button-text"] = buttonText,
            _b.className = classNames(Classes.FILE_UPLOAD_INPUT, (_c = {},
                _c[Classes.FILE_UPLOAD_INPUT_CUSTOM_TEXT] = !!buttonText,
                _c)),
            _b);
        return (React.createElement("label", __assign({}, htmlProps, { className: rootClasses }),
            React.createElement("input", __assign({}, inputProps, { onChange: this.handleInputChange, type: "file", disabled: disabled })),
            React.createElement("span", __assign({}, uploadProps), text)));
    };
    FileInput.displayName = DISPLAYNAME_PREFIX + ".FileInput";
    FileInput.defaultProps = {
        hasSelection: false,
        inputProps: {},
        text: "Choose file...",
    };
    FileInput = __decorate([
        polyfill
    ], FileInput);
    return FileInput;
}(AbstractPureComponent2));
export { FileInput };
//# sourceMappingURL=fileInput.js.map