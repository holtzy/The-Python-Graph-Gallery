'use strict';

const Busboy = require('busboy');
const { WriteStream } = require('fs-capacitor');
const createError = require('http-errors');
const isObject = require('isobject');
const objectPath = require('object-path');
const { SPEC_URL } = require('../private/constants');
const ignoreStream = require('../private/ignoreStream');
const Upload = require('./Upload');

/**
 * Processes a [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * It parses the `operations` and `map` fields to create an
 * [`Upload`]{@link Upload} instance for each expected file upload, placing
 * references wherever the file is expected in the
 * [GraphQL operation]{@link GraphQLOperation} for the
 * [`Upload` scalar]{@link GraphQLUpload} to derive it’s value. Errors are
 * created with [`http-errors`](https://npm.im/http-errors) to assist in
 * sending responses with appropriate HTTP status codes. Used in
 * [`graphqlUploadExpress`]{@link graphqlUploadExpress} and
 * [`graphqlUploadKoa`]{@link graphqlUploadKoa} and can be used to create
 * custom middleware.
 * @kind function
 * @name processRequest
 * @type {ProcessRequestFunction}
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { processRequest } from 'graphql-upload';
 * ```
 *
 * ```js
 * import processRequest from 'graphql-upload/public/processRequest.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { processRequest } = require('graphql-upload');
 * ```
 *
 * ```js
 * const processRequest = require('graphql-upload/public/processRequest');
 * ```
 */
