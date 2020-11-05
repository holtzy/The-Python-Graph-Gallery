"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _ElementChildren = require("./ElementChildren");

var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;

  _react.default.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = /*#__PURE__*/_react.default.createElement(ProgressBar, null);

    if (child.type === element.type) return;
    var childType = child.type;
    var childIdentifier = _react.default.isValidElement(child) ? childType.displayName || childType.name || childType : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });

  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar(_ref, ref) {
  var _classNames;

  var min = _ref.min,
      now = _ref.now,
      max = _ref.max,
      label = _ref.label,
      srOnly = _ref.srOnly,
      striped = _ref.striped,
      animated = _ref.animated,
      className = _ref.className,
      style = _ref.style,
      variant = _ref.variant,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    role: "progressbar",
    className: (0, _classnames.default)(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
    style: (0, _extends2.default)({
      width: getPercentage(now, min, max) + "%"
    }, style),
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max
  }), srOnly ? /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, label) : label);
}

var ProgressBar = _react.default.forwardRef(function (_ref2, ref) {
  var isChild = _ref2.isChild,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["isChild"]);
  props.bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(props.bsPrefix, 'progress');

  if (isChild) {
    return renderProgressBar(props, ref);
  }

  var min = props.min,
      now = props.now,
      max = props.max,
      label = props.label,
      srOnly = props.srOnly,
      striped = props.striped,
      animated = props.animated,
      bsPrefix = props.bsPrefix,
      variant = props.variant,
      className = props.className,
      children = props.children,
      wrapperProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, wrapperProps, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children ? (0, _ElementChildren.map)(children, function (child) {
    return (0, _react.cloneElement)(child, {
      isChild: true
    });
  }) : renderProgressBar({
    min: min,
    now: now,
    max: max,
    label: label,
    srOnly: srOnly,
    striped: striped,
    animated: animated,
    bsPrefix: bsPrefix,
    variant: variant
  }, ref));
});

ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = defaultProps;
var _default = ProgressBar;
exports.default = _default;
module.exports = exports["default"];