![Continuous Integration](https://github.com/mike-marcacci/fs-capacitor/workflows/Continuous%20Integration/badge.svg) [![Current Version](https://badgen.net/npm/v/fs-capacitor)](https://npm.im/fs-capacitor) ![Supported Node.js Versions](https://badgen.net/npm/node/fs-capacitor)

# FS Capacitor

FS Capacitor is a filesystem buffer for finite node streams. It supports simultaneous read/write, and can be used to create multiple independent readable streams, each starting at the beginning of the buffer.

This is useful for file uploads and other situations where you want to avoid delays to the source stream, but have slow downstream transformations to apply:

```js
import fs from "fs";
import http from "http";
import { WriteStream } from "fs-capacitor";

http.createServer((req, res) => {
  const capacitor = new WriteStream();
  const destination = fs.createWriteStream("destination.txt");

  // pipe data to the capacitor
  req.pipe(capacitor);

  // read data from the capacitor
  capacitor
    .createReadStream()
    .pipe(/* some slow Transform streams here */)
    .pipe(destination);

  // read data from the very beginning
  setTimeout(() => {
    capacitor.createReadStream().pipe(/* elsewhere */);

    // you can destroy a capacitor as soon as no more read streams are needed
    // without worrying if existing streams are fully consumed
    capacitor.destroy();
  }, 100);
});
```

It is especially important to use cases like [`graphql-upload`](https://github.com/jaydenseric/graphql-upload) where server code may need to stash earler parts of a stream until later parts have been processed, and needs to attach multiple consumers at different times.

FS Capacitor creates its temporary files in the directory ideneified by `os.tmpdir()` and attempts to remove them:

- after `writeStream.destroy()` has been called and all read streams are fully consumed or destroyed
- before the process exits

Please do note that FS Capacitor does NOT release disk space _as data is consumed_, and therefore is not suitable for use with infinite streams or those larger than the filesystem.

### Ensuring cleanup on termination by process signal

FS Capacitor cleans up all of its temporary files before the process exits, by listening to the [node process's `exit` event](https://nodejs.org/api/process.html#process_event_exit). This event, however, is only emitted when the process is about to exit as a result of either:

- The process.exit() method being called explicitly;
- The Node.js event loop no longer having any additional work to perform.

When the node process receives a `SIGINT`, `SIGTERM`, or `SIGHUP` signal and there is no handler, it will exit without emitting the `exit` event.

Beginning in version 3, fs-capacitor will NOT listen for these signals. Instead, the application should handle these signals according to its own logic and call `process.exit()` when it is ready to exit. This allows the application to implement its own graceful shutdown procedures, such as waiting for a stream to finish.

The following can be added to the application to ensure resources are cleaned up before a signal-induced exit:

```js
function shutdown() {
  // Any sync or async graceful shutdown procedures can be run before exiting…
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("SIGHUP", shutdown);
```

## API

### WriteStream

`WriteStream` extends [`stream.Writable`](https://nodejs.org/api/stream.html#stream_implementing_a_writable_stream)

#### `new WriteStream(options: WriteStreamOptions)`

Create a new `WriteStream` instance.

#### `.createReadStream(options?: ReadStreamOptions): ReadStream`

Create a new `ReadStream` instance attached to the `WriteStream` instance.

Calling `.createReadStream()` on a released `WriteStream` will throw a `ReadAfterReleasedError` error.

Calling `.createReadStream()` on a destroyed `WriteStream` will throw a `ReadAfterDestroyedError` error.

As soon as a `ReadStream` ends or is closed (such as by calling `readStream.destroy()`), it is detached from its `WriteStream`.

#### `.release(): void`

Release the `WriteStream`'s claim on the underlying resources. Once called, destruction of underlying resources is performed as soon as all attached `ReadStream`s are removed.

#### `.destroy(error?: ?Error): void`

Destroy the `WriteStream` and all attached `ReadStream`s. If `error` is present, attached `ReadStream`s are destroyed with the same error.

### WriteStreamOptions

#### `.highWaterMark?: number`

Uses node's default of `16384` (16kb). Optional buffer size at which the writable stream will begin returning `false`. See [node's docs for `stream.Writable`](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options). For the curious, node has [a guide on backpressure in streams](https://nodejs.org/es/docs/guides/backpressuring-in-streams/).

#### `.defaultEncoding`

Uses node's default of `utf8`. Optional default encoding to use when no encoding is specified as an argument to `stream.write()`. See [node's docs for `stream.Writable`](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options). Possible values depend on the version of node, and are [defined in node's buffer implementation](https://github.com/nodejs/node/blob/master/lib/buffer.js);

### ReadStream

`ReadStream` extends [`stream.Readable`](https://nodejs.org/api/stream.html#stream_new_stream_readable_options);

### ReadStreamOptions

#### `.highWaterMark`

Uses node's default of `16384` (16kb). Optional value to use as the readable stream's highWaterMark, specifying the number of bytes (for binary data) or characters (for strings) that will be bufferred into memory. See [node's docs for `stream.Readable`](https://nodejs.org/api/stream.html#stream_new_stream_readable_options). For the curious, node has [a guide on backpressure in streams](https://nodejs.org/es/docs/guides/backpressuring-in-streams/).

#### `.encoding`

Uses node's default of `utf8`. Optional encoding to use when the stream's output is desired as a string. See [node's docs for `stream.Readable`](https://nodejs.org/api/stream.html#stream_new_stream_readable_options). Possible values depend on the version of node, and are [defined in node's buffer implementation](https://github.com/nodejs/node/blob/master/lib/buffer.js).
