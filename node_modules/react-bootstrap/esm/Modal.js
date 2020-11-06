import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import addEventListener from 'dom-helpers/addEventListener';
import canUseDOM from 'dom-helpers/canUseDOM';
import ownerDocument from 'dom-helpers/ownerDocument';
import removeEventListener from 'dom-helpers/removeEventListener';
import getScrollbarSize from 'dom-helpers/scrollbarSize';
import useCallbackRef from '@restart/hooks/useCallbackRef';
import useEventCallback from '@restart/hooks/useEventCallback';
import useWillUnmount from '@restart/hooks/useWillUnmount';
import transitionEnd from 'dom-helpers/transitionEnd';
import React, { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import BaseModal from 'react-overlays/Modal';
import warning from 'warning';
import BootstrapModalManager from './BootstrapModalManager';
import Fade from './Fade';
import ModalBody from './ModalBody';
import ModalContext from './ModalContext';
import ModalDialog from './ModalDialog';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import { useBootstrapPrefix } from './ThemeProvider';
var manager;
var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/React.createElement(Fade, props);
}

function BackdropTransition(props) {
  return /*#__PURE__*/React.createElement(Fade, props);
}
/* eslint-enable no-use-before-define */


var Modal = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      style = _ref.style,
      dialogClassName = _ref.dialogClassName,
      contentClassName = _ref.contentClassName,
      children = _ref.children,
      Dialog = _ref.dialogAs,
      ariaLabelledby = _ref['aria-labelledby'],
      show = _ref.show,
      animation = _ref.animation,
      backdrop = _ref.backdrop,
      keyboard = _ref.keyboard,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      onShow = _ref.onShow,
      onHide = _ref.onHide,
      container = _ref.container,
      autoFocus = _ref.autoFocus,
      enforceFocus = _ref.enforceFocus,
      restoreFocus = _ref.restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onExited = _ref.onExited,
      backdropClassName = _ref.backdropClassName,
      propsManager = _ref.manager,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"]);

  var _useState = useState({}),
      modalStyle = _useState[0],
      setStyle = _useState[1];

  var _useState2 = useState(false),
      animateStaticModal = _useState2[0],
      setAnimateStaticModal = _useState2[1];

  var waitingForMouseUpRef = useRef(false);
  var ignoreBackdropClickRef = useRef(false);
  var removeStaticModalAnimationRef = useRef(null); // TODO: what's this type

  var _useCallbackRef = useCallbackRef(),
      modal = _useCallbackRef[0],
      setModalRef = _useCallbackRef[1];

  var handleHide = useEventCallback(onHide);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  useImperativeHandle(ref, function () {
    return {
      get _modal() {
        process.env.NODE_ENV !== "production" ? warning(false, 'Accessing `_modal` is not supported and will be removed in a future release') : void 0;
        return modal;
      }

    };
  }, [modal]);
  var modalContext = useMemo(function () {
    return {
      onHide: handleHide
    };
  }, [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    if (!manager) manager = new BootstrapModalManager();
    return manager;
  }

  function updateDialogStyle(node) {
    if (!canUseDOM) return;
    var containerIsOverflowing = getModalManager().isContainerOverflowing(modal);
    var modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? getScrollbarSize() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? getScrollbarSize() : undefined
    });
  }

  var handleWindowResize = useEventCallback(function () {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(function () {
    removeEventListener(window, 'resize', handleWindowResize);

    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  var handleDialogMouseDown = function handleDialogMouseDown() {
    waitingForMouseUpRef.current = true;
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  var handleStaticModalAnimation = function handleStaticModalAnimation() {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, function () {
      setAnimateStaticModal(false);
    });
  };

  var handleStaticBackdropClick = function handleStaticBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  var handleClick = function handleClick(e) {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide();
  };

  var handleEscapeKeyDown = function handleEscapeKeyDown(e) {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in react-overlays,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  var handleEnter = function handleEnter(node) {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (onEnter) onEnter.apply(void 0, [node].concat(args));
  };

  var handleExit = function handleExit(node) {
    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (onExit) onExit.apply(void 0, [node].concat(args));
  };

  var handleEntering = function handleEntering(node) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (onEntering) onEntering.apply(void 0, [node].concat(args)); // FIXME: This should work even when animation is disabled.

    addEventListener(window, 'resize', handleWindowResize);
  };

  var handleExited = function handleExited(node) {
    if (node) node.style.display = ''; // RHL removes it sometimes

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    if (onExited) onExited.apply(void 0, args); // FIXME: This should work even when animation is disabled.

    removeEventListener(window, 'resize', handleWindowResize);
  };

  var renderBackdrop = useCallback(function (backdropProps) {
    return /*#__PURE__*/React.createElement("div", _extends({}, backdropProps, {
      className: classNames(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
    }));
  }, [animation, backdropClassName, bsPrefix]);

  var baseModalStyle = _extends({}, style, {}, modalStyle); // Sets `display` always block when `animation` is false


  if (!animation) {
    baseModalStyle.display = 'block';
  }

  var renderDialog = function renderDialog(dialogProps) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "dialog"
    }, dialogProps, {
      style: baseModalStyle,
      className: classNames(className, bsPrefix, animateStaticModal && bsPrefix + "-static"),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-labelledby": ariaLabelledby
    }), /*#__PURE__*/React.createElement(Dialog, _extends({}, props, {
      role: "document",
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName
    }), children));
  };

  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: modalContext
  }, /*#__PURE__*/React.createElement(BaseModal, {
    show: show,
    ref: setModalRef,
    backdrop: backdrop,
    container: container,
    keyboard: true // Always set true - see handleEscapeKeyDown
    ,
    autoFocus: autoFocus,
    enforceFocus: enforceFocus,
    restoreFocus: restoreFocus,
    restoreFocusOptions: restoreFocusOptions,
    onEscapeKeyDown: handleEscapeKeyDown,
    onShow: onShow,
    onHide: onHide,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: onEntered,
    onExit: handleExit,
    onExiting: onExiting,
    onExited: handleExited,
    manager: getModalManager(),
    containerClassName: bsPrefix + "-open",
    transition: animation ? DialogTransition : undefined,
    backdropTransition: animation ? BackdropTransition : undefined,
    renderBackdrop: renderBackdrop,
    renderDialog: renderDialog
  }));
});
Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;
Modal.Dialog = ModalDialog;
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
export default Modal;