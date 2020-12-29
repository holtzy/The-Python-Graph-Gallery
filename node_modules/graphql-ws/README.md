<div align="center">
  <br />

![GraphQLOverWebSocket](https://user-images.githubusercontent.com/25294569/94527042-172dba00-023f-11eb-944b-88c0bd58a8d2.gif)

  <h6>Coherent, zero-dependency, lazy, simple, <a href="PROTOCOL.md">GraphQL over WebSocket Protocol</a> compliant server and client.</h6>

[![Continuous integration](https://github.com/enisdenjo/graphql-ws/workflows/Continuous%20integration/badge.svg)](https://github.com/enisdenjo/graphql-ws/actions?query=workflow%3A%22Continuous+integration%22) [![graphql-ws](https://img.shields.io/npm/v/graphql-ws.svg?label=graphql-ws&logo=npm)](https://www.npmjs.com/package/graphql-ws)

  <br />
</div>

## Getting started

#### Install

```shell
$ yarn add graphql-ws
```

#### Create a GraphQL schema

```ts
import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Subscription {
    greetings: String
  }
`);

// The roots provide resolvers for each GraphQL operation
const roots = {
  query: {
    hello: () => 'Hello World!',
  },
  subscription: {
    greetings: async function* sayHiIn5Languages() {
      for (const hi of ['Hi', 'Bonjour', 'Hola', 'Ciao', 'Zdravo']) {
        yield { greetings: hi };
      }
    },
  },
};
```

#### Start the server

```ts
import https from 'https';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { execute, subscribe } from 'graphql';

const server = https.createServer(function weServeSocketsOnly(_, res) {
  res.writeHead(404);
  res.end();
});

const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

useServer(
  {
    schema, // from the previous step
    roots, // from the previous step
    execute,
    subscribe,
  },
  wsServer,
);

server.listen(443);
```

#### Use the client

```ts
import { createClient } from 'graphql-ws';

const client = createClient({
  url: 'wss://welcomer.com/graphql',
});

// query
(async () => {
  const result = await new Promise((resolve, reject) => {
    let result;
    client.subscribe(
      {
        query: '{ hello }',
      },
      {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      },
    );
  });

  expect(result).toEqual({ hello: 'Hello World!' });
})();

// subscription
(async () => {
  const onNext = () => {
    /**/
  };

  await new Promise((resolve, reject) => {
    client.subscribe(
      {
        query: 'subscription { greetings }',
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      },
    );
  });

  expect(onNext).toBeCalledTimes(5); // we say "Hi" in 5 languages
})();
```

## Recipes

<details id="promise">
<summary><a href="#promise">🔗</a> Client usage with Promise</summary>

```ts
import { createClient, SubscribePayload } from 'graphql-ws';

const client = createClient({
  url: 'wss://hey.there/graphql',
});

async function execute<T>(payload: SubscribePayload) {
  return new Promise<T>((resolve, reject) => {
    let result: T;
    client.subscribe<T>(payload, {
      next: (data) => (result = data),
      error: reject,
      complete: () => resolve(result),
    });
  });
}

// use
(async () => {
  try {
    const result = await execute({
      query: '{ hello }',
    });
    // complete
    // next = result = { data: { hello: 'Hello World!' } }
  } catch (err) {
    // error
  }
})();
```

</details>

<details id="async-iterator">
<summary><a href="#async-iterator">🔗</a> Client usage with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator">AsyncIterator</a></summary>

```ts
import { createClient, SubscribePayload } from 'graphql-ws';

const client = createClient({
  url: 'wss://iterators.ftw/graphql',
});

function subscribe<T>(payload: SubscribePayload): AsyncIterableIterator<T> {
  let deferred: {
    resolve: (done: boolean) => void;
    reject: (err: unknown) => void;
  } | null = null;
  const pending: T[] = [];
  let throwMe: unknown = null,
    done = false;
  const dispose = client.subscribe<T>(payload, {
    next: (data) => {
      pending.push(data);
      deferred?.resolve(false);
    },
    error: (err) => {
      throwMe = err;
      deferred?.reject(throwMe);
    },
    complete: () => {
      done = true;
      deferred?.resolve(true);
    },
  });
  return {
    [Symbol.asyncIterator]() {
      return this;
    },
    async next() {
      if (done) return { done: true, value: undefined };
      if (throwMe) throw throwMe;
      if (pending.length) return { value: pending.shift()! };
      return (await new Promise<boolean>(
        (resolve, reject) => (deferred = { resolve, reject }),
      ))
        ? { done: true, value: undefined }
        : { value: pending.shift()! };
    },
    async return() {
      dispose();
      return { done: true, value: undefined };
    },
  };
}

(async () => {
  const subscription = subscribe({
    query: 'subscription { greetings }',
  });
  // subscription.return() to dispose

  for await (const result of subscription) {
    // next = result = { data: { greetings: 5x } }
  }
  // complete
})();
```

</details>

<details id="observable">
<summary><a href="#observable">🔗</a> Client usage with <a href="https://github.com/tc39/proposal-observable">Observable</a></summary>

```ts
import { Observable } from 'relay-runtime';
// or
import { Observable } from '@apollo/client';
// or
import { Observable } from 'rxjs';
// or
import Observable from 'zen-observable';
// or any other lib which implements Observables as per the ECMAScript proposal: https://github.com/tc39/proposal-observable

const client = createClient({
  url: 'wss://graphql.loves/observables',
});

function toObservable(operation) {
  return new Observable((observer) => client.subscribe(operation, observer));
}

const observable = toObservable({ query: `subscription { ping }` });

const subscription = observable.subscribe({
  next: (data) => {
    expect(data).toBe({ data: { ping: 'pong' } });
  },
});

// ⏱

subscription.unsubscribe();
```

</details>

<details id="relay">
<summary><a href="#relay">🔗</a> Client usage with <a href="https://relay.dev">Relay</a></summary>

```ts
import { GraphQLError } from 'graphql';
import {
  Network,
  Observable,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import { createClient } from 'graphql-ws';

const subscriptionsClient = createClient({
  url: 'wss://i.love/graphql',
  connectionParams: () => {
    const session = getSession();
    if (!session) {
      return {};
    }
    return {
      Authorization: `Bearer ${session.token}`,
    };
  },
});

// yes, both fetch AND subscribe handled in one implementation
function fetchOrSubscribe(operation: RequestParameters, variables: Variables) {
  return Observable.create((sink) => {
    if (!operation.text) {
      return sink.error(new Error('Operation text cannot be empty'));
    }
    return subscriptionsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      {
        ...sink,
        error: (err) => {
          if (err instanceof Error) {
            sink.error(err);
          } else if (err instanceof CloseEvent) {
            sink.error(
              new Error(
                `Socket closed with event ${err.code}` + err.reason
                  ? `: ${err.reason}` // reason will be available on clean closes
                  : '',
              ),
            );
          } else {
            sink.error(
              new Error(
                (err as GraphQLError[])
                  .map(({ message }) => message)
                  .join(', '),
              ),
            );
          }
        },
      },
    );
  });
}

export const network = Network.create(fetchOrSubscribe, fetchOrSubscribe);
```

</details>

<details id="urql">
<summary><a href="#urql">🔗</a> Client usage with <a href="https://formidable.com/open-source/urql/">urql</a></summary>

```ts
import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

const wsClient = createWSClient({
  url: 'wss://its.urql/graphql',
});

const client = createClient({
  url: '/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return {
          subscribe: (sink) => {
            const dispose = wsClient.subscribe(operation, sink);
            return {
              unsubscribe: dispose,
            };
          },
        };
      },
    }),
  ],
});
```

</details>

<details id="apollo-client">
<summary><a href="#apollo-client">🔗</a> Client usage with <a href="https://www.apollographql.com">Apollo</a></summary>

```typescript
import { ApolloLink, Operation, FetchResult, Observable } from '@apollo/client';
import { print, GraphQLError } from 'graphql';
import { createClient, ClientOptions, Client } from 'graphql-ws';

