import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import requiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import { useUncontrolled } from 'uncontrollable';
import Nav from './Nav';
import NavLink from './NavLink';
import NavItem from './NavItem';
import TabContainer from './TabContainer';
import TabContent from './TabContent';
import TabPane from './TabPane';
import { forEach, map } from './ElementChildren';
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  var _child$props = child.props,
      title = _child$props.title,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName,
      id = _child$props.id;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/React.createElement(NavItem, {
    as: NavLink,
    eventKey: eventKey,
    disabled: disabled,
    id: id,
    className: tabClassName
  }, title);
}

var Tabs = function Tabs(props) {
  var _useUncontrolled = useUncontrolled(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      onSelect = _useUncontrolled.onSelect,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children,
      _useUncontrolled$acti = _useUncontrolled.activeKey,
      activeKey = _useUncontrolled$acti === void 0 ? getDefaultActiveKey(children) : _useUncontrolled$acti,
      controlledProps = _objectWithoutPropertiesLoose(_useUncontrolled, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

  return /*#__PURE__*/React.createElement(TabContainer, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: transition,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/React.createElement(Nav, _extends({}, controlledProps, {
    role: "tablist",
    as: "nav"
  }), map(children, renderTab)), /*#__PURE__*/React.createElement(TabContent, null, map(children, function (child) {
    var childProps = _extends({}, child.props);

    delete childProps.title;
    delete childProps.disabled;
    delete childProps.tabClassName;
    return /*#__PURE__*/React.createElement(TabPane, childProps);
  })));
};

Tabs.defaultProps = defaultProps;
Tabs.displayName = 'Tabs';
export default Tabs;