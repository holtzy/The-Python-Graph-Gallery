# @nteract/ansi-to-react

This package convert ANSI escape codes to formatted text output for React.

## Installation

```
$ yarn add @nteract/ansi-to-react
```

```
$ npm install --save @nteract/ansi-to-react
```

## Usage

The example below shows how we can use this package to render a string with ANSI escape codes.

```javascript
import Ansi from "@nteract/ansi-to-react";

export function () => {
  return <Ansi>
    {'\u001b[34mnode_modules\u001b[m\u001b[m'}
  </Ansi>;
};
```

## Documentation

We're working on adding more documentation for this component. Stay tuned by watching this repository!

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/nteract/issues/new/choose) and add the `pkg:ansi-to-react` label.

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