class WebSocketLink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: (err) => {
            if (err instanceof Error) {
              sink.error(err);
            } else if (err instanceof CloseEvent) {
              sink.error(
                new Error(
                  `Socket closed with event ${err.code}` + err.reason
                    ? `: ${err.reason}` // reason will be available on clean closes
                    : '',
                ),
              );
            } else {
              sink.error(
                new Error(
                  (err as GraphQLError[])
                    .map(({ message }) => message)
                    .join(', '),
                ),
              );
            }
          },
        },
      );
    });
  }
}

const link = new WebSocketLink({
  url: 'wss://where.is/graphql',
  connectionParams: () => {
    const session = getSession();
    if (!session) {
      return {};
    }
    return {
      Authorization: `Bearer ${session.token}`,
    };
  },
});
```

</details>

<details id="retry-strategy">
<summary><a href="#retry-strategy">🔗</a> Client usage with custom retry timeout strategy</summary>

```typescript
import { createClient } from 'graphql-ws';
import { waitForHealthy } from 'my-servers';

const url = 'wss://i.want.retry/control/graphql';

const client = createClient({
  url,
  retryWait: async function waitForServerHealthyBeforeRetry() {
    // if you have a server healthcheck, you can wait for it to become
    // healthy before retrying after an abrupt disconnect (most commonly a restart)
    await waitForHealthy(url);

    // after the server becomes ready, wait for a second + random 0-3s timeout
    // (avoid DDoSing yourself) and try connecting again
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 3000),
    );
  },
});
```

</details>

<details id="browser">
<summary><a href="#browser">🔗</a> Client usage in browser</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>GraphQL over WebSocket</title>
    <script
      type="text/javascript"
      src="https://unpkg.com/graphql-ws/umd/graphql-ws.min.js"
    ></script>
  </head>
  <body>
    <script type="text/javascript">
      const client = graphqlWs.createClient({
        url: 'wss://umdfor.the/win/graphql',
      });

      // consider other recipes for usage inspiration
    </script>
  </body>
</html>
```

