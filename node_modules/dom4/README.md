DOM4
====

[![build status](https://travis-ci.org/WebReflection/dom4.svg)](https://travis-ci.org/WebReflection/dom4) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/WebReflection/donate)

A fully tested and covered polyfill for new DOM Level 4 entries

## Via cdnJS
Many thanks to [cdnjs](http://www.cdnjs.com) for hosting this script. Following an example on how to include it.
```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/dom4/2.0.0/dom4.js"
>/* DOM4 */</script>
```

### New v2

Both `query` and `queryAll` have been removed, while CSS `:scope` selector has been added.


## Features
This is a [fully tested](http://webreflection.github.io/dom4/test/) and covered polyfill for both [new DOM Level 4 parentNode entries](https://dom.spec.whatwg.org/#parentnode):

  * Element#prepend()
  * Element#append()

And for [new DOM Level 4 childNode entries](https://dom.spec.whatwg.org/#childnode):

  * Element#before()
  * Element#after()
  * Element#replaceWith() ( **warning** Element#replace() has been recently deprecated )
  * Element#remove()

The [implemented test](https://github.com/WebReflection/dom4/blob/master/test/dom4.js) is conform to current specifications.

Other fixes/standardized behaviors include:

  * [toggleAttribute](https://dom.spec.whatwg.org/#dom-element-toggleattribute)
  * [DOM Listener: capture, passive, and once](https://www.webreflection.co.uk/blog/2016/04/17/new-dom4-standards)
  * fully normalized `KeyboardEvent`, `MouseEvent` and the latest way to create `new Event('type')`
  * CSS `:scope` selector for any HTML Element (no `document` since useless, sorry)
  * [classList](http://www.w3.org/TR/dom/#domtokenlist), with forced fixes for iOS 5.1 and Nokia ASHA Xpress Browser and early implementations
  * [CustomEvent](http://www.w3.org/TR/dom/#customevent) constructor for all browsers down to IE8
  * [Element#matches](https://dom.spec.whatwg.org/#dom-element-matches) utility to test elements against CSS selectors
  * [Element#closest](https://dom.spec.whatwg.org/#dom-element-closest) utility to find element inclusive ancestor via CSS selectors
  * [Node#contains](https://dom.spec.whatwg.org/#dom-node-contains) utility to know if another node is inside the current one
  * `requestAnimationFrame` and `cancelAnimationFrame` are polyfilled too but the least legacy fallback to setTimeout does not support accurate timing and doesn't slow down execution with that logic. Feel free to load upfront other polyfills if needed.


If you need other polyfills too, [have a look at another DOM-shim repo](https://github.com/Raynos/DOM-shim).


## Compatibility
Theoretically compatible with all browsers you know that are truly used these days, here a list:

  * Android 2.1+
  * Safari Mobile since iOS 3.0 and Desktop
  * Opera Mobile, Mini, and Desktop
  * Blackberry 7.1 and higher
  * Samsung Bada 2 native Browser
  * Midori and most likely all other WebKit based
  * Chrome Mobile and Desktop
  * Firefox Mobile and Desktop
  * IE8+ for Desktop and IE Mobile 9 or greater.
  * Nokia Xpress Browser for ASHA Platform
  * Silk Browser - Fire OS 3.0
  * PhantomJS can benefit from DOM4 too

It's way easier if you tell me which browser in a current relevant market share is not supported :-)

For **IE8** only it's recommended to include [ie8](https://github.com/WebReflection/ie8#ie8) script before `dom4` or `CustomEvent`, `addEventListener`, and `dispatchEvent` won't work as expected.


## Which File
The [minified version is here](https://github.com/WebReflection/dom4/blob/master/build/dom4.js), while the [max one here](https://github.com/WebReflection/dom4/blob/master/build/dom4.max.js). If you want to test directly [try this page](http://webreflection.github.com/dom4/test/), it should be green.


## Want to contribute?
If you found a bug, want to contribute or have any questions feel free to fill an [issue](https://github.com/WebReflection/dom4/issues) or pull request, and help us to improve the [Dom4](https://github.com/WebReflection/dom4)


## License
 [Dom4](https://github.com/WebReflection/dom4) Code released under the MIT license.
