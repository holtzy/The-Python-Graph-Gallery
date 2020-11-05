import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import TabContainer from './TabContainer';
import TabContent from './TabContent';
import TabPane from './TabPane';

/* eslint-disable react/require-render-return, react/no-unused-prop-types */
var Tab = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
    return null;
  };

  return Tab;
}(React.Component);

Tab.Container = TabContainer;
Tab.Content = TabContent;
Tab.Pane = TabPane;
export default Tab;