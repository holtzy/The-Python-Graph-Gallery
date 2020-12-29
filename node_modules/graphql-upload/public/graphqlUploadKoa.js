'use strict';

const defaultProcessRequest = require('./processRequest');

/**
 * Creates [Koa](https://koajs.com) middleware that processes
 * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * using [`processRequest`]{@link processRequest}, ignoring non-multipart
 * requests. It sets the request body to be
 * [similar to a conventional GraphQL POST request]{@link GraphQLOperation} for
 * following GraphQL middleware to consume.
 * @kind function
 * @name graphqlUploadKoa
 * @param {ProcessRequestOptions} options Middleware options. Any [`ProcessRequestOptions`]{@link ProcessRequestOptions} can be used.
 * @param {ProcessRequestFunction} [options.processRequest=processRequest] Used to process [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * @returns {Function} Koa middleware.
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { graphqlUploadKoa } from 'graphql-upload';
 * ```
 *
 * ```js
 * import graphqlUploadKoa from 'graphql-upload/public/graphqlUploadKoa.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { graphqlUploadKoa } = require('graphql-upload');
 * ```
 *
 * ```js
 * const graphqlUploadKoa = require('graphql-upload/public/graphqlUploadKoa');
 * ```
 * @example <caption>Basic [`graphql-api-koa`](https://npm.im/graphql-api-koa) setup.</caption>
 * ```js
 * const Koa = require('koa');
 * const bodyParser = require('koa-bodyparser');
 * const { errorHandler, execute } = require('graphql-api-koa');
 * const { graphqlUploadKoa } = require('graphql-upload');
 * const schema = require('./schema');
 *
 * new Koa()
 *   .use(errorHandler())
 *   .use(bodyParser())
 *   .use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 }))
 *   .use(execute({ schema }))
 *   .listen(3000);
 * ```
 */
module.exports = function graphqlUploadKoa({
  processRequest = defaultProcessRequest,
  ...processRequestOptions
} = {}) {
  return async function graphqlUploadKoaMiddleware(ctx, next) {
    if (!ctx.request.is('multipart/form-data')) return next();

    const finished = new Promise((resolve) => ctx.req.on('end', resolve));

    try {
      ctx.request.body = await processRequest(
        ctx.req,
        ctx.res,
        processRequestOptions
      );
      await next();
    } finally {
      await finished;
    }
  };
};
