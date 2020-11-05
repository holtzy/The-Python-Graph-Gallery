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
import { AbstractPureComponent2, Classes, getRef, isRefCallback, isRefObject, } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
let TextArea = class TextArea extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {};
        // keep our own ref so that we can measure and set the height of the component on first mount
        this.textareaRef = null;
        this.refHandlers = {
            textarea: isRefObject(this.props.inputRef)
                ? (this.textareaRef = this.props.inputRef)
                : (ref) => {
                    this.textareaRef = ref;
                    this.props.inputRef?.(ref);
                },
        };
        this.handleChange = (e) => {
            if (this.props.growVertically) {
                this.setState({
                    height: e.target.scrollHeight,
                });
            }
            if (this.props.onChange != null) {
                this.props.onChange(e);
            }
        };
    }
    componentDidMount() {
        if (this.props.growVertically && this.textareaRef !== null) {
            this.setState({
                height: getRef(this.textareaRef).scrollHeight,
            });
        }
    }
    componentDidUpdate(prevProps) {
        const { inputRef } = this.props;
        if (prevProps.inputRef !== inputRef) {
            if (isRefObject(inputRef)) {
                inputRef.current = this.textareaRef.current;
                this.textareaRef = inputRef;
            }
            else if (isRefCallback(inputRef)) {
                inputRef(this.textareaRef);
            }
        }
    }
    render() {
        const { className, fill, inputRef, intent, large, small, growVertically, ...htmlProps } = this.props;
        const rootClasses = classNames(Classes.INPUT, Classes.intentClass(intent), {
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
            [Classes.SMALL]: small,
        }, className);
        // add explicit height style while preserving user-supplied styles if they exist
        let { style = {} } = htmlProps;
        if (growVertically && this.state.height != null) {
            // this style object becomes non-extensible when mounted (at least in the enzyme renderer),
            // so we make a new one to add a property
            style = {
                ...style,
                height: `${this.state.height}px`,
            };
        }
        return (React.createElement("textarea", Object.assign({}, htmlProps, { className: rootClasses, onChange: this.handleChange, ref: this.refHandlers.textarea, style: style })));
    }
};
TextArea.displayName = `${DISPLAYNAME_PREFIX}.TextArea`;
TextArea = __decorate([
    polyfill
], TextArea);
export { TextArea };
//# sourceMappingURL=textArea.js.map