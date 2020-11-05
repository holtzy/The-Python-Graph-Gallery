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
var Overlay_1;
import { __decorate } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { findDOMNode } from "react-dom";
import { AbstractPureComponent2, Classes, Keys } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { isFunction } from "../../common/utils";
import { Portal } from "../portal/portal";
// HACKHACK: https://github.com/palantir/blueprint/issues/4342
let Overlay = Overlay_1 = class Overlay extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            hasEverOpened: this.props.isOpen,
        };
        // an HTMLElement that contains the backdrop and any children, to query for focus target
        this.containerElement = null;
        this.refHandlers = {
            container: (ref) => (this.containerElement = findDOMNode(ref)),
        };
        this.maybeRenderChild = (child) => {
            if (isFunction(child)) {
                child = child();
            }
            if (child == null) {
                return null;
            }
            // add a special class to each child element that will automatically set the appropriate
            // CSS position mode under the hood. also, make the container focusable so we can
            // trap focus inside it (via `enforceFocus`).
            const decoratedChild = typeof child === "object" ? (React.cloneElement(child, {
                className: classNames(child.props.className, Classes.OVERLAY_CONTENT),
                tabIndex: 0,
            })) : (React.createElement("span", { className: Classes.OVERLAY_CONTENT }, child));
            const { onOpening, onOpened, onClosing, onClosed, transitionDuration, transitionName } = this.props;
            // a breaking change in react-transition-group types requires us to be explicit about the type overload here,
            // using a technique similar to Select.ofType() in @blueprintjs/select
            const CSSTransitionImplicit = CSSTransition;
            return (React.createElement(CSSTransitionImplicit, { classNames: transitionName, onEntering: onOpening, onEntered: onOpened, onExiting: onClosing, onExited: onClosed, timeout: transitionDuration, addEndListener: this.handleTransitionAddEnd }, decoratedChild));
        };
        this.handleBackdropMouseDown = (e) => {
            const { backdropProps, canOutsideClickClose, enforceFocus, onClose } = this.props;
            if (canOutsideClickClose) {
                onClose?.(e);
            }
            if (enforceFocus) {
                // make sure document.activeElement is updated before bringing the focus back
                this.bringFocusInsideOverlay();
            }
            backdropProps?.onMouseDown?.(e);
        };
        this.handleDocumentClick = (e) => {
            const { canOutsideClickClose, isOpen, onClose } = this.props;
            // get the actually target even if we are in an open mode Shadow DOM
            const eventTarget = (e.composed ? e.composedPath()[0] : e.target);
            const stackIndex = Overlay_1.openStack.indexOf(this);
            const isClickInThisOverlayOrDescendant = Overlay_1.openStack
                .slice(stackIndex)
                .some(({ containerElement: elem }) => {
                // `elem` is the container of backdrop & content, so clicking on that container
                // should not count as being "inside" the overlay.
                return elem && elem.contains(eventTarget) && !elem.isSameNode(eventTarget);
            });
            if (isOpen && canOutsideClickClose && !isClickInThisOverlayOrDescendant) {
                // casting to any because this is a native event
                onClose?.(e);
            }
        };
        this.handleDocumentFocus = (e) => {
            // get the actually target even if we are in an open mode Shadow DOM
            const eventTarget = e.composed ? e.composedPath()[0] : e.target;
            if (this.props.enforceFocus &&
                this.containerElement != null &&
                eventTarget instanceof Node &&
                !this.containerElement.contains(eventTarget)) {
                // prevent default focus behavior (sometimes auto-scrolls the page)
                e.preventDefault();
                e.stopImmediatePropagation();
                this.bringFocusInsideOverlay();
            }
        };
        this.handleKeyDown = (e) => {
            const { canEscapeKeyClose, onClose } = this.props;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable-next-line deprecation/deprecation */
            if (e.which === Keys.ESCAPE && canEscapeKeyClose) {
                onClose?.(e);
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                e.preventDefault();
            }
        };
        this.handleTransitionAddEnd = () => {
            // no-op
        };
    }
    static getDerivedStateFromProps({ isOpen: hasEverOpened }) {
        if (hasEverOpened) {
            return { hasEverOpened };
        }
        return null;
    }
    render() {
        // oh snap! no reason to render anything at all if we're being truly lazy
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        const { children, className, usePortal, isOpen } = this.props;
        // TransitionGroup types require single array of children; does not support nested arrays.
        // So we must collapse backdrop and children into one array, and every item must be wrapped in a
        // Transition element (no ReactText allowed).
        const childrenWithTransitions = isOpen ? React.Children.map(children, this.maybeRenderChild) ?? [] : [];
        const maybeBackdrop = this.maybeRenderBackdrop();
        if (maybeBackdrop !== null) {
            childrenWithTransitions.unshift(maybeBackdrop);
        }
        const containerClasses = classNames(Classes.OVERLAY, {
            [Classes.OVERLAY_OPEN]: isOpen,
            [Classes.OVERLAY_INLINE]: !usePortal,
        }, className);
        const transitionGroup = (React.createElement(TransitionGroup, { appear: true, className: containerClasses, component: "div", onKeyDown: this.handleKeyDown, ref: this.refHandlers.container }, childrenWithTransitions));
        if (usePortal) {
            return (React.createElement(Portal, { className: this.props.portalClassName, container: this.props.portalContainer }, transitionGroup));
        }
        else {
            return transitionGroup;
        }
    }
    componentDidMount() {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    }
    componentWillUnmount() {
        this.overlayWillClose();
    }
    /**
     * @public for testing
     * @internal
     */
    bringFocusInsideOverlay() {
        // always delay focus manipulation to just before repaint to prevent scroll jumping
        return this.requestAnimationFrame(() => {
            // container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            if (this.containerElement == null || document.activeElement == null || !this.props.isOpen) {
                return;
            }
            const isFocusOutsideModal = !this.containerElement.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // element marked autofocus has higher priority than the other clowns
                const autofocusElement = this.containerElement.querySelector("[autofocus]");
                const wrapperElement = this.containerElement.querySelector("[tabindex]");
                if (autofocusElement != null) {
                    autofocusElement.focus();
                }
                else if (wrapperElement != null) {
                    wrapperElement.focus();
                }
            }
        });
    }
    maybeRenderBackdrop() {
        const { backdropClassName, backdropProps, hasBackdrop, isOpen, transitionDuration, transitionName, } = this.props;
        if (hasBackdrop && isOpen) {
            return (React.createElement(CSSTransition, { classNames: transitionName, key: "__backdrop", timeout: transitionDuration, addEndListener: this.handleTransitionAddEnd },
                React.createElement("div", Object.assign({}, backdropProps, { className: classNames(Classes.OVERLAY_BACKDROP, backdropClassName, backdropProps?.className), onMouseDown: this.handleBackdropMouseDown, tabIndex: this.props.canOutsideClickClose ? 0 : undefined }))));
        }
        else {
            return null;
        }
    }
    overlayWillClose() {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
        const { openStack } = Overlay_1;
        const stackIndex = openStack.indexOf(this);
        if (stackIndex !== -1) {
            openStack.splice(stackIndex, 1);
            if (openStack.length > 0) {
                const lastOpenedOverlay = Overlay_1.getLastOpened();
                if (lastOpenedOverlay.props.enforceFocus) {
                    document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
                }
            }
            if (openStack.filter(o => o.props.usePortal && o.props.hasBackdrop).length === 0) {
                document.body.classList.remove(Classes.OVERLAY_OPEN);
            }
        }
    }
    overlayWillOpen() {
        const { openStack } = Overlay_1;
        if (openStack.length > 0) {
            document.removeEventListener("focus", Overlay_1.getLastOpened().handleDocumentFocus, /* useCapture */ true);
        }
        openStack.push(this);
        if (this.props.autoFocus) {
            this.bringFocusInsideOverlay();
        }
        if (this.props.enforceFocus) {
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
        if (this.props.hasBackdrop && this.props.usePortal) {
            // add a class to the body to prevent scrolling of content below the overlay
            document.body.classList.add(Classes.OVERLAY_OPEN);
        }
    }
};
Overlay.displayName = `${DISPLAYNAME_PREFIX}.Overlay`;
Overlay.defaultProps = {
    autoFocus: true,
    backdropProps: {},
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    hasBackdrop: true,
    isOpen: false,
    lazy: true,
    transitionDuration: 300,
    transitionName: Classes.OVERLAY,
    usePortal: true,
};
Overlay.openStack = [];
Overlay.getLastOpened = () => Overlay_1.openStack[Overlay_1.openStack.length - 1];
Overlay = Overlay_1 = __decorate([
    polyfill
], Overlay);
export { Overlay };
//# sourceMappingURL=overlay.js.map