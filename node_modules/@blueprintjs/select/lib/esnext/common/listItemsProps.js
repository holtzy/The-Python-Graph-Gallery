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
import { Utils } from "@blueprintjs/core";
/**
 * Utility function for executing the {@link IListItemsProps#itemsEqual} prop to test
 * for equality between two items.
 * @return `true` if the two items are equivalent according to `itemsEqualProp`.
 */
export function executeItemsEqual(itemsEqualProp, itemA, itemB) {
    // Use strict equality if:
    // A) Default equality check is necessary because itemsEqualProp is undefined.
    // OR
    // B) Either item is null/undefined. Note that null represents "no item", while
    //    undefined represents an uncontrolled prop. This strict equality check ensures
    //    nothing will ever be considered equivalent to an uncontrolled prop.
    if (itemsEqualProp === undefined || itemA == null || itemB == null) {
        return itemA === itemB;
    }
    if (Utils.isFunction(itemsEqualProp)) {
        // itemsEqualProp is an equality comparator function, so use it
        return itemsEqualProp(itemA, itemB);
    }
    else {
        // itemsEqualProp is a property name, so strictly compare the values of the property.
        return itemA[itemsEqualProp] === itemB[itemsEqualProp];
    }
}
//# sourceMappingURL=listItemsProps.js.map