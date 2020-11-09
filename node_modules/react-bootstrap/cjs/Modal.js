"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _addEventListener = _interopRequireDefault(require("dom-helpers/addEventListener"));

var _canUseDOM = _interopRequireDefault(require("dom-helpers/canUseDOM"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _removeEventListener = _interopRequireDefault(require("dom-helpers/removeEventListener"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/scrollbarSize"));

var _useCallbackRef2 = _interopRequireDefault(require("@restart/hooks/useCallbackRef"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _useWillUnmount = _interopRequireDefault(require("@restart/hooks/useWillUnmount"));

var _transitionEnd = _interopRequireDefault(require("dom-helpers/transitionEnd"));

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("react-overlays/Modal"));

var _warning = _interopRequireDefault(require("warning"));

var _BootstrapModalManager = _interopRequireDefault(require("./BootstrapModalManager"));

var _Fade = _interopRequireDefault(require("./Fade"));

var _ModalBody = _interopRequireDefault(require("./ModalBody"));

var _ModalContext = _interopRequireDefault(require("./ModalContext"));

var _ModalDialog = _interopRequireDefault(require("./ModalDialog"));

var _ModalFooter = _interopRequireDefault(require("./ModalFooter"));

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _ModalTitle = _interopRequireDefault(require("./ModalTitle"));

var _ThemeProvider = require("./ThemeProvider");

var manager;
var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog.default
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_Fade.default, props);
}

function BackdropTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_Fade.default, props);
}
/* eslint-enable no-use-before-define */


var Modal = _react.default.forwardRef(function (_ref, ref) {
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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"]);

  var _useState = (0, _react.useState)({}),
      modalStyle = _useState[0],
      setStyle = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      animateStaticModal = _useState2[0],
      setAnimateStaticModal = _useState2[1];

  var waitingForMouseUpRef = (0, _react.useRef)(false);
  var ignoreBackdropClickRef = (0, _react.useRef)(false);
  var removeStaticModalAnimationRef = (0, _react.useRef)(null); // TODO: what's this type

  var _useCallbackRef = (0, _useCallbackRef2.default)(),
      modal = _useCallbackRef[0],
      setModalRef = _useCallbackRef[1];

  var handleHide = (0, _useEventCallback.default)(onHide);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      get _modal() {
        process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, 'Accessing `_modal` is not supported and will be removed in a future release') : void 0;
        return modal;
      }

    };
  }, [modal]);
  var modalContext = (0, _react.useMemo)(function () {
    return {
      onHide: handleHide
    };
  }, [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    if (!manager) manager = new _BootstrapModalManager.default();
    return manager;
  }

  function updateDialogStyle(node) {
    if (!_canUseDOM.default) return;
    var containerIsOverflowing = getModalManager().isContainerOverflowing(modal);
    var modalIsOverflowing = node.scrollHeight > (0, _ownerDocument.default)(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined
    });
  }

  var handleWindowResize = (0, _useEventCallback.default)(function () {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  (0, _useWillUnmount.default)(function () {
    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);

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
    removeStaticModalAnimationRef.current = (0, _transitionEnd.default)(modal.dialog, function () {
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

    (0, _addEventListener.default)(window, 'resize', handleWindowResize);
  };

  var handleExited = function handleExited(node) {
    if (node) node.style.display = ''; // RHL removes it sometimes

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    if (onExited) onExited.apply(void 0, args); // FIXME: This should work even when animation is disabled.

    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);
  };

  var renderBackdrop = (0, _react.useCallback)(function (backdropProps) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, backdropProps, {
      className: (0, _classnames.default)(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
    }));
  }, [animation, backdropClassName, bsPrefix]);
  var baseModalStyle = (0, _extends2.default)({}, style, {}, modalStyle); // Sets `display` always block when `animation` is false

  if (!animation) {
    baseModalStyle.display = 'block';
  }

  var renderDialog = function renderDialog(dialogProps) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      role: "dialog"
    }, dialogProps, {
      style: baseModalStyle,
      className: (0, _classnames.default)(className, bsPrefix, animateStaticModal && bsPrefix + "-static"),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-labelledby": ariaLabelledby
    }), /*#__PURE__*/_react.default.createElement(Dialog, (0, _extends2.default)({}, props, {
      role: "document",
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName
    }), children));
  };

  return /*#__PURE__*/_react.default.createElement(_ModalContext.default.Provider, {
    value: modalContext
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
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
Modal.Body = _ModalBody.default;
Modal.Header = _ModalHeader.default;
Modal.Title = _ModalTitle.default;
Modal.Footer = _ModalFooter.default;
Modal.Dialog = _ModalDialog.default;
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
var _default = Modal;
exports.default = _default;
module.exports = exports["default"];