</details>

<details id="node-client">
<summary><a href="#node-client">🔗</a> Client usage in Node</summary>

```ts
const ws = require('ws'); // yarn add ws
const Crypto = require('crypto');
const { createClient } = require('graphql-ws');

const client = createClient({
  url: 'wss://no.browser/graphql',
  webSocketImpl: ws,
  /**
   * Generates a v4 UUID to be used as the ID.
   * Reference: https://stackoverflow.com/a/2117523/709884
   */
  generateID: () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (Crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16),
    ),
});

// consider other recipes for usage inspiration
```

</details>

<details id="ws">
<summary><a href="#ws">🔗</a> Server usage with <a href="https://github.com/websockets/ws">ws</a></summary>

```ts
// minimal version of `import { useServer } from 'graphql-ws/lib/use/ws';`

import http from 'http';
import ws from 'ws'; // yarn add ws
import { makeServer, ServerOptions } from 'graphql-ws';
import { execute, subscribe } from 'graphql';
import { schema } from 'my-graphql-schema';

// make
const server = makeServer({
  schema,
  execute,
  subscribe,
});

// create websocket server
const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

// implement
wsServer.on('connection', (socket, request) => {
  // a new socket opened, let graphql-ws take over
  const closed = server.opened(
    {
      protocol: socket.protocol, // will be validated
      send: (data) =>
        new Promise((resolve, reject) => {
          socket.send(data, (err) => (err ? reject(err) : resolve()));
        }), // control your data flow by timing the promise resole
      close: (code, reason) => socket.close(code, reason), // there are protocol standard closures
      onMessage: (cb) =>
        socket.on('message', async (event) => {
          try {
            // wait for the the operation to complete
            // - if query/mutation, waits for result
            // - if subscription, waits for complete
            await cb(event.toString());
          } catch (err) {
            // all errors that could be thrown during the
            // execution of operations, will be caught here
            socket.close(1011, err.message);
          }
        }),
    },
    // pass values to the `extra` field in the context
    { socket, request },
  );

  // notify server that the socket closed
  socket.once('close', () => closed());
});
```

