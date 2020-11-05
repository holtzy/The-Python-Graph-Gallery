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
// HACKHACK: these components should go in separate files
/* eslint-disable max-classes-per-file */
import * as React from "react";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps } from "../../common/props";
import { isRefObject } from "../../common/refs";
import { AbstractButton } from "./abstractButton";
export class Button extends AbstractButton {
    constructor() {
        super(...arguments);
        // need to keep this ref so that we can access it in AbstractButton#handleKeyUp
        this.buttonRef = null;
        this.handleRef = isRefObject(this.props.elementRef)
            ? (this.buttonRef = this.props.elementRef)
            : (ref) => {
                this.buttonRef = ref;
                this.props.elementRef?.(ref);
            };
    }
    render() {
        return (React.createElement("button", Object.assign({ type: "button", ref: this.handleRef }, removeNonHTMLProps(this.props), this.getCommonButtonProps()), this.renderChildren()));
    }
}
Button.displayName = `${DISPLAYNAME_PREFIX}.Button`;
export class AnchorButton extends AbstractButton {
    constructor() {
        super(...arguments);
        // need to keep this ref so that we can access it in AbstractButton#handleKeyUp
        this.buttonRef = null;
        this.handleRef = isRefObject(this.props.elementRef)
            ? (this.buttonRef = this.props.elementRef)
            : (ref) => {
                this.buttonRef = ref;
                this.props.elementRef?.(ref);
            };
    }
    render() {
        const { href, tabIndex = 0 } = this.props;
        const commonProps = this.getCommonButtonProps();
        return (React.createElement("a", Object.assign({ role: "button", ref: this.handleRef }, removeNonHTMLProps(this.props), commonProps, { href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? -1 : tabIndex }), this.renderChildren()));
    }
}
AnchorButton.displayName = `${DISPLAYNAME_PREFIX}.AnchorButton`;
//# sourceMappingURL=buttons.js.map