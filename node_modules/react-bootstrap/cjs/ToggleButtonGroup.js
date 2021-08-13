"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _invariant = _interopRequireDefault(require("invariant"));

var _uncontrollable = require("uncontrollable");

var _createChainedFunction = _interopRequireDefault(require("./createChainedFunction"));

var _ElementChildren = require("./ElementChildren");

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));

var _excluded = ["children", "type", "name", "value", "onChange"];
var defaultProps = {
  type: 'radio',
  vertical: false
};

var ToggleButtonGroup = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    value: 'onChange'
  }),
      children = _useUncontrolled.children,
      type = _useUncontrolled.type,
      name = _useUncontrolled.name,
      value = _useUncontrolled.value,
      onChange = _useUncontrolled.onChange,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, _excluded);

  var getValues = function getValues() {
    return value == null ? [] : [].concat(value);
  };

  var handleToggle = function handleToggle(inputVal, event) {
    if (!onChange) {
      return;
    }

    var values = getValues();
    var isActive = values.indexOf(inputVal) !== -1;

    if (type === 'radio') {
      if (!isActive && onChange) onChange(inputVal, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== inputVal;
      }), event);
    } else {
      onChange([].concat(values, [inputVal]), event);
    }
  };

  !(type !== 'radio' || !!name) ? process.env.NODE_ENV !== "production" ? (0, _invariant.default)(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : invariant(false) : void 0;
  return /*#__PURE__*/_react.default.createElement(_ButtonGroup.default, (0, _extends2.default)({}, controlledProps, {
    ref: ref,
    toggle: true
  }), (0, _ElementChildren.map)(children, function (child) {
    var values = getValues();
    var _child$props = child.props,
        childVal = _child$props.value,
        childOnChange = _child$props.onChange;

    var handler = function handler(e) {
      return handleToggle(childVal, e);
    };

    return /*#__PURE__*/_react.default.cloneElement(child, {
      type: type,
      name: child.name || name,
      checked: values.indexOf(childVal) !== -1,
      onChange: (0, _createChainedFunction.default)(childOnChange, handler)
    });
  }));
});

ToggleButtonGroup.defaultProps = defaultProps;
ToggleButtonGroup.Button = _ToggleButton.default;
var _default = ToggleButtonGroup;
exports.default = _default;
module.exports = exports["default"];