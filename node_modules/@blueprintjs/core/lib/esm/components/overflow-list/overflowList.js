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
import { __extends, __spreadArrays } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Boundary } from "../../common/boundary";
import * as Classes from "../../common/classes";
import { OVERFLOW_LIST_OBSERVE_PARENTS_CHANGED } from "../../common/errors";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { shallowCompareKeys } from "../../common/utils";
import { ResizeSensor } from "../resize-sensor/resizeSensor";
/** @internal - do not expose this type */
export var OverflowDirection;
(function (OverflowDirection) {
    OverflowDirection[OverflowDirection["NONE"] = 0] = "NONE";
    OverflowDirection[OverflowDirection["GROW"] = 1] = "GROW";
    OverflowDirection[OverflowDirection["SHRINK"] = 2] = "SHRINK";
})(OverflowDirection || (OverflowDirection = {}));
var OverflowList = /** @class */ (function (_super) {
    __extends(OverflowList, _super);
    function OverflowList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            direction: OverflowDirection.NONE,
            lastOverflowCount: 0,
            overflow: [],
            visible: _this.props.items,
        };
        /** A cache containing the widths of all elements being observed to detect growing/shrinking */
        _this.previousWidths = new Map();
        _this.spacer = null;
        _this.resize = function (entries) {
            // if any parent is growing, assume we have more room than before
            var growing = entries.some(function (entry) {
                var previousWidth = _this.previousWidths.get(entry.target) || 0;
                return entry.contentRect.width > previousWidth;
            });
            _this.repartition(growing);
            entries.forEach(function (entry) { return _this.previousWidths.set(entry.target, entry.contentRect.width); });
        };
        return _this;
    }
    OverflowList.ofType = function () {
        return OverflowList;
    };
    OverflowList.prototype.componentDidMount = function () {
        this.repartition(false);
    };
    OverflowList.prototype.shouldComponentUpdate = function (_nextProps, nextState) {
        // We want this component to always re-render, even when props haven't changed, so that
        // changes in the renderers' behavior can be reflected.
        // The following statement prevents re-rendering only in the case where the state changes
        // identity (i.e. setState was called), but the state is still the same when
        // shallow-compared to the previous state.
        return !(this.state !== nextState && shallowCompareKeys(this.state, nextState));
    };
    OverflowList.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b;
        if (prevProps.observeParents !== this.props.observeParents) {
            console.warn(OVERFLOW_LIST_OBSERVE_PARENTS_CHANGED);
        }
        if (prevProps.collapseFrom !== this.props.collapseFrom ||
            prevProps.items !== this.props.items ||
            prevProps.minVisibleItems !== this.props.minVisibleItems ||
            prevProps.overflowRenderer !== this.props.overflowRenderer ||
            prevProps.visibleItemRenderer !== this.props.visibleItemRenderer) {
            // reset visible state if the above props change.
            this.setState({
                direction: OverflowDirection.GROW,
                lastOverflowCount: 0,
                overflow: [],
                visible: this.props.items,
            });
        }
        if (!shallowCompareKeys(prevState, this.state)) {
            this.repartition(false);
        }
        var _c = this.state, direction = _c.direction, overflow = _c.overflow, lastOverflowCount = _c.lastOverflowCount;
        if (
        // if a resize operation has just completed (transition to NONE)
        direction === OverflowDirection.NONE &&
            direction !== prevState.direction &&
            overflow.length !== lastOverflowCount) {
            (_b = (_a = this.props).onOverflow) === null || _b === void 0 ? void 0 : _b.call(_a, overflow);
        }
    };
    OverflowList.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, collapseFrom = _a.collapseFrom, observeParents = _a.observeParents, style = _a.style, _b = _a.tagName, tagName = _b === void 0 ? "div" : _b, visibleItemRenderer = _a.visibleItemRenderer;
        var overflow = this.maybeRenderOverflow();
        var list = React.createElement(tagName, {
            className: classNames(Classes.OVERFLOW_LIST, className),
            style: style,
        }, collapseFrom === Boundary.START ? overflow : null, this.state.visible.map(visibleItemRenderer), collapseFrom === Boundary.END ? overflow : null, React.createElement("div", { className: Classes.OVERFLOW_LIST_SPACER, ref: function (ref) { return (_this.spacer = ref); } }));
        return (React.createElement(ResizeSensor, { onResize: this.resize, observeParents: observeParents }, list));
    };
    OverflowList.prototype.maybeRenderOverflow = function () {
        var overflow = this.state.overflow;
        if (overflow.length === 0) {
            return null;
        }
        return this.props.overflowRenderer(overflow);
    };
    OverflowList.prototype.repartition = function (growing) {
        var _this = this;
        if (this.spacer == null) {
            return;
        }
        if (growing) {
            this.setState(function (state) { return ({
                direction: OverflowDirection.GROW,
                // store last overflow if this is the beginning of a resize (for check in componentDidUpdate).
                lastOverflowCount: state.direction === OverflowDirection.NONE ? state.overflow.length : state.lastOverflowCount,
                overflow: [],
                visible: _this.props.items,
            }); });
        }
        else if (this.spacer.getBoundingClientRect().width < 0.9) {
            // spacer has flex-shrink and width 1px so if it's much smaller then we know to shrink
            this.setState(function (state) {
                if (state.visible.length <= _this.props.minVisibleItems) {
                    return null;
                }
                var collapseFromStart = _this.props.collapseFrom === Boundary.START;
                var visible = state.visible.slice();
                var next = collapseFromStart ? visible.shift() : visible.pop();
                if (next === undefined) {
                    return null;
                }
                var overflow = collapseFromStart ? __spreadArrays(state.overflow, [next]) : __spreadArrays([next], state.overflow);
                return {
                    // set SHRINK mode unless a GROW is already in progress.
                    // GROW shows all items then shrinks until it settles, so we
                    // preserve the fact that the original trigger was a GROW.
                    direction: state.direction === OverflowDirection.NONE ? OverflowDirection.SHRINK : state.direction,
                    overflow: overflow,
                    visible: visible,
                };
            });
        }
        else {
            // repartition complete!
            this.setState({ direction: OverflowDirection.NONE });
        }
    };
    OverflowList.displayName = DISPLAYNAME_PREFIX + ".OverflowList";
    OverflowList.defaultProps = {
        collapseFrom: Boundary.START,
        minVisibleItems: 0,
    };
    return OverflowList;
}(React.Component));
export { OverflowList };
//# sourceMappingURL=overflowList.js.map