import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
import PageItem, { Ellipsis, First, Last, Next, Prev } from './PageItem';

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "children", "size"]);

  var decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
  return /*#__PURE__*/React.createElement("ul", _extends({
    ref: ref
  }, props, {
    className: classNames(className, decoratedBsPrefix, size && decoratedBsPrefix + "-" + size)
  }), children);
});
Pagination.First = First;
Pagination.Prev = Prev;
Pagination.Ellipsis = Ellipsis;
Pagination.Item = PageItem;
Pagination.Next = Next;
Pagination.Last = Last;
export default Pagination;