import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

/* eslint-disable react/no-multi-comp */
import classNames from 'classnames';
import React from 'react';
import SafeAnchor from './SafeAnchor';
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
var PageItem = React.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : SafeAnchor;
  return /*#__PURE__*/React.createElement("li", {
    ref: ref,
    style: style,
    className: classNames(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, /*#__PURE__*/React.createElement(Component, _extends({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
});
PageItem.defaultProps = defaultProps;
PageItem.displayName = 'PageItem';
export default PageItem;

function createButton(name, defaultValue, label) {
  if (label === void 0) {
    label = name;
  }

  function Button(_ref2) {
    var children = _ref2.children,
        props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

    return /*#__PURE__*/React.createElement(PageItem, props, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, children || defaultValue), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, label));
  }

  Button.displayName = name;
  return Button;
}

export var First = createButton('First', '«');
export var Prev = createButton('Prev', '‹', 'Previous');
export var Ellipsis = createButton('Ellipsis', '…', 'More');
export var Next = createButton('Next', '›');
export var Last = createButton('Last', '»');