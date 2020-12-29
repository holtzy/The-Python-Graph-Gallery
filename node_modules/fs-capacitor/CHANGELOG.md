# fs-capacitor changelog

## 1.0.0

- Initial release.

### 1.0.1

- Use default fs flags and mode

## 2.0.0

- Update dependencies.
- Add tests for special stream scenarios.
- **BREAKING:** Remove special handling of terminating events, see [jaydenseric/graphql-upload#131](https://github.com/jaydenseric/graphql-upload/issues/131)

### 2.0.1

- Update dependencies.
- Move configs out of package.json
- Use `wx` file flag instead of default `w` (thanks to @mattbretl via #8)

### 2.0.2

- Update dev dependencies.
- Fix mjs structure to work with node v12.
- Fix a bug that would pause consumption of read streams until completion. (thanks to @Nikosmonaut's investigation in #9).

### 2.0.3

- Emit write event _after_ bytes have been written to the filesystem.

### 2.0.4

- Revert support for Node.js v12 `--experimental-modules` mode that was published in [v2.0.2](https://github.com/mike-marcacci/fs-capacitor/releases/tag/v2.0.2) that broke compatibility with earlier Node.js versions and test both ESM and CJS builds (skipping `--experimental-modules` tests for Node.js v12), via [#11](https://github.com/mike-marcacci/fs-capacitor/pull/11).
- Use package `browserslist` field instead of configuring `@babel/preset-env` directly.
- Configure `@babel/preset-env` to use shipped proposals and loose mode.
- Give dev tool config files `.json` extensions so they can be Prettier linted.
- Don't Prettier ignore the `lib` directory; it's meant to be pretty.
- Prettier ignore `package.json` and `package-lock.json` so npm can own the formatting.
- Configure [`eslint-plugin-node`](https://npm.im/eslint-plugin-node) to resolve `.mjs` before `.js` and other extensions, for compatibility with the pre Node.js v12 `--experimental-modules` behavior.
- Don't ESLint ignore `node_modules`, as it's already ignored by default.
- Use the `classic` TAP reporter for tests as it has more compact output.

## 3.0.0

- Update dev dependencies.
- Add support for Node.js v13 by no longer extending `ReadStream` and `WriteStream` from node's `fs` library.
- Specify `0o600` for buffer file permissions instead of node's default `0o666`
- **BREAKING:** Remove several undocumented properties that existed for consistency with the extended classes.
- **BREAKING:** No longer listen for `SIGINT`, and instead warn the application to add handlers for terminating signals.

## 4.0.0

- Update source to typescript.
- Add `WriteStream.release` replacing the functionality of an error-free `WriteStream.destroy()`
- **BREAKING:** Change `WriteStream.destroy()` to immediately destroy attached `ReadStream`s even without an error.
- **BREAKING:** Reluctantly remove exported `.mjs` files now that we have an external commonjs dependency and are still missing clear interop guidance from node.

### 4.0.1

- Add cleanup example to README.md
- Remove warnings about signal listeners.

## 5.0.0

- Update dev dependencies.
- Remove dependency on `readable-stream` to expose new (but internally unused) features of streams in node v13.
- **BREAKING:** Remove support for node v8.

### 5.0.1

- Add cleanup example to README.md
- Remove warnings about signal listeners.

## 6.0.0

- Update dev dependencies.
- Add the ability to specify encoding and highWaterMark in `createReadStream()`.
- **BREAKING:** Remove "name" argument from `createReadStream()`.

### 6.1.0

- Add the ability to specify defaultEncoding and highWaterMark in `new WriteStream()`.
- Export `ReadStreamOptions` and `WriteStreamOptions` interfaces.
- Add tests for highWaterMark option in `createReadStream`.
- Add documentation of configuration options to README.

### 6.2.0

- Upgrade dependencies.
- Update option types to match changes in @types/node.
