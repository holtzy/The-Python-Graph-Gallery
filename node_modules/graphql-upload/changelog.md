# graphql-upload changelog

## 11.0.0

### Major

- Updated Node.js support to `^10.13.0 || ^12.0.0 || >= 13.7.0`.
- Added a [package `exports` field](https://nodejs.org/api/esm.html#esm_package_entry_points) with [conditional exports](https://nodejs.org/api/esm.html#esm_conditional_exports) to support native ESM in Node.js and keep internal code private, [whilst avoiding the dual package hazard](https://nodejs.org/api/esm.html#esm_approach_1_use_an_es_module_wrapper). Published files have been reorganized, so previously undocumented deep imports will need to be rewritten according to the newly documented paths.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.

### Patch

- Updated the [`graphql`](https://npm.im/graphql) peer dependency to `0.13.1 - 15`, fixing [#200](https://github.com/jaydenseric/graphql-upload/issues/200) via [#201](https://github.com/jaydenseric/graphql-upload/pull/201).
- Updated Prettier related package scripts.
- Configured Prettier option `semi` to the default, `true`.
- Ensure GitHub Actions run on pull request.
- Also run GitHub Actions with Node.js v14.
- Fixed the `ignoreStream` function tests for Node.js v14 with a new `CountReadableStream` test helper, fixing [#209](https://github.com/jaydenseric/graphql-upload/issues/209).
- Minor JSDoc wording tweak for consistency.
- Mention [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) in the readme “Tips” section.
- Updated MDN Web Docs links.

## 10.0.0

### Major

- Updated Node.js support from v8.10+ to v10+, as earlier versions have reached end-of-life.
- Updated the [`fs-capacitor`](https://npm.im/fs-capacitor) dependency to v6, which now requires Node.js v10+, via [#179](https://github.com/jaydenseric/graphql-upload/pull/179).
- Updated dev dependencies, some of which now require Node.js v10+.
- Replaced the [`tap`](https://npm.im/tap) dev dependency with [`test-director`](https://npm.im/test-director), [`coverage-node`](https://npm.im/coverage-node), and [`hard-rejection`](https://npm.im/hard-rejection) to improve the dev experience and reduce the dev install size by ~75.7 MB. These new dev dependencies require Node.js v10+.
- Reorganized files. This is only a breaking change for projects using undocumented deep imports.
- Removed now redundant Node.js version compatibility logic in the `processRequest` function.
- The `processRequest` function now places references to instances of the now exported and documented `Upload` class in the GraphQL operation for the `GraphQLUpload` scalar to derive its value, and the `GraphQLUpload` scalar now throws a `GraphQLError` when it parses an invalid value, fixing [#175](https://github.com/jaydenseric/graphql-upload/issues/175) via [#181](https://github.com/jaydenseric/graphql-upload/pull/181).
- The `GraphQLUpload` scalar `parseLiteral` and `serialize` methods now throw `GraphQLError` (instead of `Error`) instances, with tweaked messages.

### Minor

- The `createReadStream` function in resolved file uploads now accepts options to configure the encoding and high water mark, fixing [#177](https://github.com/jaydenseric/graphql-upload/issues/177) via [#179](https://github.com/jaydenseric/graphql-upload/pull/179).

### Patch

- Removed the now redundant [`eslint-plugin-import-order-alphabetical`](https://npm.im/eslint-plugin-import-order-alphabetical) and [`express-async-handler`](https://npm.im/express-async-handler) dev dependencies.
- Stop using [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged).
- Use [`isobject`](https://npm.im/isobject) for checking if values are enumerable, non-array objects.
- Tests have been massively reorganized, refactored, and improved.
- Test the `GraphQLUpload` scalar.
- Test the `ignoreStream` function.
- Moved the `Upload` class to its own file.
- Added JSDoc for the `Upload` class instance property `file`.
- Test the `Upload` class.
- Improved JSDoc `FileUpload` typedef description.
- Removed now redundant `eslint-disable-next-line` comments.
- Use strict mode for scripts.

## 9.0.0

### Major

- Updated Node.js support from v8.5+ to v8.10+, to match what the [`eslint`](https://npm.im/eslint) dev dependency now supports. This is unlikely to be a breaking change for the published package.
- Removed the `Upload` scalar promise resolved `stream` property that has been deprecated since v7, along with associated tests.
- ESM is no longer published, due to CJS/ESM compatibility issues across recent Node.js versions, via [#169](https://github.com/jaydenseric/graphql-upload/pull/169).
- The file structure and non-index file exports have changed. This should only affect projects using undocumented deep imports.

### Minor

- Updated the [`fs-capacitor`](https://npm.im/fs-capacitor) dependency to v4 to support Node.js v13, making required changes to the source and tests, via [#166](https://github.com/jaydenseric/graphql-upload/pull/166).
- JSDoc comments are now included in the published code.
- Several anonymous functions have been named, for better error stack traces.
- Setup [GitHub Sponsors funding](https://github.com/sponsors/jaydenseric):
  - Added `.github/funding.yml` to display a sponsor button in GitHub.
  - Added a `package.json` `funding` field to enable npm CLI funding features.

### Patch

- Updated dev dependencies.
- Removed the `.nycrc.json` file:
  - [`tap`](https://npm.im/tap) now ignores test files by default.
  - The `lib/test-helpers` directory is now ignored using [`tap`](https://npm.im/tap) CLI arguments due to [tapjs/node-tap#612](https://github.com/tapjs/node-tap/issues/612).
- Removed the `esm` and `mjs` package tags; they will be added back once native ESM is properly supported.
- Updated JSDoc code examples to use CJS instead of ESM, as native ESM is not yet properly supported.
- No longer test [`fs-capacitor`](https://npm.im/fs-capacitor) implementation details such as temp file creation and cleanup.
- Commented the reasons for several `istanbul ignore next` comments.

## 8.1.0

### Minor

- `processRequest` now throws an appropriate error when a multipart field value exceeds the configured size limit, fixing [#159](https://github.com/jaydenseric/graphql-upload/issues/159).
- When the file size limit is exceeded, mention how many bytes the limit is in the stream error message.
- Added a new `processRequest` option to the `graphqlUploadExpress` and `graphqlUploadKoa` middleware, for improved testing without mocks or spies which are difficult to achieve with ESM.

### Patch

- Updated dependencies.
- Due to updated dependencies: Lint fixes, removed redundant `eslint-disable-next-line` comments, and regenerated the readme.
- Documented [`koa-graphql`](https://npm.im/koa-graphql) as known to be compatible, via [#156](https://github.com/jaydenseric/graphql-upload/pull/156).
- Fixed a readme typo, via [#161](https://github.com/jaydenseric/graphql-upload/pull/161).
- Use GitHub Actions instead of Travis for CI.
- Removed `package-lock.json` from `.gitignore` and `.prettierignore`, as it’s disabled in `.npmrc` anyway.
- New file structure.
- Explicitly defined main exports (instead of using `export * from`) to prevent accidental public exposure of internal APIs.
- Moved JSDoc typedefs into the index main entry file, alphabetically sorted.
- Nicer Browserslist query syntax.
- Replaced the `isObject` helper with a smarter and tested `isEnumerableObject`.
- Removed the `isString` helper.
- Enforced 100% code coverage for tests, and improved `processRequest` internals and tests (including a new test using vanilla Node.js HTTP), fixing [#130](https://github.com/jaydenseric/graphql-upload/issues/130) via [#162](https://github.com/jaydenseric/graphql-upload/pull/162).
- Removed a workaround from the `startServer` test helper.
- Added a new `ProcessRequestFunction` JSDoc type, and applied it to `processRequest`.
- Renamed the `UploadOptions` JSDoc type to `ProcessRequestOptions`.
- Misc. documentation improvements.

## 8.0.7

### Patch

- Updated dependencies.
- Handle invalid object paths in `map` multipart field entries, fixing [#154](https://github.com/jaydenseric/graphql-upload/issues/154).
- Import `WriteStream` from [`fs-capacitor`](https://npm.im/fs-capacitor) as a named rather than default import.

## 8.0.6

### Patch

- Updated dependencies.
- Allow batched operations again, fixing [#142](https://github.com/jaydenseric/graphql-upload/issues/142).
- Simplify tests by writing JSON as strings instead of using `JSON.stringify`.
- Use async middleware with [`express-async-handler`](https://npm.im/express-async-handler) for Express tests.
- Removed unintended `maxFiles` config in certain tests.
- Added the Open Graph image design to the logo Sketch file.

## 8.0.5

### Patch

- Updated dependencies.
- Handle invalid types in multipart fields and respond with meaningful HTTP 400 errors, via [#139](https://github.com/jaydenseric/graphql-upload/pull/139):
  - Invalid `operations` type.
  - Invalid `map` type.
  - Invalid `map` entry type.
  - Invalid `map` entry array item type.
- Additionally test current Node.js v8 and v10 versions with Travis.
- Reduced the size of the published `package.json` by moving dev tool config to files. This also prevents editor extensions such as Prettier and ESLint from detecting config and attempting to operate when opening package files installed in `node_modules`.
- Removed the [`watch`](https://npm.im/watch) dev dependency and `watch` script.
- Simplified the `prepublishOnly` script.
- Change to the `classic` TAP reporter for tests.
- Add [`apollo-server-koa`](https://npm.im/apollo-server-koa) and [`apollo-server-express`](https://npm.im/apollo-server-express) back to the compatible environments list in the readme, now that they use the current version of this package.

## 8.0.4

### Patch

- Updated the [`fs-capacitor`](https://npm.im/fs-capacitor) dependency to v2, fixing [#131](https://github.com/jaydenseric/graphql-upload/issues/131) via [#132](https://github.com/jaydenseric/graphql-upload/pull/132).

## 8.0.3

### Patch

- Updated dependencies. The `busboy` update contains [a bug fix for `.pipe()` on file streams](https://github.com/mscdex/busboy/issues/188).
- Use [jsDelivr](https://jsdelivr.com) for the readme logo instead of [RawGit](https://rawgit.com) as they are shutting down.

## 8.0.2

### Patch

- Updated dev dependencies.
- Fixed hanging when a request with a large payload has an “immediate” error, such as a malformed request, fixing [#123](https://github.com/jaydenseric/graphql-upload/issues/123) via [#124](https://github.com/jaydenseric/graphql-upload/pull/124).
- Moved JSDoc type definitions to the end of files to make it easier to open to the code.

## 8.0.1

### Patch

- Updated dev dependencies.
- Removed the package `module` field. Webpack by default resolves extensionless paths the same way Node.js in `--experimental-modules` mode does; `.mjs` files are preferred. Tools misconfigured or unable to resolve `.mjs` can get confused when `module` points to an `.mjs` ESM file and they attempt to resolve named imports from `.js` CJS files.
- Updated package scripts and config for the new [`husky`](https://npm.im/husky) version.
- Added a package `browserslist` field with the target Node.js version for [`@babel/preset-env`](https://npm.im/@babel/preset-env) and removed related config from `babel.config.js`.
- Tests now log if the environment is CJS or ESM (`--experimental-modules`) and the `NODE_ENV`.
- Fixed broken readme API documentation links.

## 8.0.0

### Major

- New naming that drops “apollo” to reflect the independent and universal nature of the project, fixing [#68](https://github.com/jaydenseric/apollo-upload-server/issues/68):

  - Changed the package name from [`apollo-upload-server`](https://npm.im/apollo-upload-server) to [`graphql-upload`](https://npm.im/graphql-upload).
  - Renamed `apolloUploadKoa` to `graphqlUploadKoa`.
  - Renamed `apolloUploadExpress` to `graphqlUploadExpress`.

  To migrate you project from `apollo-upload-server@7.1.0` to `graphql-upload@8.0.0`:

  1. Run `npm uninstall apollo-upload-server`.
  2. Run `npm install graphql-upload`.
  3. Find and replace:
     - `apolloUploadKoa` → `graphqlUploadKoa`.
     - `apolloUploadExpress` → `graphqlUploadExpress`.

### Patch

- Updated dependencies.
- New project logo.

## 7.1.0

### Minor

- Support [`graphql`](https://npm.im/graphql) v14.

### Patch

- Updated dev dependencies.

## 7.0.0

### Major

- The `processRequest` function now requires a [`http.ServerResponse`](https://nodejs.org/api/http.html#http_class_http_serverresponse) instance as its second argument.
- Replaced the previously exported error classes with [`http-errors`](https://npm.im/http-errors) and snapshot tested error details, via [#105](https://github.com/jaydenseric/apollo-upload-server/pull/105).
- No longer exporting the `SPEC_URL` constant.

### Minor

- `Upload` scalar promises now resolve with a `createReadStream` method instead of a `stream` property, via [#92](https://github.com/jaydenseric/apollo-upload-server/pull/92).
- Accessing an `Upload` scalar promise resolved `stream` property results in a deprecation warning that recommends using `createReadStream` instead. It will be removed in a future release. Via [#107](https://github.com/jaydenseric/apollo-upload-server/pull/107).
- An `Upload` scalar variable can now be used by multiple resolvers, via [#92](https://github.com/jaydenseric/apollo-upload-server/pull/92).
- Multiple `Upload` scalar variables can now use the same multipart data, via [#92](https://github.com/jaydenseric/apollo-upload-server/pull/92).
- Malformed requests containing invalid JSON for `operations` or `map` multipart fields cause an appropriate error with a `400` status instead of crashing the process, relating to [#81](https://github.com/jaydenseric/apollo-upload-server/pull/81) and [#95](https://github.com/jaydenseric/apollo-upload-server/issues/95).
- Malformed requests missing `operations`, `map` and files, or just `map` and files, cause an appropriate error with a `400` status instead of hanging, fixing [#96](https://github.com/jaydenseric/apollo-upload-server/issues/96).
- Tweaked `GraphQLUpload` scalar description to remove details about how it resolves on the server as they are irrelevant to API users.
- Tweaked `GraphQLUpload` scalar error messages.

### Patch

- Updated dev dependencies.
- Removed the [`npm-run-all`](https://npm.im/npm-run-all) dev dependency and made scripts and tests sync for easier debugging, at the cost of slightly longer build times.
- Explicitly set `processRequest` default options instead of relying on [`busboy`](https://npm.im/busboy) defaults.
- Better organized project file structure.
- Configured Prettier to lint `.yml` files.
- Ensure the readme Travis build status badge only tracks `master` branch.

## 6.0.0-alpha.1

Big thanks to new collaborator [@mike-marcacci](https://github.com/mike-marcacci) for his help solving tricky bugs and edge-cases!

### Major

- Updated Node.js support from v6.10+ to v8.5+ for [native ESM](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8.5.0), [object rest/spread properties](https://node.green#ES2018-features-object-rest-spread-properties), and [async functions](https://node.green#ES2017-features-async-functions).
- Removed the [`@babel/runtime`](https://npm.im/@babel/runtime) dependency and config.
- Fixed [#45](https://github.com/jaydenseric/apollo-upload-server/issues/45), [#77](https://github.com/jaydenseric/apollo-upload-server/issues/77) and [#83](https://github.com/jaydenseric/apollo-upload-server/issues/83) via [#81](https://github.com/jaydenseric/apollo-upload-server/pull/81):
  - Add `error` event listeners to file streams to prevent server crashes on aborted requests or parser errors.
  - Use [`fs-capacitor`](https://npm.im/fs-capacitor) to ensure the server doesn’t hang if an upload `await` is out of order, or is never consumed.

### Minor

- Refactored package scripts to use `prepare` to support installation via Git (e.g. `npm install jaydenseric/apollo-upload-server`).

### Patch

- Updated dependencies.
- Use single instead of double typographic quotes in error messages.
- Use `babel.config.js` instead of `.babelrc.js`.
- Enabled `shippedProposals` in [`@babel/preset-env`](https://npm.im/@babel/preset-env) config.
- Improved testing:
  - Use [`tap`](https://npm.im/tap) instead of [`ava`](https://npm.im/ava). Tests no longer transpile on the fly, are faster and AVA no longer dictates the Babel version.
  - Tests run against the actual dist `.mjs` and `.js` files in native ESM (`--experimental-modules`) and CJS environments.
  - Removed `get-port` dev dependency.
  - Added Express tests.
  - Test middleware error response status codes.
  - Test behavior of aborted HTTP requests.
  - Test that the app can respond if an upload is not handled.
  - Test files to upload are created in context, rather than using arbitrary project files, via [#89](https://github.com/jaydenseric/apollo-upload-server/pull/89).
- Improved `package.json` scripts:
  - Leveraged `npm-run-all` more for parallelism and reduced noise.
  - Removed the clean script `rimraf` dev dependency in favour of native `rm -rf`. Leaner and faster; we only support \*nix now for contributing anyway.
  - No longer use `cross-env`; contributors with Windows may setup and use a Bash shell.
  - Renamed the `ESM` environment variable to `BABEL_ESM` to be more specific.
  - Removed linting fix scripts.
  - Linting included in the test script; Travis CI will fail PR's with lint errors.
  - Custom watch script.
- Improved ESLint config:
  - Simplified ESLint config with [`eslint-config-env`](https://npm.im/eslint-config-env).
  - Removed redundant [`eslint-plugin-ava`](https://npm.im/eslint-plugin-ava) dev dependency and config.
  - Undo overriding ESLint ignoring dotfiles by default as there are none now.
- Use `.prettierignore` to leave `package.json` formatting to npm.
- Tweaked package `description` and `keywords`.
- Compact package `repository` field.
- Improved documentation.
- Readme badge changes to deal with [shields.io](https://shields.io) unreliability:
  - Use the official Travis build status badge.
  - Use [Badgen](https://badgen.net) for the npm version badge.
  - Removed the licence badge. The licence can be found in `package.json` and rarely changes.
  - Removed the Github issues and stars badges. The readme is most viewed on Github anyway.
- Changelog version entries now have “Major”, “Minor” and “Patch” subheadings.

## 5.0.0

### Major

- [`graphql`](https://npm.im/graphql) peer dependency range updated to `^0.13.1` for native ESM support via `.mjs`. It’s a breaking change despite being a semver patch.

### Patch

- Updated dependencies.
- More robust npm scripts, with the ability to watch builds and tests together.
- Fixed missing dev dependency for fetching in tests.
- Use [`eslint-plugin-ava`](https://github.com/avajs/eslint-plugin-ava).
- HTTPS `package.json` author URL.
- New readme logo URL that doesn’t need to be updated every version.

## 4.0.2

### Patch

- Temporary solution for importing CommonJS in `.mjs`, fixing reopened [#40](https://github.com/jaydenseric/apollo-upload-server/issues/40).

## 4.0.1

### Patch

- Correct imports for vanilla Node.js `--experimental-modules` and `.mjs` support, fixing [#40](https://github.com/jaydenseric/apollo-upload-server/issues/40).

## 4.0.0

### Patch

- Updated dependencies.
- Simplified npm scripts.
- Readme updates:
  - Documented [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) types, via [#39](https://github.com/jaydenseric/apollo-upload-server/pull/39).
  - Explained how to use `processRequest` for custom middleware.
  - Improved usage instructions.
  - Display oldest supported Node.js version.
  - Misc. tweaks including a simpler heading structure.

## 4.0.0-alpha.3

### Minor

- Updated peer dependencies to support `graphql@0.12`, via [#36](https://github.com/jaydenseric/apollo-upload-server/pull/36).

### Patch

- Updated dependencies.

## 4.0.0-alpha.2

### Minor

- Transpile and polyfill for Node.js v6.10+ (down from v7.6+) to [support AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html), fixing [#33](https://github.com/jaydenseric/apollo-upload-server/issues/33).
- Modular project structure that works better for native ESM.
- Added tests.
- Set up Travis to test using the latest stable Node.js version and the oldest supported in `package.json` `engines` (v6.10).
- Added a Travis readme badge.
- Improved error handling, fixing [#26](https://github.com/jaydenseric/apollo-upload-server/issues/26):
  - Custom errors are thrown or emitted with meaningful messages that are exported so consumers can use `instanceof` with them.
  - Where it makes sense, errors cause relevant HTTP status codes to be set in middleware.
  - [Misordered multipart fields](https://github.com/jaydenseric/graphql-multipart-request-spec) cause `processRequest` to throw `MapBeforeOperationsUploadError` and `FilesBeforeMapUploadError` errors in middleware.
  - The `map` field provided by the client is used to naively check the `maxFiles` option is not exceeded for a speedy `MaxFilesUploadError` error in middleware. The real number of files parsed is checked too, incase the request is malformed.
  - If files are missing from the request the `scalar Upload` promises reject with a `FileMissingUploadError` error.
  - Already if a file exceeds the `maxFileSize` option the file is truncated, the stream emits a `limit` event and `stream.truncated === true`. Now an `error` event is also emitted with a `MaxFileSizeUploadError`.
  - Aborting requests from the client causes `scalar Upload` promises to reject with a `UploadPromiseDisconnectUploadError` error for file upload streams that have not yet been parsed. For streams being parsed an `error` event is emitted with an `FileStreamDisconnectUploadError` error and `stream.truncated === true`. It is up to consumers to cleanup aborted streams in their resolvers.

### Patch

- Updated dependencies.
- Smarter Babel config with `.babelrc.js`.
- Refactor to use fewer Busboy event listeners.

## 4.0.0-alpha.1

### Major

- New API to support the [GraphQL multipart request spec v2.0.0-alpha.2](https://github.com/jaydenseric/graphql-multipart-request-spec/releases/tag/v2.0.0-alpha.2). Files no longer upload to the filesystem; [readable streams](https://nodejs.org/api/stream.html#stream_readable_streams) are used in resolvers instead. Fixes [#13](https://github.com/jaydenseric/apollo-upload-server/issues/13) via [#22](https://github.com/jaydenseric/apollo-upload-server/pull/22).
- Export a new `Upload` scalar type to use in place of the old `Upload` input type. It represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`.
- Deprecated the `uploadDir` middleware option.
- `graphql` is now a peer dependency.

### Minor

- Added new `maxFieldSize`, `maxFileSize` and `maxFiles` middleware options.

### Patch

- Middleware are now arrow functions.

## 3.0.0

### Major

- Updated Node.js support from v6.4+ to v7.6+.
- Express middleware now passes on errors instead of blocking, via [#20](https://github.com/jaydenseric/apollo-upload-server/pull/20).

### Patch

- Using Babel directly, dropping Rollup.
- New directory structure for compiled files.
- Module files now have `.mjs` extension.
- No longer publish the `src` directory.
- No more sourcemaps.
- Use an arrow function for the Koa middleware, to match the Express middleware.
- Compiled code is now prettier.
- Prettier markdown files.
- Updated package keywords.
- Updated an Apollo documentation link in the changelog.
- Readme improvements:
  - Added links to badges.
  - Removed the inspiration links; they are less relevant to the evolved codebase.
  - Fixed an Apollo link.
  - Replaced example resolver code with a link to the [Apollo upload examples](https://github.com/jaydenseric/apollo-upload-examples).

## 2.0.4

### Patch

- Updated dependencies.
- Readme tweaks including a new license badge.

## 2.0.3

### Patch

- Updated dependencies.
- Removed `package-lock.json`. Lockfiles are [not recommended](https://github.com/sindresorhus/ama/issues/479#issuecomment-310661514) for packages.
- Moved Babel config out of `package.json` to prevent issues when consumers run Babel over `node_modules`.
- Readme tweaks and fixes:
  - Renamed the `File` input type `Upload` for clarity.
  - Wording and formatting improvements.
  - Covered React Native.
  - Documented custom middleware.

## 2.0.2

### Patch

- Updated dependencies.
- Added a changelog.
- Dropped Yarn in favor of npm@5. Removed `yarn.lock` and updated install instructions.
- Set targeted Node version as a string for `babel-preset-env`.
- New ESLint config. Dropped [Standard Style](https://standardjs.com) and began using [Prettier](https://github.com/prettier/eslint-plugin-prettier).
- Using [lint-staged](https://github.com/okonet/lint-staged) to ensure contributors don't commit lint errors.
- Removed `build:watch` script. Use `npm run build -- --watch` directly.

## 2.0.1

### Patch

- Updated dependencies.
- Support regular requests from clients other than apollo-upload-client again, fixing [#4](https://github.com/jaydenseric/apollo-upload-server/issues/4).
- Removed incorrect commas from example GraphQL input type.

## 2.0.0

### Major

- Support `apollo-upload-client` v3 and [query batching](https://apollographql.com/docs/apollo-server/requests#batching).

### Patch

- Clearer package description.
- Use [Standard Style](https://standardjs.com) instead of ESLint directly.

## 1.1.0

### Minor

- Exporting a new helper function for processing requests. It can be used to create custom middleware, or middleware for unsupported routers.
- Exporting new Koa middleware.
- Upload directory is ensured on every request now. While slightly less efficient, it prevents major errors when if it is deleted while the server is running.

### Patch

- Updated dependencies.
- Documented npm install as well as Yarn.
- Typo fix in the readme.

## 1.0.2

### Patch

- Fixed broken Github deep links in the readme.
- Readme rewording.
- Simplified `package.json` description.

## 1.0.1

### Patch

- Added missing metadata to `package.json`.
- Added a link to apollographql/graphql-server in the readme.

## 1.0.0

Initial release.
