import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["as", "children", "eventKey", "onClick"];
import React, { useContext } from 'react';
import SelectableContext from './SelectableContext';
import AccordionContext from './AccordionContext';
export function useAccordionToggle(eventKey, onClick) {
  var contextEventKey = useContext(AccordionContext);
  var onSelect = useContext(SelectableContext);
  return function (e) {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}
var AccordionToggle = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var accordionOnClick = useAccordionToggle(eventKey, onClick);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});
export default AccordionToggle;