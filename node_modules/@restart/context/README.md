# @restart/context [![npm][npm-badge]][npm]

React context helpers.

## Install

```sh
npm install @restart/context
```

## Usage

```js
import React from 'react';
import mapContextToProps from '@restart/context/mapContextToProps';

const MyValueContext = React.createContext(null);

function MyComponent(props) {
  /* ... */
}

const MyComponentWithMyValue = mapContextToProps(
  MyValueContext,
  myValue => ({ myValue }),
  MyComponent,
);

const withMyValue = Component =>
  mapContextToProps(
    {
      consumers: MyValueContext,
      mapToProps: myValue => ({ myValue }),
      displayName: `withMyValue(${Component.displayName || Component.name})`,
    },
    Component,
  );
```

[npm-badge]: https://img.shields.io/npm/v/@restart/context.svg
[npm]: https://www.npmjs.org/package/@restart/context
