# Rehype Katex

KaTeX transformer plugin for rehype.

It transfroms html content of `element` nodes with `math` and `inlineMath` class with KaTeX.

> If you are trying to process from Markdown source, using `remark-math` and `remark-rehype` is highly recommended.

## Usage

```sh
npm i -S remark remark-math remark-rehype rehype-stringify
npm i -S rehype-katex
```

```js
const remark = require('remark')
const math = require('remark-math')
const remark2rehype = require('remark-rehype')
const katex = require('rehype-katex')
const stringify = require('rehype-stringify')

// Raw String => MDAST => HAST => transformed HAST => HTML
const processor = remark()
  .use(math)
  .use(remark2rehype)
  .use(katex)
  .use(stringify)

// https://en.wikipedia.org/wiki/Lift_(force)#Lift_coefficient
const rawString = `Lift($L$) can be determined by Lift Coeeficient ($C_L$) like the following equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$
`

const result = processor.processSync(rawString).toString()
/* result
<p>
  Lift(<span class="inlineMath"><span class="katex">...</span></span>) can be determined by Lift Coeeficient (<span class="inlineMath"><span class="katex">...</span></span>) like the following equation.
</p>
<div class="math">
  <span class="katex-display"><span class="katex">...</span></span>
</div>
*/
```

Check [remark-math](https://github.com/rokt33r/remark-math) for more information.

## License

MIT © Junyoung Choi
