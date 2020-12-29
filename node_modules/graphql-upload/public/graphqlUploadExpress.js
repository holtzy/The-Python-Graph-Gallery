'use strict';

const defaultProcessRequest = require('./processRequest');

/**
 * Creates [Express](https://expressjs.com) middleware that processes
 * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * using [`processRequest`]{@link processRequest}, ignoring non-multipart
 * requests. It sets the request body to be
 * [similar to a conventional GraphQL POST request]{@link GraphQLOperation} for
 * following GraphQL middleware to consume.
 * @kind function
 * @name graphqlUploadExpress
 * @param {ProcessRequestOptions} options Middleware options. Any [`ProcessRequestOptions`]{@link ProcessRequestOptions} can be used.
 * @param {ProcessRequestFunction} [options.processRequest=processRequest] Used to process [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * @returns {Function} Express middleware.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { graphqlUploadExpress } from 'graphql-upload';
 * ```
 *
 * ```js
 * import graphqlUploadExpress from 'graphql-upload/public/graphqlUploadExpress.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { graphqlUploadExpress } = require('graphql-upload');
 * ```
 *
 * ```js
 * const graphqlUploadExpress = require('graphql-upload/public/graphqlUploadExpress');
 * ```
 * @example <caption>Basic [`express-graphql`](https://npm.im/express-graphql) setup.</caption>
 * ```js
 * const express = require('express');
 * const graphqlHTTP = require('express-graphql');
 * const { graphqlUploadExpress } = require('graphql-upload');
 * const schema = require('./schema');
 *
 * express()
 *   .use(
 *     '/graphql',
 *     graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
 *     graphqlHTTP({ schema })
 *   )
 *   .listen(3000);
 * ```
 */
module.exports = function graphqlUploadExpress({
  processRequest = defaultProcessRequest,
  ...processRequestOptions
} = {}) {
  return function graphqlUploadExpressMiddleware(request, response, next) {
    if (!request.is('multipart/form-data')) return next();

    const finished = new Promise((resolve) => request.on('end', resolve));
    const { send } = response;

    response.send = (...args) => {
      finished.then(() => {
        response.send = send;
        response.send(...args);
      });
    };

    processRequest(request, response, processRequestOptions)
      .then((body) => {
        request.body = body;
        next();
      })
      .catch((error) => {
        if (error.status && error.expose) response.status(error.status);
        next(error);
      });
  };
};
