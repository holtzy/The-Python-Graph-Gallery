![graphql-upload logo](https://cdn.jsdelivr.net/gh/jaydenseric/graphql-upload@8.0.0/graphql-upload-logo.svg)

# graphql-upload

[![npm version](https://badgen.net/npm/v/graphql-upload)](https://npm.im/graphql-upload) [![CI status](https://github.com/jaydenseric/graphql-upload/workflows/CI/badge.svg)](https://github.com/jaydenseric/graphql-upload/actions)

Middleware and an [`Upload` scalar](#class-graphqlupload) to add support for [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec) (file uploads via queries and mutations) to various Node.js GraphQL servers.

⚠️ Previously published as [`apollo-upload-server`](https://npm.im/apollo-upload-server).

## Support

The following environments are known to be compatible:

- [Node.js](https://nodejs.org) `^10.13.0 || ^12.0.0 || >= 13.7.0`
- [Koa](https://koajs.com)
  - [`graphql-api-koa`](https://npm.im/graphql-api-koa)
  - [`koa-graphql`](https://npm.im/koa-graphql)
  - [`apollo-server-koa`](https://npm.im/apollo-server-koa) (inbuilt)
- [Express](https://expressjs.com)
  - [`express-graphql`](https://npm.im/express-graphql)
  - [`apollo-server-express`](https://npm.im/apollo-server-express) (inbuilt)

See also [GraphQL multipart request spec server implementations](https://github.com/jaydenseric/graphql-multipart-request-spec#server).

## Setup

Setup is necessary if your environment doesn’t feature this package inbuilt (see **_[Support](#support)_**).

To install [`graphql-upload`](https://npm.im/graphql-upload) and the [`graphql`](https://npm.im/graphql) peer dependency from [npm](https://npmjs.com) run:

```shell
npm install graphql-upload graphql
```

Use the [`graphqlUploadKoa`](#function-graphqluploadkoa) or [`graphqlUploadExpress`](#function-graphqluploadexpress) middleware just before GraphQL middleware. Alternatively, use [`processRequest`](#function-processrequest) to create custom middleware.

A schema built with separate SDL and resolvers (e.g. using [`makeExecutableSchema`](https://apollographql.com/docs/graphql-tools/generate-schema#makeExecutableSchema)) requires the [`Upload` scalar](#class-graphqlupload) to be setup.

## Usage

[Clients implementing the GraphQL multipart request spec](https://github.com/jaydenseric/graphql-multipart-request-spec#client) upload files as [`Upload` scalar](#class-graphqlupload) query or mutation variables. Their resolver values are promises that resolve [file upload details](#type-fileupload) for processing and storage. Files are typically streamed into cloud storage but may also be stored in the filesystem.

See the [example API and client](https://github.com/jaydenseric/apollo-upload-examples).

### Tips

- The process must have both read and write access to the directory identified by [`os.tmpdir()`](https://nodejs.org/api/os.html#os_os_tmpdir).
- The device requires sufficient disk space to buffer the expected number of concurrent upload requests.
- Promisify and await file upload streams in resolvers or the server will send a response to the client before uploads are complete, causing a disconnect.
- Handle file upload promise rejection and stream errors; uploads sometimes fail due to network connectivity issues or impatient users disconnecting.
- Process multiple uploads asynchronously with [`Promise.all`](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/promise/all) or a more flexible solution such as [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) where an error in one does not reject them all.
- Only use [`createReadStream()`](#type-fileupload) _before_ the resolver returns; late calls (e.g. in an unawaited async function or callback) throw an error. Existing streams can still be used after a response is sent, although there are few valid reasons for not awaiting their completion.
- Use [`stream.destroy()`](https://nodejs.org/api/stream.html#stream_readable_destroy_error) when an incomplete stream is no longer needed, or temporary files may not get cleaned up.

## Architecture

The [GraphQL multipart request spec](https://github.com/jaydenseric/graphql-multipart-request-spec) allows a file to be used for multiple query or mutation variables (file deduplication), and for variables to be used in multiple places. GraphQL resolvers need to be able to manage independent file streams. As resolvers are executed asynchronously, it’s possible they will try to process files in a different order than received in the multipart request.

[`busboy`](https://npm.im/busboy) parses multipart request streams. Once the `operations` and `map` fields have been parsed, [`Upload` scalar](#class-graphqlupload) values in the GraphQL operations are populated with promises, and the operations are passed down the middleware chain to GraphQL resolvers.

[`fs-capacitor`](https://npm.im/fs-capacitor) is used to buffer file uploads to the filesystem and coordinate simultaneous reading and writing. As soon as a file upload’s contents begins streaming, its data begins buffering to the filesystem and its associated promise resolves. GraphQL resolvers can then create new streams from the buffer by calling [`createReadStream()`](#type-fileupload). The buffer is destroyed once all streams have ended or closed and the server has responded to the request. Any remaining buffer files will be cleaned when the process exits.

## API

### Table of contents

- [class GraphQLUpload](#class-graphqlupload)
- [class Upload](#class-upload)
  - [Upload instance method reject](#upload-instance-method-reject)
  - [Upload instance method resolve](#upload-instance-method-resolve)
  - [Upload instance property file](#upload-instance-property-file)
  - [Upload instance property promise](#upload-instance-property-promise)
- [function graphqlUploadExpress](#function-graphqluploadexpress)
- [function graphqlUploadKoa](#function-graphqluploadkoa)
- [function processRequest](#function-processrequest)
- [type FileUpload](#type-fileupload)
- [type FileUploadCreateReadStream](#type-fileuploadcreatereadstream)
- [type GraphQLOperation](#type-graphqloperation)
- [type ProcessRequestFunction](#type-processrequestfunction)
- [type ProcessRequestOptions](#type-processrequestoptions)

### class GraphQLUpload

A GraphQL `Upload` scalar that can be used in a [`GraphQLSchema`](https://graphql.org/graphql-js/type/#graphqlschema). It’s value in resolvers is a promise that resolves [file upload details](#type-fileupload) for processing and storage.

#### Examples

_Ways to `import`._

> ```js
> import { GraphQLUpload } from 'graphql-upload';
> ```
>
> ```js
> import GraphQLUpload from 'graphql-upload/public/GraphQLUpload.js';
> ```

_Ways to `require`._

> ```js
> const { GraphQLUpload } = require('graphql-upload');
> ```
>
> ```js
> const GraphQLUpload = require('graphql-upload/public/GraphQLUpload');
> ```

_Setup for a schema built with [`makeExecutableSchema`](https://apollographql.com/docs/graphql-tools/generate-schema#makeExecutableSchema)._

> ```js
> const { makeExecutableSchema } = require('graphql-tools');
> const { GraphQLUpload } = require('graphql-upload');
>
> const schema = makeExecutableSchema({
>   typeDefs: /* GraphQL */ `
>     scalar Upload
>   `,
>   resolvers: {
>     Upload: GraphQLUpload,
>   },
> });
> ```

_A manually constructed schema with an image upload mutation._

> ```js
> const {
>   GraphQLSchema,
>   GraphQLObjectType,
>   GraphQLBoolean,
> } = require('graphql');
> const { GraphQLUpload } = require('graphql-upload');
>
> const schema = new GraphQLSchema({
>   mutation: new GraphQLObjectType({
>     name: 'Mutation',
>     fields: {
>       uploadImage: {
>         description: 'Uploads an image.',
>         type: GraphQLBoolean,
>         args: {
>           image: {
>             description: 'Image file.',
>             type: GraphQLUpload,
>           },
>         },
>         async resolve(parent, { image }) {
>           const { filename, mimetype, createReadStream } = await image;
>           const stream = createReadStream();
>           // Promisify the stream and store the file, then…
>           return true;
>         },
>       },
>     },
>   }),
> });
> ```

---

### class Upload

A file expected to be uploaded as it has been declared in the `map` field of a [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec). The [`processRequest`](#function-processrequest) function places references to an instance of this class wherever the file is expected in the [GraphQL operation](#type-graphqloperation). The [`Upload` scalar](#class-graphqlupload) derives it’s value from the [`promise`](#upload-instance-property-promise) property.

#### Examples

_Ways to `import`._

> ```js
> import { Upload } from 'graphql-upload';
> ```
>
> ```js
> import Upload from 'graphql-upload/public/Upload.js';
> ```

_Ways to `require`._

> ```js
> const { Upload } = require('graphql-upload');
> ```
>
> ```js
> const Upload = require('graphql-upload/public/Upload');
> ```

#### Upload instance method reject

Rejects the upload promise with an error. This should only be utilized by [`processRequest`](#function-processrequest).

| Parameter | Type   | Description     |
| :-------- | :----- | :-------------- |
| `error`   | object | Error instance. |

#### Upload instance method resolve

Resolves the upload promise with the file upload details. This should only be utilized by [`processRequest`](#function-processrequest).

| Parameter | Type                           | Description          |
| :-------- | :----------------------------- | :------------------- |
| `file`    | [FileUpload](#type-fileupload) | File upload details. |

#### Upload instance property file

The file upload details, available when the [upload promise](#upload-instance-property-promise) resolves. This should only be utilized by [`processRequest`](#function-processrequest).

**Type:** `undefined` | [FileUpload](#type-fileupload)

#### Upload instance property promise

Promise that resolves file upload details. This should only be utilized by [`GraphQLUpload`](#class-graphqlupload).

**Type:** Promise&lt;[FileUpload](#type-fileupload)>

---

### function graphqlUploadExpress

Creates [Express](https://expressjs.com) middleware that processes [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec) using [`processRequest`](#function-processrequest), ignoring non-multipart requests. It sets the request body to be [similar to a conventional GraphQL POST request](#type-graphqloperation) for following GraphQL middleware to consume.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `options` | [ProcessRequestOptions](#type-processrequestoptions) | Middleware options. Any [`ProcessRequestOptions`](#type-processrequestoptions) can be used. |
| `options.processRequest` | [ProcessRequestFunction](#type-processrequestfunction)? = [processRequest](#function-processrequest) | Used to process [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec). |

**Returns:** Function — Express middleware.

#### Examples

_Ways to `import`._

> ```js
> import { graphqlUploadExpress } from 'graphql-upload';
> ```
>
> ```js
> import graphqlUploadExpress from 'graphql-upload/public/graphqlUploadExpress.js';
> ```

_Ways to `require`._

> ```js
> const { graphqlUploadExpress } = require('graphql-upload');
> ```
>
> ```js
> const graphqlUploadExpress = require('graphql-upload/public/graphqlUploadExpress');
> ```

_Basic [`express-graphql`](https://npm.im/express-graphql) setup._

> ```js
> const express = require('express');
> const graphqlHTTP = require('express-graphql');
> const { graphqlUploadExpress } = require('graphql-upload');
> const schema = require('./schema');
>
> express()
>   .use(
>     '/graphql',
>     graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
>     graphqlHTTP({ schema })
>   )
>   .listen(3000);
> ```

---

### function graphqlUploadKoa

Creates [Koa](https://koajs.com) middleware that processes [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec) using [`processRequest`](#function-processrequest), ignoring non-multipart requests. It sets the request body to be [similar to a conventional GraphQL POST request](#type-graphqloperation) for following GraphQL middleware to consume.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `options` | [ProcessRequestOptions](#type-processrequestoptions) | Middleware options. Any [`ProcessRequestOptions`](#type-processrequestoptions) can be used. |
| `options.processRequest` | [ProcessRequestFunction](#type-processrequestfunction)? = [processRequest](#function-processrequest) | Used to process [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec). |

**Returns:** Function — Koa middleware.

#### Examples

_Ways to `import`._

> ```js
> import { graphqlUploadKoa } from 'graphql-upload';
> ```
>
> ```js
> import graphqlUploadKoa from 'graphql-upload/public/graphqlUploadKoa.js';
> ```

_Ways to `require`._

> ```js
> const { graphqlUploadKoa } = require('graphql-upload');
> ```
>
> ```js
> const graphqlUploadKoa = require('graphql-upload/public/graphqlUploadKoa');
> ```

_Basic [`graphql-api-koa`](https://npm.im/graphql-api-koa) setup._

> ```js
> const Koa = require('koa');
> const bodyParser = require('koa-bodyparser');
> const { errorHandler, execute } = require('graphql-api-koa');
> const { graphqlUploadKoa } = require('graphql-upload');
> const schema = require('./schema');
>
> new Koa()
>   .use(errorHandler())
>   .use(bodyParser())
>   .use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 }))
>   .use(execute({ schema }))
>   .listen(3000);
> ```

---

### function processRequest

Processes a [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec). It parses the `operations` and `map` fields to create an [`Upload`](#class-upload) instance for each expected file upload, placing references wherever the file is expected in the [GraphQL operation](#type-graphqloperation) for the [`Upload` scalar](#class-graphqlupload) to derive it’s value. Errors are created with [`http-errors`](https://npm.im/http-errors) to assist in sending responses with appropriate HTTP status codes. Used in [`graphqlUploadExpress`](#function-graphqluploadexpress) and [`graphqlUploadKoa`](#function-graphqluploadkoa) and can be used to create custom middleware.

**Type:** [ProcessRequestFunction](#type-processrequestfunction)

#### Examples

_Ways to `import`._

> ```js
> import { processRequest } from 'graphql-upload';
> ```
>
> ```js
> import processRequest from 'graphql-upload/public/processRequest.js';
> ```

_Ways to `require`._

> ```js
> const { processRequest } = require('graphql-upload');
> ```
>
> ```js
> const processRequest = require('graphql-upload/public/processRequest');
> ```

---

### type FileUpload

File upload details that are only available after the file’s field in the [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec) has begun streaming in.

**Type:** object

| Property | Type | Description |
| :-- | :-- | :-- |
| `filename` | string | File name. |
| `mimetype` | string | File MIME type. Provided by the client and can’t be trusted. |
| `encoding` | string | File stream transfer encoding. |
| `createReadStream` | [FileUploadCreateReadStream](#type-fileuploadcreatereadstream) | Creates a [Node.js readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) of the file’s contents, for processing and storage. |

---

### type FileUploadCreateReadStream

Creates a [Node.js readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) of an [uploading file’s](#type-fileupload) contents, for processing and storage. Multiple calls create independent streams. Throws if called after all resolvers have resolved, or after an error has interrupted the request.

**Type:** Function

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `options` | object? | [`fs-capacitor`](https://npm.im/fs-capacitor) [`ReadStreamOptions`](https://github.com/mike-marcacci/fs-capacitor#readstreamoptions). |
| `options.encoding` | string? = `null` | Specify an encoding for the [`data`](https://nodejs.org/api/stream.html#stream_event_data) chunks to be strings (without splitting multi-byte characters across chunks) instead of Node.js [`Buffer`](https://nodejs.org/api/buffer.html#buffer_buffer) instances. Supported values depend on the [`Buffer` implementation](https://github.com/nodejs/node/blob/v13.7.0/lib/buffer.js#L587-L663) and include `utf8`, `ucs2`, `utf16le`, `latin1`, `ascii`, `base64`, or `hex`. |
| `options.highWaterMark` | number? = `16384` | Maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource. |

**Returns:** Readable — [Node.js readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) of the file’s contents.

#### See

- [Node.js `Readable` stream constructor docs](https://nodejs.org/api/stream.html#stream_new_stream_readable_options).
- [Node.js stream backpressure guide](https://nodejs.org/es/docs/guides/backpressuring-in-streams).

---

### type GraphQLOperation

A GraphQL operation object in a shape that can be consumed and executed by most GraphQL servers.

**Type:** object

| Property | Type | Description |
| :-- | :-- | :-- |
| `query` | string | GraphQL document containing queries and fragments. |
| `operationName` | string \| `null`? | GraphQL document operation name to execute. |
| `variables` | object \| `null`? | GraphQL document operation variables and values map. |

#### See

- [GraphQL over HTTP spec](https://github.com/APIs-guru/graphql-over-http#request-parameters).
- [Apollo Server POST requests](https://www.apollographql.com/docs/apollo-server/requests#postRequests).

---

### type ProcessRequestFunction

Processes a [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).

**Type:** Function

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `request` | IncomingMessage | [Node.js HTTP server request instance](https://nodejs.org/api/http.html#http_class_http_incomingmessage). |
| `response` | ServerResponse | [Node.js HTTP server response instance](https://nodejs.org/api/http.html#http_class_http_serverresponse). |
| `options` | [ProcessRequestOptions](#type-processrequestoptions)? | Options for processing the request. |

**Returns:** Promise&lt;[GraphQLOperation](#type-graphqloperation) | Array&lt;[GraphQLOperation](#type-graphqloperation)>> — GraphQL operation or batch of operations for a GraphQL server to consume (usually as the request body).

#### See

- [`processRequest`](#function-processrequest).

---

### type ProcessRequestOptions

Options for processing a [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec); mostly relating to security, performance and limits.

**Type:** object

| Property | Type | Description |
| :-- | :-- | :-- |
| `maxFieldSize` | number? = `1000000` | Maximum allowed non-file multipart form field size in bytes; enough for your queries. |
| `maxFileSize` | number? = Infinity | Maximum allowed file size in bytes. |
| `maxFiles` | number? = Infinity | Maximum allowed number of files. |