</details>

<details id="ws-auth-handling">
<summary><a href="#ws-auth-handling">🔗</a> Server usage with <a href="https://github.com/websockets/ws">ws</a> and custom auth handling</summary>

```ts
// check extended implementation at `{ useServer } from 'graphql-ws/lib/use/ws'`

import http from 'http';
import ws from 'ws'; // yarn add ws
import { makeServer } from '../index';
import { execute, subscribe } from 'graphql';
import { schema } from 'my-graphql-schema';
import { validate } from 'my-auth';

// extra in the context
interface Extra {
  readonly request: http.IncomingMessage;
}

// your custom auth
class Forbidden extends Error {}
function handleAuth(request: http.IncomingMessage) {
  // do your auth on every subscription connect
  const good = validate(request.headers['authorization']);
  // or const { iDontApprove } = session(request.cookies);
  if (!good) {
    // throw a custom error to be handled
    throw new Forbidden(':(');
  }
}

// make
const server = makeServer<Extra>({
  schema,
  execute,
  subscribe,
  onConnect: async (ctx) => {
    // do your auth on every connect
    await handleAuth(ctx.extra.request);
  },
  onSubscribe: async (ctx) => {
    // or maybe on every subscribe
    await handleAuth(ctx.extra.request);
  },
  onNext: async (ctx) => {
    // haha why not on every result emission?
    await handleAuth(ctx.extra.request);
  },
});

// create websocket server
const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

// implement
wsServer.on('connection', (socket, request) => {
  // you may even reject the connection without ever reaching the lib
  // return socket.close(4403, 'Forbidden');

  // pass the connection to graphql-ws
  const closed = server.opened(
    {
      protocol: socket.protocol, // will be validated
      send: (data) =>
        new Promise((resolve, reject) => {
          // control your data flow by timing the promise resolve
          socket.send(data, (err) => (err ? reject(err) : resolve()));
        }),
      close: (code, reason) => socket.close(code, reason), // for standard closures
      onMessage: (cb) => {
        socket.on('message', async (event) => {
          try {
            // wait for the the operation to complete
            // - if init message, waits for connect
            // - if query/mutation, waits for result
            // - if subscription, waits for complete
            await cb(event.toString());
          } catch (err) {
            // all errors that could be thrown during the
            // execution of operations, will be caught here
            if (err instanceof Forbidden) {
              // your magic
            } else {
              socket.close(1011, err.message);
            }
          }
        });
      },
    },
    // pass request to the extra
    { request },
  );

  // notify server that the socket closed
  socket.once('close', () => closed());
});
```

</details>

<details id="express">
<summary><a href="#express">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage with <a href="https://github.com/graphql/express-graphql">Express GraphQL</a></summary>

```typescript
import https from 'https';
import ws from 'ws'; // yarn add ws
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { execute, subscribe } from 'graphql';
import { schema } from 'my-graphql-schema';

// create express and middleware
const app = express();
app.use('/graphql', graphqlHTTP({ schema }));

// create a http server using express
const server = https.createServer(app);

// create websocket server
const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

server.listen(443, () => {
  useServer(
    {
      schema,
      execute,
      subscribe,
    },
    wsServer,
  );
});
```

</details>

<details id="apollo-server-express">
<summary><a href="#apollo-server-express">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage with <a href="https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-express">Apollo Server Express</a></summary>

