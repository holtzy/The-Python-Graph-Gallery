# @nteract/messaging

This package contains type definitions and helper functions for interacting with the [Jupyter Messaging Protocol](https://jupyter-client.readthedocs.io/en/stable/messaging.html). These functions can be used to create different types of request and response messages.

## Installation

```
$ yarn add @nteract/messaging
```

```
$ npm install --save @nteract/messaging
```

## Usage

The example below shows how we can use the `createMessage` function in this package to create an [inspect_request](https://jupyter-client.readthedocs.io/en/stable/messaging.html#introspection) Jupyter message.

```javascript
import { createMessage } from "@nteract/messaging";

const message = createMessage("inspect_request", {
  code: "string.for",
  cursor_pos: 10,
  detail_level: 1
});
```

## Documentation

You can view the reference documentation for `@nteract/messaging` in the [package docs](https://packages.nteract.io/modules/messaging).

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/nteract/issues/new/choose) and add the `pkg:messaging` label.

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
