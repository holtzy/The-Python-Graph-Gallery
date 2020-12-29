# hast-util-from-parse5 [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Transform [HAST][] to [Parse5’s AST][ast].

## Installation

[npm][npm-install]:

```bash
npm install hast-util-from-parse5
```

## Usage

Dependencies:

```javascript
var parse5 = require('parse5');
var inspect = require('unist-util-inspect');
var vfile = require('vfile');
var fromParse5 = require('hast-util-from-parse5');
```

Fixture:

```javascript
var doc = '<!doctype html><title>Hello!</title><h1 id="world">World!<!--after-->';
```

Parse:

```javascript
var ast = parse5.parse(doc, {locationInfo: true});
```

Transform:

```javascript
var hast = fromParse5(ast, vfile(doc));
```

Yields:

```txt
root[2] (1:1-1:70, 0-69) [data={"quirksMode":false}]
├─ doctype (1:1-1:16, 0-15) [name="html"]
└─ element[2] [tagName="html"]
   ├─ element[1] [tagName="head"]
   │  └─ element[1] (1:16-1:37, 15-36) [tagName="title"]
   │     └─ text: "Hello!" (1:23-1:29, 22-28)
   └─ element[1] [tagName="body"]
      └─ element[2] (1:37-1:70, 36-69) [tagName="h1"][properties={"id":"world"}]
         ├─ text: "World!" (1:52-1:58, 51-57)
         └─ comment: "after" (1:58-1:70, 57-69)
```

## API

### `toParse5(ast[, options])`

Transform an `ASTNode` to a [HAST Node][node].

##### `options`

If `options` is a [VFile][], it’s treated as `{file: options}`.

###### `options.file`

[Virtual file][vfile], used to add positional information to HAST nodes.
If given, the file should have the original HTML source as its contents.

###### `options.verbose`

Whether to add positional information about starting tags, closing tags,
and attributes to elements (`boolean`, default: `false`).  Note: not used
without `file`.

For the following HTML:

```html
<img src="http://example.com/fav.ico" alt="foo" title="bar">
```

The verbose info would looks as follows:

```js
{
  type: 'element',
  tagName: 'img',
  properties: {
    src: 'http://example.com/fav.ico',
    alt: 'foo',
    title: 'bar'
  },
  children: [],
  data: {
    position: {
      opening: {
        start: {line: 1, column: 1, offset: 0},
        end: {line: 1, column: 61, offset: 60}
      },
      closing: null,
      properties: {
        src: {
          start: {line: 1, column: 6, offset: 5},
          end: {line: 1, column: 38, offset: 37}
        },
        alt: {
          start: {line: 1, column: 39, offset: 38},
          end: {line: 1, column: 48, offset: 47}
        },
        title: {
          start: {line: 1, column: 49, offset: 48},
          end: {line: 1, column: 60, offset: 59}
        }
      }
    }
  },
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 61, offset: 60}
  }
}
```

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/hast-util-from-parse5.svg

[travis]: https://travis-ci.org/wooorm/hast-util-from-parse5

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-from-parse5.svg

[codecov]: https://codecov.io/github/wooorm/hast-util-from-parse5

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[ast]: https://github.com/inikulin/parse5/wiki/Documentation

[node]: https://github.com/wooorm/hast#ast

[vfile]: https://github.com/wooorm/vfile
