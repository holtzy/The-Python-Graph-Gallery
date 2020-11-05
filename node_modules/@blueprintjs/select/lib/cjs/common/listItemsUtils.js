"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveItem = exports.isCreateNewItem = exports.getCreateNewItem = void 0;
/** Returns an instance of a "Create Item" object. */
function getCreateNewItem() {
    return { __blueprintCreateNewItemBrand: "blueprint-create-new-item" };
}
exports.getCreateNewItem = getCreateNewItem;
/**
 * Type guard returning `true` if the provided item (e.g. the current
 * `activeItem`) is a "Create Item" option.
 */
function isCreateNewItem(item) {
    if (item == null) {
        return false;
    }
    // see if the provided item exactly matches the `ICreateNewItem` object,
    // with no superfluous keys.
    var keys = Object.keys(item);
    if (keys.length !== 1 || keys[0] !== "__blueprintCreateNewItemBrand") {
        return false;
    }
    return item.__blueprintCreateNewItemBrand === "blueprint-create-new-item";
}
exports.isCreateNewItem = isCreateNewItem;
/**
 * Returns the type of the the current active item. This will be a no-op unless
 * the `activeItem` is `undefined` or a "Create Item" option, in which case
 * `null` will be returned instead.
 */
function getActiveItem(activeItem) {
    return activeItem == null || isCreateNewItem(activeItem) ? null : activeItem;
}
exports.getActiveItem = getActiveItem;
//# sourceMappingURL=listItemsUtils.js.map