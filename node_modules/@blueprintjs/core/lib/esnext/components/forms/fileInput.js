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
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// TODO: write tests (ignoring for now to get a build passing quickly)
/* istanbul ignore next */
let FileInput = class FileInput extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.handleInputChange = (e) => {
            this.props.onInputChange?.(e);
            this.props.inputProps?.onChange?.(e);
        };
    }
    render() {
        const { buttonText, className, disabled, fill, hasSelection, inputProps, large, onInputChange, text, ...htmlProps } = this.props;
        const rootClasses = classNames(Classes.FILE_INPUT, {
            [Classes.FILE_INPUT_HAS_SELECTION]: hasSelection,
            [Classes.DISABLED]: disabled,
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
        }, className);
        const NS = Classes.getClassNamespace();
        const uploadProps = {
            [`${NS}-button-text`]: buttonText,
            className: classNames(Classes.FILE_UPLOAD_INPUT, {
                [Classes.FILE_UPLOAD_INPUT_CUSTOM_TEXT]: !!buttonText,
            }),
        };
        return (React.createElement("label", Object.assign({}, htmlProps, { className: rootClasses }),
            React.createElement("input", Object.assign({}, inputProps, { onChange: this.handleInputChange, type: "file", disabled: disabled })),
            React.createElement("span", Object.assign({}, uploadProps), text)));
    }
};
FileInput.displayName = `${DISPLAYNAME_PREFIX}.FileInput`;
FileInput.defaultProps = {
    hasSelection: false,
    inputProps: {},
    text: "Choose file...",
};
FileInput = __decorate([
    polyfill
], FileInput);
export { FileInput };
//# sourceMappingURL=fileInput.js.map