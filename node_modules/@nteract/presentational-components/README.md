# @nteract/presentational-components

This package contains React components for rendering inputs, outputs, cells, and other key UI elements within nteract applications.

## Installation

```
$ yarn add @nteract/presentational-components
```

```
$ npm install --save @nteract/presentational-components
```

## Usage

The Redux reducer below shows how we can leverage the components within this package to display a cell with an input and output.

```javascript
import {
  Cell,
  Input,
  Prompt,
  Source,
  Outputs
} from "@nteract/presentational-components";

export default () => {
  return (
    <Cell isSelected>
      <Input>
        <Prompt counter={2} />
        <Source language="python">{`print("Hello World")`}</Source>
      </Input>
      <Outputs>
        <pre>Hello World</pre>
      </Outputs>
    </Cell>
  );
};
```

## Documentation

You can view the reference documentation for `@nteract/presentational-components` in the [component docs](https://components.nteract.io/#nteractpresentational-components).

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/nteract/issues/new/choose) and add the `pkg:presentational-components` label.

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
