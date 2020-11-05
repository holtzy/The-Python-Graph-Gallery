import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _collapseStyles;

import classNames from 'classnames';
import css from 'dom-helpers/css';
import transitionEnd from 'dom-helpers/transitionEnd';
import React, { useMemo } from 'react';
import Transition, { ENTERED, ENTERING, EXITED, EXITING } from 'react-transition-group/Transition';
import createChainedFunction from './createChainedFunction';
import triggerBrowserReflow from './triggerBrowserReflow';
var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[EXITED] = 'collapse', _collapseStyles[EXITING] = 'collapsing', _collapseStyles[ENTERING] = 'collapsing', _collapseStyles[ENTERED] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
var Collapse = React.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      className = _ref.className,
      children = _ref.children,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 'height' : _ref$dimension,
      _ref$getDimensionValu = _ref.getDimensionValue,
      getDimensionValue = _ref$getDimensionValu === void 0 ? getDefaultDimensionValue : _ref$getDimensionValu,
      props = _objectWithoutPropertiesLoose(_ref, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"]);

  /* Compute dimension */
  var computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  var handleEnter = useMemo(function () {
    return createChainedFunction(function (elem) {
      elem.style[computedDimension] = '0';
    }, onEnter);
  }, [computedDimension, onEnter]);
  var handleEntering = useMemo(function () {
    return createChainedFunction(function (elem) {
      var scroll = "scroll" + computedDimension[0].toUpperCase() + computedDimension.slice(1);
      elem.style[computedDimension] = elem[scroll] + "px";
    }, onEntering);
  }, [computedDimension, onEntering]);
  var handleEntered = useMemo(function () {
    return createChainedFunction(function (elem) {
      elem.style[computedDimension] = null;
    }, onEntered);
  }, [computedDimension, onEntered]);
  /* -- Collapsing -- */

  var handleExit = useMemo(function () {
    return createChainedFunction(function (elem) {
      elem.style[computedDimension] = getDimensionValue(computedDimension, elem) + "px";
      triggerBrowserReflow(elem);
    }, onExit);
  }, [onExit, getDimensionValue, computedDimension]);
  var handleExiting = useMemo(function () {
    return createChainedFunction(function (elem) {
      elem.style[computedDimension] = null;
    }, onExiting);
  }, [computedDimension, onExiting]);
  return /*#__PURE__*/React.createElement(Transition // @ts-ignore
  , _extends({
    ref: ref,
    addEndListener: transitionEnd
  }, props, {
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting
  }), function (state, innerProps) {
    return React.cloneElement(children, _extends({}, innerProps, {
      className: classNames(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    }));
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps;
export default Collapse;