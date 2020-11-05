import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import Collapse from './Collapse';
import AccordionContext from './AccordionContext';
var AccordionCollapse = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "eventKey"]);

  var contextEventKey = useContext(AccordionContext);
  return /*#__PURE__*/React.createElement(Collapse, _extends({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/React.createElement("div", null, React.Children.only(children)));
});
AccordionCollapse.displayName = 'AccordionCollapse';
export default AccordionCollapse;