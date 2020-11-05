"use strict";
/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
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
exports.setHotkeysDialogProps = exports.hideHotkeysDialog = exports.parseKeyCombo = exports.getKeyComboString = exports.getKeyCombo = exports.comboMatches = exports.HotkeysTarget = exports.KeyCombo = exports.Hotkey = void 0;
var tslib_1 = require("tslib");
tslib_1.__exportStar(require("./hotkeysTypes"), exports);
tslib_1.__exportStar(require("./hotkeys"), exports);
var hotkey_1 = require("./hotkey");
Object.defineProperty(exports, "Hotkey", { enumerable: true, get: function () { return hotkey_1.Hotkey; } });
var keyCombo_1 = require("./keyCombo");
Object.defineProperty(exports, "KeyCombo", { enumerable: true, get: function () { return keyCombo_1.KeyCombo; } });
// eslint-disable-next-line import/no-cycle
var hotkeysTarget_1 = require("./hotkeysTarget");
Object.defineProperty(exports, "HotkeysTarget", { enumerable: true, get: function () { return hotkeysTarget_1.HotkeysTarget; } });
var hotkeyParser_1 = require("./hotkeyParser");
Object.defineProperty(exports, "comboMatches", { enumerable: true, get: function () { return hotkeyParser_1.comboMatches; } });
Object.defineProperty(exports, "getKeyCombo", { enumerable: true, get: function () { return hotkeyParser_1.getKeyCombo; } });
Object.defineProperty(exports, "getKeyComboString", { enumerable: true, get: function () { return hotkeyParser_1.getKeyComboString; } });
Object.defineProperty(exports, "parseKeyCombo", { enumerable: true, get: function () { return hotkeyParser_1.parseKeyCombo; } });
// eslint-disable-next-line import/no-cycle
var hotkeysDialog_1 = require("./hotkeysDialog");
Object.defineProperty(exports, "hideHotkeysDialog", { enumerable: true, get: function () { return hotkeysDialog_1.hideHotkeysDialog; } });
Object.defineProperty(exports, "setHotkeysDialogProps", { enumerable: true, get: function () { return hotkeysDialog_1.setHotkeysDialogProps; } });
//# sourceMappingURL=index.js.map