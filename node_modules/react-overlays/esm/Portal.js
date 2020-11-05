import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';
import useWaitForDOMRef from './useWaitForDOMRef';
var propTypes = {
  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: PropTypes.any,
  onRendered: PropTypes.func
};

/**
 * @public
 */
var Portal = function Portal(_ref) {
  var container = _ref.container,
      children = _ref.children,
      onRendered = _ref.onRendered;
  var resolvedContainer = useWaitForDOMRef(container, onRendered);
  return resolvedContainer ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/ReactDOM.createPortal(children, resolvedContainer)) : null;
};

Portal.displayName = 'Portal';
Portal.propTypes = propTypes;
export default Portal;