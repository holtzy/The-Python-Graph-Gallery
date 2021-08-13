import React from 'react'; // TODO (apparently this is a bare "onSelect"?)

var SelectableContext = /*#__PURE__*/React.createContext(null);
export var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};
export default SelectableContext;