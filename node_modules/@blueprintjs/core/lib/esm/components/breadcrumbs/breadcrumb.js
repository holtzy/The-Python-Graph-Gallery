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
import classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
import { Icon } from "../icon/icon";
export var Breadcrumb = function (breadcrumbProps) {
    var _a;
    var classes = classNames(Classes.BREADCRUMB, (_a = {},
        _a[Classes.BREADCRUMB_CURRENT] = breadcrumbProps.current,
        _a[Classes.DISABLED] = breadcrumbProps.disabled,
        _a), breadcrumbProps.className);
    var icon = breadcrumbProps.icon != null ? React.createElement(Icon, { icon: breadcrumbProps.icon }) : undefined;
    if (breadcrumbProps.href == null && breadcrumbProps.onClick == null) {
        return (React.createElement("span", { className: classes },
            icon,
            breadcrumbProps.text,
            breadcrumbProps.children));
    }
    return (React.createElement("a", { className: classes, href: breadcrumbProps.href, onClick: breadcrumbProps.disabled ? undefined : breadcrumbProps.onClick, tabIndex: breadcrumbProps.disabled ? undefined : 0, target: breadcrumbProps.target },
        icon,
        breadcrumbProps.text,
        breadcrumbProps.children));
};
//# sourceMappingURL=breadcrumb.js.map