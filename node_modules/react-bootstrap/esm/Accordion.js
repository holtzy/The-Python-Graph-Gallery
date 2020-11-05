import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useUncontrolled } from 'uncontrollable';
import { useBootstrapPrefix } from './ThemeProvider';
import AccordionToggle from './AccordionToggle';
import SelectableContext from './SelectableContext';
import AccordionCollapse from './AccordionCollapse';
import AccordionContext from './AccordionContext';
var Accordion = React.forwardRef(function (props, ref) {
  var _useUncontrolled = useUncontrolled(props, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = _objectWithoutPropertiesLoose(_useUncontrolled, ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"]);

  var finalClassName = classNames(className, useBootstrapPrefix(bsPrefix, 'accordion'));
  return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
    value: activeKey || null
  }, /*#__PURE__*/React.createElement(SelectableContext.Provider, {
    value: onSelect || null
  }, /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref
  }, controlledProps, {
    className: finalClassName
  }), children)));
});
Accordion.displayName = 'Accordion';
Accordion.Toggle = AccordionToggle;
Accordion.Collapse = AccordionCollapse;
export default Accordion;