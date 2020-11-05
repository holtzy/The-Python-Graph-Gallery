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
// Popper placement utils
// ======================
/** Converts a full placement to one of the four positions by stripping text after the `-`. */
export function getPosition(placement) {
    return placement.split("-")[0];
}
/** Returns true if position is left or right. */
export function isVerticalPosition(side) {
    return ["left", "right"].indexOf(side) !== -1;
}
/** Returns the opposite position. */
export function getOppositePosition(side) {
    switch (side) {
        case "top":
            return "bottom";
        case "left":
            return "right";
        case "bottom":
            return "top";
        default:
            return "left";
    }
}
/** Returns the CSS alignment keyword corresponding to given placement. */
export function getAlignment(placement) {
    var align = placement.split("-")[1];
    switch (align) {
        case "start":
            return "left";
        case "end":
            return "right";
        default:
            return "center";
    }
}
// Popper modifiers
// ================
/** Modifier helper function to compute popper transform-origin based on arrow position */
export function getTransformOrigin(data) {
    var position = getPosition(data.placement);
    if (data.arrowElement == null) {
        return isVerticalPosition(position)
            ? getOppositePosition(position) + " " + getAlignment(position)
            : getAlignment(position) + " " + getOppositePosition(position);
    }
    else {
        var arrowSizeShift = data.arrowElement.clientHeight / 2;
        var arrow = data.offsets.arrow;
        // can use keyword for dimension without the arrow, to ease computation burden.
        // move origin by half arrow's height to keep it centered.
        return isVerticalPosition(position)
            ? getOppositePosition(position) + " " + (arrow.top + arrowSizeShift) + "px"
            : arrow.left + arrowSizeShift + "px " + getOppositePosition(position);
    }
}
// additional space between arrow and edge of target
var ARROW_SPACING = 4;
/** Popper modifier that offsets popper and arrow so arrow points out of the correct side */
export var arrowOffsetModifier = function (data) {
    if (data.arrowElement == null) {
        return data;
    }
    // our arrows have equal width and height
    var arrowSize = data.arrowElement.clientWidth;
    // this logic borrowed from original Popper arrow modifier itself
    var position = getPosition(data.placement);
    var isVertical = isVerticalPosition(position);
    var len = isVertical ? "width" : "height";
    var offsetSide = isVertical ? "left" : "top";
    var arrowOffsetSize = Math.round(arrowSize / 2 / Math.sqrt(2));
    // offset popover by arrow size, offset arrow in the opposite direction
    if (position === "top" || position === "left") {
        // the "up & back" directions require negative popper offsets
        data.offsets.popper[offsetSide] -= arrowOffsetSize + ARROW_SPACING;
        // can only use left/top on arrow so gotta get clever with 100% + X
        data.offsets.arrow[offsetSide] = data.offsets.popper[len] - arrowSize + arrowOffsetSize;
    }
    else {
        data.offsets.popper[offsetSide] += arrowOffsetSize + ARROW_SPACING;
        data.offsets.arrow[offsetSide] = -arrowOffsetSize;
    }
    return data;
};
//# sourceMappingURL=popperUtils.js.map