module.exports = function processRequest(
  request,
  response,
  {
    maxFieldSize = 1000000, // 1 MB
    maxFileSize = Infinity,
    maxFiles = Infinity,
  } = {}
) {
  return new Promise((resolve, reject) => {
    let released;
    let exitError;
    let currentStream;
    let operations;
    let operationsPath;
    let map;

    const parser = new Busboy({
      headers: request.headers,
      limits: {
        fieldSize: maxFieldSize,
        fields: 2, // Only operations and map.
        fileSize: maxFileSize,
        files: maxFiles,
      },
    });

    /**
     * Exits request processing with an error. Successive calls have no effect.
     * @kind function
     * @name processRequest~exit
     * @param {object} error Error instance.
     * @ignore
     */
    const exit = (error) => {
      if (exitError) return;
      exitError = error;

      reject(exitError);

      parser.destroy();

      if (currentStream) currentStream.destroy(exitError);

      if (map)
        for (const upload of map.values())
          if (!upload.file) upload.reject(exitError);

      request.unpipe(parser);

      // With a sufficiently large request body, subsequent events in the same
      // event frame cause the stream to pause after the parser is destroyed. To
      // ensure that the request resumes, the call to .resume() is scheduled for
      // later in the event loop.
      setImmediate(() => {
        request.resume();
      });
    };

    /**
     * Releases resources and cleans up Capacitor temporary files. Successive
     * calls have no effect.
     * @kind function
     * @name processRequest~release
     * @ignore
     */
    const release = () => {
      if (released) return;
      released = true;

      if (map)
        for (const upload of map.values())
          if (upload.file) upload.file.capacitor.release();
    };

    /**
     * Handles when the request is closed before it properly ended.
     * @kind function
     * @name processRequest~abort
     * @ignore
     */
    const abort = () => {
      exit(
        createError(
          499,
          'Request disconnected during file upload stream parsing.'
        )
      );
    };

    parser.on(
      'field',
      (fieldName, value, fieldNameTruncated, valueTruncated) => {
        if (exitError) return;

        if (valueTruncated)
          return exit(
            createError(
              413,
              `The ‘${fieldName}’ multipart field value exceeds the ${maxFieldSize} byte size limit.`
            )
          );

        switch (fieldName) {
          case 'operations':
            try {
              operations = JSON.parse(value);
            } catch (error) {
              return exit(
                createError(
                  400,
                  `Invalid JSON in the ‘operations’ multipart field (${SPEC_URL}).`
                )
              );
            }

            if (!isObject(operations) && !Array.isArray(operations))
              return exit(
                createError(
                  400,
                  `Invalid type for the ‘operations’ multipart field (${SPEC_URL}).`
                )
              );

            operationsPath = objectPath(operations);

            break;
          case 'map': {
            if (!operations)
              return exit(
                createError(
                  400,
                  `Misordered multipart fields; ‘map’ should follow ‘operations’ (${SPEC_URL}).`
                )
              );

            let parsedMap;
            try {
              parsedMap = JSON.parse(value);
            } catch (error) {
              return exit(
                createError(
                  400,
                  `Invalid JSON in the ‘map’ multipart field (${SPEC_URL}).`
                )
              );
            }

            if (!isObject(parsedMap))
              return exit(
                createError(
                  400,
                  `Invalid type for the ‘map’ multipart field (${SPEC_URL}).`
                )
              );

            const mapEntries = Object.entries(parsedMap);

            // Check max files is not exceeded, even though the number of files to
            // parse might not match th(e map provided by the client.
            if (mapEntries.length > maxFiles)
              return exit(
                createError(413, `${maxFiles} max file uploads exceeded.`)
              );

            map = new Map();
            for (const [fieldName, paths] of mapEntries) {
              if (!Array.isArray(paths))
                return exit(
                  createError(
                    400,
                    `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array (${SPEC_URL}).`
                  )
                );

              map.set(fieldName, new Upload());

              for (const [index, path] of paths.entries()) {
                if (typeof path !== 'string')
                  return exit(
                    createError(
                      400,
                      `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value (${SPEC_URL}).`
                    )
                  );

                try {
                  operationsPath.set(path, map.get(fieldName));
                } catch (error) {
                  return exit(
                    createError(
                      400,
                      `Invalid object path for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value ‘${path}’ (${SPEC_URL}).`
                    )
                  );
                }
              }
            }

            resolve(operations);
          }
        }
      }
    );

    parser.on('file', (fieldName, stream, filename, encoding, mimetype) => {
      if (exitError) {
        ignoreStream(stream);
        return;
      }

      if (!map) {
        ignoreStream(stream);
        return exit(
          createError(
            400,
            `Misordered multipart fields; files should follow ‘map’ (${SPEC_URL}).`
          )
        );
      }

      currentStream = stream;
      stream.on('end', () => {
        currentStream = null;
      });

      const upload = map.get(fieldName);

      if (!upload) {
        // The file is extraneous. As the rest can still be processed, just
        // ignore it and don’t exit with an error.
        ignoreStream(stream);
        return;
      }

      let fileError;
      const capacitor = new WriteStream();

      capacitor.on('error', () => {
        stream.unpipe();
        stream.resume();
      });

      stream.on('limit', () => {
        fileError = createError(
          413,
          `File truncated as it exceeds the ${maxFileSize} byte size limit.`
        );
        stream.unpipe();
        capacitor.destroy(fileError);
      });

      stream.on('error', (error) => {
        fileError = error;
        stream.unpipe();
        capacitor.destroy(exitError);
      });

      const file = {
        filename,
        mimetype,
        encoding,
        createReadStream(options) {
          const error = fileError || (released ? exitError : null);
          if (error) throw error;
          return capacitor.createReadStream(options);
        },
      };

      Object.defineProperty(file, 'capacitor', { value: capacitor });

      stream.pipe(capacitor);
      upload.resolve(file);
    });

    parser.once('filesLimit', () =>
      exit(createError(413, `${maxFiles} max file uploads exceeded.`))
    );

    parser.once('finish', () => {
      request.unpipe(parser);
      request.resume();

      if (!operations)
        return exit(
          createError(
            400,
            `Missing multipart field ‘operations’ (${SPEC_URL}).`
          )
        );

      if (!map)
        return exit(
          createError(400, `Missing multipart field ‘map’ (${SPEC_URL}).`)
        );

      for (const upload of map.values())
        if (!upload.file)
          upload.reject(createError(400, 'File missing in the request.'));
    });

    parser.once('error', exit);

    response.once('finish', release);
    response.once('close', release);

    request.once('close', abort);
    request.once('end', () => {
      request.removeListener('close', abort);
    });

    request.pipe(parser);
  });
};
