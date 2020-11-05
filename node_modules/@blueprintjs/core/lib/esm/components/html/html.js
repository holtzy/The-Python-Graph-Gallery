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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { BLOCKQUOTE, CODE, CODE_BLOCK, HEADING, LABEL, LIST } from "../../common/classes";
function htmlElement(tagName, tagClassName) {
    return function (props) {
        var className = props.className, elementRef = props.elementRef, htmlProps = __rest(props, ["className", "elementRef"]);
        return React.createElement(tagName, __assign(__assign({}, htmlProps), { className: classNames(tagClassName, className), ref: elementRef }));
    };
}
// the following components are linted by blueprint-html-components because
// they should rarely be used without the Blueprint classes/styles:
export var H1 = htmlElement("h1", HEADING);
export var H2 = htmlElement("h2", HEADING);
export var H3 = htmlElement("h3", HEADING);
export var H4 = htmlElement("h4", HEADING);
export var H5 = htmlElement("h5", HEADING);
export var H6 = htmlElement("h6", HEADING);
export var Blockquote = htmlElement("blockquote", BLOCKQUOTE);
export var Code = htmlElement("code", CODE);
export var Pre = htmlElement("pre", CODE_BLOCK);
export var Label = htmlElement("label", LABEL);
// these two are not linted by blueprint-html-components because there are valid
// uses of these elements without Blueprint styles:
export var OL = htmlElement("ol", LIST);
export var UL = htmlElement("ul", LIST);
//# sourceMappingURL=html.js.map