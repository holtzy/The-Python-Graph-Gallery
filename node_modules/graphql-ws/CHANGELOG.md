# [3.1.0](https://github.com/enisdenjo/graphql-ws/compare/v3.0.2...v3.1.0) (2020-12-11)


### Bug Fixes

* **client:** Time retries and socket change waits ([7c707db](https://github.com/enisdenjo/graphql-ws/commit/7c707db3c8c3b1991a7e1b95a225efd8d58d5615)), closes [#85](https://github.com/enisdenjo/graphql-ws/issues/85)


### Features

* **client:** `onNonLazyError` allows you to catch errors reported in non-lazy mode ([cd1e7df](https://github.com/enisdenjo/graphql-ws/commit/cd1e7df70ab63b59bbfac1354b8779173fb1f333))

## [3.0.2](https://github.com/enisdenjo/graphql-ws/compare/v3.0.1...v3.0.2) (2020-12-10)


### Bug Fixes

* **client:** No retries when disposed ([0d5e6c2](https://github.com/enisdenjo/graphql-ws/commit/0d5e6c259eee5e331c5cef92246888745edda5a4))

## [3.0.1](https://github.com/enisdenjo/graphql-ws/compare/v3.0.0...v3.0.1) (2020-12-10)


### Performance Improvements

* **client:** Await timeouts only in recursive connects ([55c8fc8](https://github.com/enisdenjo/graphql-ws/commit/55c8fc8aba5dfb5ff3c66a11946f85ec631b1d41))

# [3.0.0](https://github.com/enisdenjo/graphql-ws/compare/v2.0.1...v3.0.0) (2020-12-09)


### Features

* **client:** Retry with randomised exponential backoff or provide your own strategy ([#84](https://github.com/enisdenjo/graphql-ws/issues/84)) ([d3e7a17](https://github.com/enisdenjo/graphql-ws/commit/d3e7a171603a3ef181c5af533768dcda416a1731))


### BREAKING CHANGES

* **client:** Client `retryTimeout` option has been replaced with the new `retryWait`.

`retryWait` allows you to control the retry timeout strategy by resolving the returned promise when ready. The default implements the randomised exponential backoff like so:
```ts
// this is the default
const retryWait = async function randomisedExponentialBackoff(retries: number) {
  let retryDelay = 1000; // start with 1s delay
  for (let i = 0; i < retries; i++) {
    retryDelay *= 2; // square `retries` times
  }
  await new Promise((resolve) =>
    setTimeout(
      // resolve pending promise with added random timeout from 300ms to 3s
      resolve,
      retryDelay + Math.floor(Math.random() * (3000 - 300) + 300),
    ),
  );
};
```

## [2.0.1](https://github.com/enisdenjo/graphql-ws/compare/v2.0.0...v2.0.1) (2020-12-03)


### Bug Fixes

* **client:** Close event's `wasClean` is not necessary ([2c65f0e](https://github.com/enisdenjo/graphql-ws/commit/2c65f0ee91a6372a9c2935183d9be0be50f40663)), closes [#81](https://github.com/enisdenjo/graphql-ws/issues/81)

# [2.0.0](https://github.com/enisdenjo/graphql-ws/compare/v1.14.0...v2.0.0) (2020-11-20)


### Features

* **server:** Make and use with your own flavour ([#64](https://github.com/enisdenjo/graphql-ws/issues/64)) ([38bde87](https://github.com/enisdenjo/graphql-ws/commit/38bde87122f4c39b0357c636fd98bfee886dd6e5)), closes [#61](https://github.com/enisdenjo/graphql-ws/issues/61) [#73](https://github.com/enisdenjo/graphql-ws/issues/73) [#75](https://github.com/enisdenjo/graphql-ws/issues/75)


### BREAKING CHANGES

* **server:** You now "make" a ready-to-use server that can be used with _any_ WebSocket implementation!

Summary of breaking changes:
- No more `keepAlive`. The user should provide its own keep-alive implementation. _(I highly recommend [WebSocket Ping and Pongs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#Pings_and_Pongs_The_Heartbeat_of_WebSockets))_
- No more HTTP `request` in the server context.
- No more WebSocket in the server context (you're the one that creates it).
- You use your own WebSocket server
- Server exports only `makeServer` _(no more `createServer`)_

### Benefits
- You're responsible for the server (_any_ optimisation or adjustment can be applied)
- Any WebSocket server can be used (or even mocked if necessary)
- You control the disposal of the server (close or transfer clients however you wish)
- New `extra` field in the `Context` for storing custom values useful for callbacks
- Full control of authentication flow
- Full control over error handling
- True zero-dependency

### Migrating from v1

**Only the server has to be migrated.** Since this release allows you to use your favourite WebSocket library (or your own implementation), using [ws](https://github.com/websockets/ws) is just one way of using `graphql-ws`. This is how to use the implementation shipped with the lib:

```ts
/**
 * ❌ instead of the lib creating a WebSocket server internally with the provided arguments
 */
import https from 'https';
import { createServer } from 'graphql-ws';

const server = https.createServer(...);

createServer(
  {
    onConnect(ctx) {
      // were previously directly on the context
      ctx.request as IncomingRequest
      ctx.socket as WebSocket
    },
    ...rest,
  },
  {
    server,
    path: '/graphql',
  },
);

/**
 * ✅ you have to supply the server yourself
 */
import https from 'https';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws'; // notice the import path

const server = https.createServer(...);
const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

useServer(
  {
    onConnect(ctx) {
      // are now in the `extra` field
      ctx.extra.request as IncomingRequest
      ctx.extra.socket as WebSocket
    },
    ...rest,
  },
  wsServer,
  // optional keepAlive with ping pongs (defaults to 12 seconds)
);
```

# [1.14.0](https://github.com/enisdenjo/graphql-ws/compare/v1.13.1...v1.14.0) (2020-11-15)


### Features

* **server:** `context` may return a promise ([cd5c2f8](https://github.com/enisdenjo/graphql-ws/commit/cd5c2f8d0f9d11889052601c0fabdb8c6ed607fa)), closes [#74](https://github.com/enisdenjo/graphql-ws/issues/74)

## [1.13.1](https://github.com/enisdenjo/graphql-ws/compare/v1.13.0...v1.13.1) (2020-11-14)


### Bug Fixes

* **client:** Some close events are not worth retrying ([4d9134b](https://github.com/enisdenjo/graphql-ws/commit/4d9134b8704446f0b2674c71e25d7c6c44000c9a))
* **message:** Allow `data` field to be of any type ([533248e](https://github.com/enisdenjo/graphql-ws/commit/533248e0bcfd857c7960c9e8671cbd300788ad7d)), closes [#72](https://github.com/enisdenjo/graphql-ws/issues/72)
* **message:** Allow `payload` field to be of any type for `NextMessage` ([7cebbfe](https://github.com/enisdenjo/graphql-ws/commit/7cebbfe00dc3c360e80e8962f345a28743b49c1f)), closes [#72](https://github.com/enisdenjo/graphql-ws/issues/72)
* Use `ID` type for message id field ([87ebd35](https://github.com/enisdenjo/graphql-ws/commit/87ebd357da73ec83d72583f1c82fc14dfe2ffe5a))

# [1.13.0](https://github.com/enisdenjo/graphql-ws/compare/v1.12.0...v1.13.0) (2020-11-12)


### Bug Fixes

* **client:** One cleanup per subscription ([#67](https://github.com/enisdenjo/graphql-ws/issues/67)) ([5a5ae4d](https://github.com/enisdenjo/graphql-ws/commit/5a5ae4d01afd0c9aa51090342d7f699daf4fbafc))
* Stop sending messages after receiving complete ([#65](https://github.com/enisdenjo/graphql-ws/issues/65)) ([3f4f836](https://github.com/enisdenjo/graphql-ws/commit/3f4f836c395139617a268082131084c4f992ba5f))


### Features

* **client:** `connectionParams` may return a promise ([#71](https://github.com/enisdenjo/graphql-ws/issues/71)) ([33f210c](https://github.com/enisdenjo/graphql-ws/commit/33f210ce3796f3b961fa5ca03af938cfd899c9b9))
* **client:** Allow keeping the connection alive for some time before lazy closing ([#69](https://github.com/enisdenjo/graphql-ws/issues/69)) ([555c2c3](https://github.com/enisdenjo/graphql-ws/commit/555c2c35b84a864ac5732976e704eed9fcacd08c))

# [1.12.0](https://github.com/enisdenjo/graphql-ws/compare/v1.11.0...v1.12.0) (2020-11-07)


### Bug Fixes

* **client:** Close with error message during connecting issues ([f8ecdd7](https://github.com/enisdenjo/graphql-ws/commit/f8ecdd78e200a6a752ec1e72fb14d83e6103dd02))


### Features

* Send optional payload with the `ConnectionAck` message ([#60](https://github.com/enisdenjo/graphql-ws/issues/60)) ([1327e77](https://github.com/enisdenjo/graphql-ws/commit/1327e7735fc52f8318644b0f4cec86d3288a0e68))

# [1.11.0](https://github.com/enisdenjo/graphql-ws/compare/v1.10.0...v1.11.0) (2020-11-04)


### Bug Fixes

* Node 10 is the min supported version ([19844d7](https://github.com/enisdenjo/graphql-ws/commit/19844d72f4638f9f7126870f9d9a744cdb4814c4))
* Support more `graphql` versions ([de69b4e](https://github.com/enisdenjo/graphql-ws/commit/de69b4ea39905f9b3343711e9defe68c6746b842))
* **server:** Close socket if `onSubscribe` returns invalid array ([#53](https://github.com/enisdenjo/graphql-ws/issues/53)) ([0464a54](https://github.com/enisdenjo/graphql-ws/commit/0464a54eee09dfdf66d65bf539a4d8f596be2697))
* **server:** Consistently set `rootValue` and `contextValue`, if not overridden ([#49](https://github.com/enisdenjo/graphql-ws/issues/49)) ([7aa3bcd](https://github.com/enisdenjo/graphql-ws/commit/7aa3bcdd38d40e83306f867a5b6b1bd612ec5fe3))
* **server:** Distribute server error to all clients even if one error listener throws ([#56](https://github.com/enisdenjo/graphql-ws/issues/56)) ([b96dbb9](https://github.com/enisdenjo/graphql-ws/commit/b96dbb98bb6f71956321ce1202af0af50df4e40e))
* **server:** Don't surface bad request error details in production ([#55](https://github.com/enisdenjo/graphql-ws/issues/55)) ([70317b2](https://github.com/enisdenjo/graphql-ws/commit/70317b2619b7729e5d5556b4e5388f142414b082))


### Features

* `cjs`, `esm` and `umd` builds with minification and compression for the browser ([#58](https://github.com/enisdenjo/graphql-ws/issues/58)) ([ebb8dfe](https://github.com/enisdenjo/graphql-ws/commit/ebb8dfe8a1e50507bcc2b0929600d755ddd98b1d))


### Performance Improvements

* Reduce runtime prototype traversal for hasOwnProperty ([#52](https://github.com/enisdenjo/graphql-ws/issues/52)) ([1bb9218](https://github.com/enisdenjo/graphql-ws/commit/1bb9218ad3ee9442442122c1d10910d51951b763))

# [1.10.0](https://github.com/enisdenjo/graphql-ws/compare/v1.9.3...v1.10.0) (2020-11-03)


### Features

* Subscribe message `query` must be a string ([#45](https://github.com/enisdenjo/graphql-ws/issues/45)) ([60d9cd5](https://github.com/enisdenjo/graphql-ws/commit/60d9cd5509d1b989f3ca6a9370850ce0aae41522))
* **server:** For dynamic usage, `context` option can be a function too ([#46](https://github.com/enisdenjo/graphql-ws/issues/46)) ([149b582](https://github.com/enisdenjo/graphql-ws/commit/149b58266859d6f275c186581f71c3aff52cb4a3))

## [1.9.3](https://github.com/enisdenjo/graphql-ws/compare/v1.9.2...v1.9.3) (2020-10-31)


### Bug Fixes

* Drop TypeScript DOM lib dependency ([a81e8c1](https://github.com/enisdenjo/graphql-ws/commit/a81e8c1ea080984ddd6d5e58c154b866ee44c14c))
* Support more Node versions by not using `globalThis` ([79c2ed2](https://github.com/enisdenjo/graphql-ws/commit/79c2ed2056b69bd9b56984947d78897e36594b80))

## [1.9.2](https://github.com/enisdenjo/graphql-ws/compare/v1.9.1...v1.9.2) (2020-10-31)


### Bug Fixes

* **server:** Make sure to use `onSubscribe` result exclusively ([51fdb7c](https://github.com/enisdenjo/graphql-ws/commit/51fdb7c75487c399267f04a4ea2146f2e964d4cf))
* Export useful types ([e4cc4d4](https://github.com/enisdenjo/graphql-ws/commit/e4cc4d4df8efb77aed14053a32af3464dc2a95db))
* **client:** Accept nullish values for `operationName` and `variables` ([2d60dda](https://github.com/enisdenjo/graphql-ws/commit/2d60dda93c09b0c8d7b69241833174f991d7b450))

## [1.9.1](https://github.com/enisdenjo/graphql-ws/compare/v1.8.2...v1.9.0) (2020-10-25)


### Features

* Package rename `graphql-transport-ws` 👉 `graphql-ws`. ([#43](https://github.com/enisdenjo/graphql-ws/pull/43))

# [1.9.0](https://github.com/enisdenjo/graphql-ws/compare/v1.8.2...v1.9.0) (2020-10-24)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Features

* **server:** More callbacks, clearer differences and higher extensibility ([#40](https://github.com/enisdenjo/graphql-ws/issues/40)) ([507a222](https://github.com/enisdenjo/graphql-ws/commit/507a2226719efacf6180705beb8bb9d88f80d7f3))


### BREAKING CHANGES

_Should've been a major release but `semantic-release` didn't detect the breaking changes of the [507a222](https://github.com/enisdenjo/graphql-ws/commit/507a2226719efacf6180705beb8bb9d88f80d7f3) commit, so here we are..._

This time we come with a few breaking changes that will open doors for all sorts of enhancements. Check the linked PR for more details.

#### Server option `onSubscribe`
- Now executes _before_ any other subscribe message processing
- Now takes 2 arguments, the `Context` and the `SubscribeMessage`
- Now returns nothing,`ExecutionArgs` or an array of `GraphQLError`s
  - Returning `void` (or nothing) will leave the execution args preparation and validation to the library
  - Returned `ExecutionArgs` will be used **directly** for the GraphQL operation execution (preparations and validation should be done by you in this case)
  - Returned array of `GraphQLError`s will be reported to the client through the `ErrorMessage`

#### Server option `validationRules`
Dropped in favour of applying custom validation rules in the `onSubscribe` callback. Find the recipe in the readme!

#### Server option `formatExecutionResult`
Dropped in favour of using the return value of `onNext` callback.

## [1.8.2](https://github.com/enisdenjo/graphql-ws/compare/v1.8.1...v1.8.2) (2020-10-22)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* **server:** No need to bind `this` scope ([f76ac73](https://github.com/enisdenjo/graphql-ws/commit/f76ac73e9d21c80abe0118007e168e4f5d525036))

## [1.8.1](https://github.com/enisdenjo/graphql-ws/compare/v1.8.0...v1.8.1) (2020-10-22)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* yarn engine is not required ([#34](https://github.com/enisdenjo/graphql-ws/issues/34)) ([89484b8](https://github.com/enisdenjo/graphql-ws/commit/89484b89d6f561d0eb43d64e8c1ee568bcfebcd6))
* **server:** Hide internal server error messages from the client in production ([36fe405](https://github.com/enisdenjo/graphql-ws/commit/36fe405e0e7d5942f858073797cc85bb41739a1d)), closes [#31](https://github.com/enisdenjo/graphql-ws/issues/31)

# [1.8.0](https://github.com/enisdenjo/graphql-ws/compare/v1.7.0...v1.8.0) (2020-10-19)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Features

* **server:** Support returning multiple results from `execute` ([#28](https://github.com/enisdenjo/graphql-ws/issues/28)) ([dbbd88b](https://github.com/enisdenjo/graphql-ws/commit/dbbd88bb26843da55d9558e7a44bff3108f095ab))

# [1.7.0](https://github.com/enisdenjo/graphql-ws/compare/v1.6.0...v1.7.0) (2020-10-01)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* **client:** Dispose of subscription on complete or error messages ([#23](https://github.com/enisdenjo/graphql-ws/issues/23)) ([fb4d8e9](https://github.com/enisdenjo/graphql-ws/commit/fb4d8e9efdfdd0cbe3b7cc34ddadbad3a795ae35))
* **server:** `subscription` operations are distinct on the message ID ([#24](https://github.com/enisdenjo/graphql-ws/issues/24)) ([dfffb05](https://github.com/enisdenjo/graphql-ws/commit/dfffb0502be5dd9ab5598e785b9988b1f4000227))


### Features

* **client:** Optional `generateID` to provide subscription IDs ([#22](https://github.com/enisdenjo/graphql-ws/issues/22)) ([9a3f54a](https://github.com/enisdenjo/graphql-ws/commit/9a3f54a8198379b402a8abe414ab5727ccec45cf)), closes [#21](https://github.com/enisdenjo/graphql-ws/issues/21)

# [1.6.0](https://github.com/enisdenjo/graphql-ws/compare/v1.5.0...v1.6.0) (2020-09-28)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Features

* **client:** Support providing custom WebSocket implementations ([#18](https://github.com/enisdenjo/graphql-ws/issues/18)) ([1515fe2](https://github.com/enisdenjo/graphql-ws/commit/1515fe2adcc0bb2b18a1309550f4e41528985f54))

# [1.5.0](https://github.com/enisdenjo/graphql-ws/compare/v1.4.2...v1.5.0) (2020-09-18)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* **server:** Use `subscribe` from the config ([6fbd47c](https://github.com/enisdenjo/graphql-ws/commit/6fbd47c2ef14a6ae4297ffe0aaa689eeb3741ed0))


### Features

* **server:** Define execution/subscription `context` in creation options ([5b3d253](https://github.com/enisdenjo/graphql-ws/commit/5b3d25351cdd2714a1edb9833ab2c2c7a9316944)), closes [#13](https://github.com/enisdenjo/graphql-ws/issues/13)

## [1.4.2](https://github.com/enisdenjo/graphql-ws/compare/v1.4.1...v1.4.2) (2020-09-16)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* **server:** Receiving more than one `ConnectionInit` message closes the socket immediately ([757c6e9](https://github.com/enisdenjo/graphql-ws/commit/757c6e966ffa1756cca2687b0275d7d7eff2ce87))

## [1.4.1](https://github.com/enisdenjo/graphql-ws/compare/v1.4.0...v1.4.1) (2020-09-11)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Performance Improvements

* **client:** Memoize message parsing for each subscriber ([2a7ba46](https://github.com/enisdenjo/graphql-ws/commit/2a7ba4642c0ea1a3294b8b3ea3440957ec7fcb7b))

# [1.4.0](https://github.com/enisdenjo/graphql-ws/compare/v1.3.0...v1.4.0) (2020-09-10)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* **client:** Only `query` is required in the subscribe payload ([e892530](https://github.com/enisdenjo/graphql-ws/commit/e892530b37108a210976e416b2f5eb3004be7ad3))


### Features

* **server:** Pass roots for operation fields as an option ([dcb5ed4](https://github.com/enisdenjo/graphql-ws/commit/dcb5ed4dcc3c4569b104b2cbe9979161fad2ff0a))

# [1.3.0](https://github.com/enisdenjo/graphql-ws/compare/v1.2.0...v1.3.0) (2020-09-10)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Features

* WebSocket Ping and Pong as keep-alive ([#11](https://github.com/enisdenjo/graphql-ws/issues/11)) ([16ae316](https://github.com/enisdenjo/graphql-ws/commit/16ae316b35a90d45f379336ec3ed5bedf3f2e28e))
* **client:** Emit events for `connecting`, `connected` and `closed` ([627775b](https://github.com/enisdenjo/graphql-ws/commit/627775b8e1aca8f359607020ff2c3bcc37b50787))
* **client:** Implement silent-reconnects ([c6f7872](https://github.com/enisdenjo/graphql-ws/commit/c6f7872126300befcc47e8e46e82342c2924f453)), closes [#7](https://github.com/enisdenjo/graphql-ws/issues/7)
* **client:** Lazy option can be changed ([fb0ec14](https://github.com/enisdenjo/graphql-ws/commit/fb0ec1478e5219eb75e6bf2a1c2fd2a3a9cbb90d))

# [1.2.0](https://github.com/enisdenjo/graphql-ws/compare/v1.1.1...v1.2.0) (2020-09-04)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Features

* Package rename `@enisdenjo/graphql-transport-ws` 👉 `graphql-transport-ws`. ([494f676](https://github.com/enisdenjo/graphql-ws/commit/494f6766279325769e81f52ce7b4b442c85f9476))

## [1.1.1](https://github.com/enisdenjo/graphql-ws/compare/v1.1.0...v1.1.1) (2020-08-28)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* add the sink to the subscribed map AFTER emitting a subscribe message ([814f46c](https://github.com/enisdenjo/graphql-ws/commit/814f46c119792aaa240d0fcdb318dccdd1cc0e87))
* notify only relevant sinks about errors or completions ([62155ba](https://github.com/enisdenjo/graphql-ws/commit/62155ba0b79516141633b86765921b2401fcc2ed))

# [1.1.0](https://github.com/enisdenjo/graphql-ws/compare/v1.0.2...v1.1.0) (2020-08-28)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* **server:** allow skipping init message wait with zero values ([a7419df](https://github.com/enisdenjo/graphql-ws/commit/a7419df077acb018418016c7a06716fb3c054ddb))
* **server:** use subscription specific formatter for queries and mutations too ([5672a04](https://github.com/enisdenjo/graphql-ws/commit/5672a045332ea835e6ff7ce862c7c2a46729363b))


### Features

* **client:** introduce Socky 🧦 - the nifty internal socket state manager ([#8](https://github.com/enisdenjo/graphql-ws/issues/8)) ([a4bee6f](https://github.com/enisdenjo/graphql-ws/commit/a4bee6fb8c1bd56637363a76f6ab0c3b64f55931))

## [1.0.2](https://github.com/enisdenjo/graphql-ws/compare/v1.0.1...v1.0.2) (2020-08-26)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* correctly detect WebSocket server ([eab29dc](https://github.com/enisdenjo/graphql-ws/commit/eab29dcae3d031a117de37dee09770833e9573cf))

## [1.0.1](https://github.com/enisdenjo/graphql-ws/compare/v1.0.0...v1.0.1) (2020-08-26)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Bug Fixes

* reset connected/connecting state when disconnecting and disposing ([2eb3cd5](https://github.com/enisdenjo/graphql-ws/commit/2eb3cd5965cf34f6d6b21748daea520163b9c789))
* **client:** cant read the `CloseEvent.reason` after bundling so just pass the whole event to the sink error and let the user handle it ([9ccb46b](https://github.com/enisdenjo/graphql-ws/commit/9ccb46bc80024cb2de823702d2bd308052c6c516))
* **client:** send complete message and close only if socket is still open ([49b75ce](https://github.com/enisdenjo/graphql-ws/commit/49b75cec60fec9c8a42119b124a9c54d29d30308))
* http and ws have no default exports ([5c01ed9](https://github.com/enisdenjo/graphql-ws/commit/5c01ed924793ce17f036d26d9d5d63cd5cecc6aa))
* include `types` file holding important types ([f3e4edf](https://github.com/enisdenjo/graphql-ws/commit/f3e4edf96e5c6cecf025811e2beb7ecc324ea962))
* **server:** scoped execution result formatter from `onConnect` ([f91fadb](https://github.com/enisdenjo/graphql-ws/commit/f91fadb6464a6e74f9a11555026dd5f9279df563))
* export both the client and the server from index ([29923b1](https://github.com/enisdenjo/graphql-ws/commit/29923b1e35a462c5b5a19d64603d59f25c1c5987))
* **server:** store the intial request in the context ([6927ee0](https://github.com/enisdenjo/graphql-ws/commit/6927ee01c0b8224f8290322a964e70382614d0e8))

# [1.0.0](https://github.com/enisdenjo/graphql-ws/compare/v0.0.2...v1.0.0) (2020-08-17)

### ⚠️ Deprecated

Package has been renamed from [`graphql-transport-ws`](https://www.npmjs.com/package/graphql-transport-ws) to [`graphql-ws`](https://www.npmjs.com/package/graphql-ws).

### Features

* **client:** Re-implement following the new transport protocol ([#6](https://github.com/enisdenjo/graphql-ws/issues/6)) ([5191a35](https://github.com/enisdenjo/graphql-ws/commit/5191a358098c6f9a661ae90e0420fa430db9152c))
* **server:** Implement following the new transport protocol ([#1](https://github.com/enisdenjo/graphql-ws/issues/1)) ([a412d25](https://github.com/enisdenjo/graphql-ws/commit/a412d2570e484046a058c11f39813c7794ec9147))
* Rewrite GraphQL over WebSocket Protocol ([#2](https://github.com/enisdenjo/graphql-ws/issues/2)) ([42045c5](https://github.com/enisdenjo/graphql-ws/commit/42045c577de9d95a81a37d850b38f4482914cebd))


### BREAKING CHANGES

* This lib is no longer compatible with [`subscriptions-transport-ws`](https://github.com/apollographql/subscriptions-transport-ws). It follows a [redesigned transport protocol](https://github.com/enisdenjo/graphql-ws/blob/2b8c3f095d382d299e9e1670eb907b37591626ca/PROTOCOL.md) aiming to improve security, stability and reduce ambiguity.
