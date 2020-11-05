"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
exports.getRef = void 0;
var tslib_1 = require("tslib");
tslib_1.__exportStar(require("./compareUtils"), exports);
tslib_1.__exportStar(require("./domUtils"), exports);
tslib_1.__exportStar(require("./functionUtils"), exports);
tslib_1.__exportStar(require("./jsUtils"), exports);
tslib_1.__exportStar(require("./reactUtils"), exports);
tslib_1.__exportStar(require("./safeInvokeMember"), exports);
/**
 * Utils.getRef() was added to the public API in @blueprintjs/core@3.27.0,
 * but ref utils were refactored in the next version. We keep this additional
 * export around for backwards compatibility.
 * @see https://github.com/palantir/blueprint/pull/4140
 */
var refs_1 = require("../refs");
Object.defineProperty(exports, "getRef", { enumerable: true, get: function () { return refs_1.getRef; } });
//# sourceMappingURL=index.js.map