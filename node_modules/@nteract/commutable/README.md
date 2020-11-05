# @nteract/commutable

This is a package for Jupyter Notebook operations, helping to enable history stored as a series of immutable notebooks.

This package follows the principles below, based on [Tom MacWright](http://www.macwright.org/2015/05/18/practical-undo.html)'s outline for practical undo.

- **A notebook document is immutable**. It is never mutated in-place.
- Changes to a notebook document are encapsulated into **operations** that take a previous version and return a new one.
- History is represented as a **list of states**, with past on one end, the present on the other, and an index that can back up into 'undo states'.
- Modifying a notebook document causes any **future states to be thrown away**.

## Installation

```
$ yarn add @nteract/commutable
```

```
$ npm install --save @nteract/commutable
```

## Usage

The example below shows how we can use the `emptyMarkdownCell` immutable object exported from this package to quickly create an empty Markdown cell in our nteract application.

```javascript
import { emptyMarkdownCell } from "@nteract/commutable";

export default () => (
  <MarkdownPreview
    id="a-random-cell-id"
    cell={emptyMarkdownCell}
    editorFocused={false}
  />
);
```

## Documentation

You can view the reference documentation for `@nteract/commutable` in the [package docs](https://packages.nteract.io/modules/commutable).

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/nteract/issues/new/choose) and add the `pkg:commutable` label.

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
