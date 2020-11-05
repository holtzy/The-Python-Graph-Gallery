# @nteract/transforms

This package contains a full set of transforms for rendering plain-text and rich media within nteract applications. Note that unlike the `@nteract/transforms-full` package, this package does not contain transforms for Plotly, Vega, and GeoJSON

## Installation

```
$ yarn add @nteract/transforms
```

```
$ npm install --save @nteract/transforms
```

## Usage

The example below shows how to use the standard set of transforms to render plain text and image data.

```js
import {
  richestMimetype,
  standardDisplayOrder,
  standardTransforms
} from "@nteract/transforms";

// Jupyter style MIME bundle
const bundle = {
  "text/plain": "This is great",
  "image/png": "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
};

// Find out which mimetype is the richest
const mimetype = richestMimetype(
  bundle,
  standardDisplayOrder,
  standardTransforms
);

// Get the matching React.Component for that mimetype
let Transform = standardTransforms[mimetype];

// Create a React element
return <Transform data={bundle[mimetype]} />;
```

The following example shows how you can extend the set of transforms with your own unique transforms. This allows you to create custom renders for different media types.

```js
import {
  richestMimetype,
  registerTransform,
  standardTransforms,
  standardDisplayOrder,
} from '@nteract/transforms'

import geoTransform from '@nteract/transform-geojson'

const {
  transforms,
  displayOrder,
} = registerTransform({
  transforms: standardTransforms,
  displayOrder: standardDisplayOrder,
}, geoTransform)

...

const Transform = transforms[mimetype];
```

## Documentation

We're working on adding more documentation for this component. Stay tuned by watching this repository!

## Support

If you experience an issue while using this package or have a feature request, please file an issue on the [issue board](https://github.com/nteract/nteract/issues/new/choose) and add the `pkg:transforms` label.

## License

[BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
