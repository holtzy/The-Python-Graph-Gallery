"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _uncontrollable = require("uncontrollable");

var _ThemeProvider = require("./ThemeProvider");

var _AbstractNav = _interopRequireDefault(require("./AbstractNav"));

var _ListGroupItem = _interopRequireDefault(require("./ListGroupItem"));

var _excluded = ["className", "bsPrefix", "variant", "horizontal", "as"];
var defaultProps = {
  variant: undefined,
  horizontal: undefined
};

var ListGroup = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      className = _useUncontrolled.className,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      horizontal = _useUncontrolled.horizontal,
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, _excluded);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'list-group');
  var horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : "horizontal-" + horizontal;
  } else {
    horizontalVariant = null;
  }

  process.env.NODE_ENV !== "production" ? (0, _warning.default)(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return /*#__PURE__*/_react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    as: as,
    className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant, horizontalVariant && bsPrefix + "-" + horizontalVariant)
  }));
});

ListGroup.defaultProps = defaultProps;
ListGroup.displayName = 'ListGroup';
ListGroup.Item = _ListGroupItem.default;
var _default = ListGroup;
exports.default = _default;
module.exports = exports["default"];