# @nteract/transform-vdom

This package contains a React component for rendering [virtual DOM elements](https://github.com/nteract/vdom/blob/master/docs/mimetype-spec.md) returned by libraries like [vdom for Python](https://github.com/nteract/vdom).

## Installation

```
$ yarn add @nteract/transform-vdom
```

```
$ npm install --save @nteract/transform-vdom
```

## Usage

The example below shows how we can use the component within this package to render a virtual DOM contain a div with some headers and an image.

```javascript
import { TransformVDOM } from "@nteract/transform-vdom";

export default () => {
  return (
    <TransformVDOM
      data={{
        tagName: "div",
        attributes: { style: { color: "DeepPink" } },
        children: [
          { tagName: "h1", attributes: {}, children: "Wahoo" },
          { tagName: "h1", attributes: {}, children: null },
          {
            tagName: "img",
            attributes: { width: "100px", height: "100px", src: "about:blank" },
            children: []
          }
        ]
      }}
    />
  );
};
```

## Documentation

We're working on adding more documentation for this component. Stay tuned by watching this repository!

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/nteract/issues/new/choose) and add the `pkg:transform-vdom` label.

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
