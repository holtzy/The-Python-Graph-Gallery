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
let Text = class Text extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        this.textRef = null;
    }
    componentDidMount() {
        this.update();
    }
    componentDidUpdate() {
        this.update();
    }
    render() {
        const classes = classNames({
            [Classes.TEXT_OVERFLOW_ELLIPSIS]: this.props.ellipsize,
        }, this.props.className);
        const { children, tagName, title } = this.props;
        return React.createElement(tagName, {
            className: classes,
            ref: (ref) => (this.textRef = ref),
            title: title ?? (this.state.isContentOverflowing ? this.state.textContent : undefined),
        }, children);
    }
    update() {
        if (this.textRef?.textContent == null) {
            return;
        }
        const newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    }
};
Text.displayName = `${DISPLAYNAME_PREFIX}.Text`;
Text.defaultProps = {
    ellipsize: false,
    tagName: "div",
};
Text = __decorate([
    polyfill
], Text);
export { Text };
//# sourceMappingURL=text.js.map