import React from 'react';
import forwardRef from './forwardRef';
export default function transformContext(Context) {
  return forwardRef(function (props) {
    return React.createElement(Context.Consumer, null, function (context) {
      return React.createElement(Context.Provider, {
        value: props.mapToValue(context)
      }, props.children);
    });
  }, {
    displayName: 'ContextTransformer'
  });
}