# @nteract/notebook-render

This package provides a small React component that allows to render notebooks server-side with `ReactDOMServer.renderToStaticMarkup()`. Markdown is parsed with `marked` and maths are rendered with `katex`. To support rendering math with `katex`, you will need to include the katex.css stylesheet in your page.

## Installation

```
$ yarn add @nteract/notebook-render
```

```
$ npm install --save @nteract/notebook-render
```

## Usage

```javascript
import NotebookRender from "@nteract/notebook-render";

export default () => {
  const reactComponent = React.createElement(
    NotebookRender,
    {
      notebook: notebook
    },
    null
  );

  const html = ReactDOMServer.renderToStaticMarkup(reactComponent);
  return html;
};
```

## Documentation

We're working on adding more documentation for this component. Stay tuned by watching this repository!

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/notebook-render/issues/new).

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
