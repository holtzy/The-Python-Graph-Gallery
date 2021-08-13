import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["children", "transition", "popperConfig"],
    _excluded2 = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"];
import React, { useRef } from 'react';
import classNames from 'classnames';
import BaseOverlay from 'react-overlays/Overlay';
import safeFindDOMNode from 'react-overlays/safeFindDOMNode';
import usePopperMarginModifiers from './usePopperMarginModifiers';
import Fade from './Fade';
var defaultProps = {
  transition: Fade,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(safeFindDOMNode(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef(safeFindDOMNode(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      outerProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var popperRef = useRef({});

  var _usePopperMarginModif = usePopperMarginModifiers(),
      ref = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var actualTransition = transition === true ? Fade : transition || null;
  return /*#__PURE__*/React.createElement(BaseOverlay, _extends({}, outerProps, {
    ref: ref,
    popperConfig: _extends({}, popperConfig, {
      modifiers: marginModifiers.concat(popperConfig.modifiers || [])
    }),
    transition: actualTransition
  }), function (_ref2) {
    var _state$modifiersData$;

    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        update = _ref2.update,
        _ = _ref2.forceUpdate,
        placement = _ref2.placement,
        state = _ref2.state,
        props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    wrapRefs(overlayProps, arrowProps);
    var popper = Object.assign(popperRef.current, {
      state: state,
      scheduleUpdate: update,
      placement: placement,
      outOfBoundaries: (state == null ? void 0 : (_state$modifiersData$ = state.modifiersData.hide) == null ? void 0 : _state$modifiersData$.isReferenceHidden) || false
    });
    if (typeof overlay === 'function') return overlay(_extends({}, props, overlayProps, {
      placement: placement,
      show: show
    }, !transition && show && {
      className: 'show'
    }, {
      popper: popper,
      arrowProps: arrowProps
    }));
    return /*#__PURE__*/React.cloneElement(overlay, _extends({}, props, overlayProps, {
      placement: placement,
      arrowProps: arrowProps,
      popper: popper,
      className: classNames(overlay.props.className, !transition && show && 'show'),
      style: _extends({}, overlay.props.style, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
export default Overlay;