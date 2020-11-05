import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import camelize from 'dom-helpers/camelize';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + camelize(str).slice(1);
};

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
export default function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      Component = _ref.Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = React.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
        props = _objectWithoutPropertiesLoose(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/React.createElement(Tag, _extends({
      ref: ref,
      className: classNames(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}