```typescript
import https from 'https';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { execute, subscribe } from 'graphql';
import { schema } from 'my-graphql-schema';

// create express
const app = express();

// create apollo server
const apolloServer = new ApolloServer({ schema });

// apply middleware
apolloServer.applyMiddleware({ app });

// create a http server using express
const server = https.createServer(app);

// create websocket server
const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

server.listen(443, () => {
  useServer(
    {
      schema,
      execute,
      subscribe,
    },
    wsServer,
  );
});
```

</details>

<details id="ws-backwards-compat">
<summary><a href="#ws-backwards-compat">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage with <a href="https://github.com/apollographql/subscriptions-transport-ws">subscriptions-transport-ws</a> backwards compatibility</summary>

```ts
import https from 'https';
import ws from 'ws'; // yarn add ws
import { execute, subscribe } from 'graphql';
import { GRAPHQL_TRANSPORT_WS_PROTOCOL } from 'graphql-ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { SubscriptionServer, GRAPHQL_WS } from 'subscriptions-transport-ws';
import { schema } from 'my-graphql-schema';

// graphql-ws
const graphqlWs = new ws.Server({ noServer: true });
useServer(
  {
    schema,
    execute,
    subscribe,
  },
  graphqlWs,
);

// subscriptions-transport-ws
const subTransWs = new ws.Server({ noServer: true });
SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  subTransWs,
);

// create https server
const server = https.createServer(function weServeSocketsOnly(_, res) {
  res.writeHead(404);
  res.end();
});

// listen for upgrades and delegate requests according to the WS subprotocol
server.on('upgrade', (req, socket, head) => {
  // extract websocket subprotocol from header
  const protocol = req.headers['sec-websocket-protocol'];
  const protocols = Array.isArray(protocol)
    ? protocol
    : protocol?.split(',').map((p) => p.trim());

  // decide which websocket server to use
  const wss =
    protocols?.includes(GRAPHQL_WS) && // subscriptions-transport-ws subprotocol
    !protocols.includes(GRAPHQL_TRANSPORT_WS_PROTOCOL) // graphql-ws subprotocol
      ? subTransWs
      : // graphql-ws will welcome its own subprotocol and
        // gracefully reject invalid ones. if the client supports
        // both transports, graphql-ws will prevail
        graphqlWs;
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
  });
});
```

</details>

<details id="logging">
<summary><a href="#logging">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage with console logging</summary>

```typescript
import https from 'https';
import { execute, subscribe } from 'graphql';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from 'my-graphql-schema';

const server = https.createServer(function weServeSocketsOnly(_, res) {
  res.writeHead(404);
  res.end();
});

const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

useServer(
  {
    schema,
    onConnect: (ctx) => {
      console.log('Connect', ctx);
    },
    onSubscribe: (ctx, msg) => {
      console.log('Subscribe', { ctx, msg });
    },
    onNext: (ctx, msg, args, result) => {
      console.debug('Next', { ctx, msg, args, result });
    },
    onError: (ctx, msg, errors) => {
      console.error('Error', { ctx, msg, errors });
    },
    onComplete: (ctx, msg) => {
      console.log('Complete', { ctx, msg });
    },
  },
  wsServer,
);

server.listen(443);
```

</details>

<details id="multi-ws">
<summary><a href="#multi-ws">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage on a multi WebSocket server</summary>

```typescript
import https from 'https';
import ws from 'ws'; // yarn add ws
import url from 'url';
import { execute, subscribe } from 'graphql';
import { createClient } from 'graphql-ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from 'my-graphql-schema';

const server = https.createServer(function weServeSocketsOnly(_, res) {
  res.writeHead(404);
  res.end();
});

/**
 * Two websocket servers on different paths:
 * - `/wave` sends out waves
 * - `/graphql` serves graphql
 */
const waveWS = new ws.Server({ noServer: true });
const graphqlWS = new ws.Server({ noServer: true });

// delegate upgrade requests to relevant destinations
server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/wave') {
    waveWS.handleUpgrade(request, socket, head, (client) => {
      waveWS.emit('connection', client, request);
    });
  } else if (pathname === '/graphql') {
    graphqlWS.handleUpgrade(request, socket, head, (client) => {
      graphqlWS.emit('connection', client, request);
    });
  } else {
    socket.destroy();
  }
});

// wave on connect
waveWS.on('connection', (socket) => {
  socket.send('🌊');
});

// serve graphql
useServer(
  {
    schema,
    execute,
    subscribe,
  },
  graphqlWS,
);

server.listen(443);
```

