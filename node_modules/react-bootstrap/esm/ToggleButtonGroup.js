import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import invariant from 'invariant';
import { useUncontrolled } from 'uncontrollable';
import chainFunction from './createChainedFunction';
import { map } from './ElementChildren';
import ButtonGroup from './ButtonGroup';
import ToggleButton from './ToggleButton';
var defaultProps = {
  type: 'radio'
};
var ToggleButtonGroup = React.forwardRef(function (props, ref) {
  var _useUncontrolled = useUncontrolled(props, {
    value: 'onChange'
  }),
      children = _useUncontrolled.children,
      type = _useUncontrolled.type,
      name = _useUncontrolled.name,
      value = _useUncontrolled.value,
      onChange = _useUncontrolled.onChange,
      controlledProps = _objectWithoutPropertiesLoose(_useUncontrolled, ["children", "type", "name", "value", "onChange"]);

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

  !(type !== 'radio' || !!name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : invariant(false) : void 0;
  return /*#__PURE__*/React.createElement(ButtonGroup, _extends({}, controlledProps, {
    ref: ref,
    toggle: true
  }), map(children, function (child) {
    var values = getValues();
    var _child$props = child.props,
        childVal = _child$props.value,
        childOnChange = _child$props.onChange;

    var handler = function handler(e) {
      return handleToggle(childVal, e);
    };

    return React.cloneElement(child, {
      type: type,
      name: child.name || name,
      checked: values.indexOf(childVal) !== -1,
      onChange: chainFunction(childOnChange, handler)
    });
  }));
});
ToggleButtonGroup.defaultProps = defaultProps;
ToggleButtonGroup.Button = ToggleButton;
export default ToggleButtonGroup;