</details>

<details id="context">
<summary><a href="#context">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage with custom context value</summary>

```typescript
import { validate, execute, subscribe } from 'graphql';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema, roots, getDynamicContext } from 'my-graphql';

useServer(
  {
    context: (ctx, msg, args) => {
      return getDynamicContext(ctx, msg, args);
    }, // or static context by supplying the value direcly
    schema,
    roots,
    execute,
    subscribe,
  },
  wsServer,
);
```

</details>

<details id="custom-exec">
<summary><a href="#custom-exec">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server usage with custom execution arguments and validation</summary>

```typescript
import { parse, validate, execute, subscribe } from 'graphql';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema, myValidationRules } from 'my-graphql';

useServer(
  {
    execute,
    subscribe,
    onSubscribe: (ctx, msg) => {
      const args = {
        schema,
        operationName: msg.payload.operationName,
        document: parse(msg.payload.query),
        variableValues: msg.payload.variables,
      };

      // dont forget to validate when returning custom execution args!
      const errors = validate(args.schema, args.document, myValidationRules);
      if (errors.length > 0) {
        return errors; // return `GraphQLError[]` to send `ErrorMessage` and stop subscription
      }

      return args;
    },
  },
  wsServer,
);
```

</details>

<details id="persisted">
<summary><a href="#persisted">🔗</a> <a href="https://github.com/websockets/ws">ws</a> server and client usage with persisted queries</summary>

```typescript
// 🛸 server

import { parse, execute, subscribe } from 'graphql';
import ws from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from 'my-graphql-schema';

// a unique GraphQL execution ID used for representing
// a query in the persisted queries store. when subscribing
// you should use the `SubscriptionPayload.query` to transmit the id
type QueryID = string;

const queriesStore: Record<QueryID, ExecutionArgs> = {
  iWantTheGreetings: {
    schema, // you may even provide different schemas in the queries store
    document: parse('subscription Greetings { greetings }'),
  },
};

const wsServer = new ws.Server({
  server,
  path: '/graphql',
});

useServer(
  {
    execute,
    subscribe,
    onSubscribe: (_ctx, msg) => {
      const query = queriesStore[msg.payload.query];
      if (!query) {
        // for extra security you only allow the queries from the store
        throw new Error('404: Query Not Found');
      }
      return {
        ...query,
        variableValues: msg.payload.variables, // use the variables from the client
      };
    },
  },
  wsServer,
);
```

```typescript
// 📺 client

import { createClient } from 'graphql-ws';

const client = createClient({
  url: 'wss://persisted.graphql/queries',
});

(async () => {
  const onNext = () => {
    /**/
  };

  await new Promise((resolve, reject) => {
    client.subscribe(
      {
        query: 'iWantTheGreetings',
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      },
    );
  });

  expect(onNext).toBeCalledTimes(5); // greetings in 5 languages
})();
```

</details>

## [Documentation](docs/)

Check the [docs folder](docs/) out for [TypeDoc](https://typedoc.org) generated documentation.

## [How does it work?](PROTOCOL.md)

Read about the exact transport intricacies used by the library in the [GraphQL over WebSocket Protocol document](PROTOCOL.md).

## [Want to help?](CONTRIBUTING.md)

File a bug, contribute with code, or improve documentation? Read up on our guidelines for [contributing](CONTRIBUTING.md) and drive development with `yarn test --watch` away!
