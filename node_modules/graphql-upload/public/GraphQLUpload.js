'use strict';

const { GraphQLScalarType, GraphQLError } = require('graphql');
const Upload = require('./Upload');

/**
 * A GraphQL `Upload` scalar that can be used in a
 * [`GraphQLSchema`](https://graphql.org/graphql-js/type/#graphqlschema).
 * It’s value in resolvers is a promise that resolves
 * [file upload details]{@link FileUpload} for processing and storage.
 * @kind class
 * @name GraphQLUpload
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { GraphQLUpload } from 'graphql-upload';
 * ```
 *
 * ```js
 * import GraphQLUpload from 'graphql-upload/public/GraphQLUpload.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { GraphQLUpload } = require('graphql-upload');
 * ```
 *
 * ```js
 * const GraphQLUpload = require('graphql-upload/public/GraphQLUpload');
 * ```
 * @example <caption>Setup for a schema built with [`makeExecutableSchema`](https://apollographql.com/docs/graphql-tools/generate-schema#makeExecutableSchema).</caption>
 * ```js
 * const { makeExecutableSchema } = require('graphql-tools');
 * const { GraphQLUpload } = require('graphql-upload');
 *
 * const schema = makeExecutableSchema({
 *   typeDefs: /* GraphQL *\/ `
 *     scalar Upload
 *   `,
 *   resolvers: {
 *     Upload: GraphQLUpload,
 *   },
 * });
 * ```
 * @example <caption>A manually constructed schema with an image upload mutation.</caption>
 * ```js
 * const {
 *   GraphQLSchema,
 *   GraphQLObjectType,
 *   GraphQLBoolean,
 * } = require('graphql');
 * const { GraphQLUpload } = require('graphql-upload');
 *
 * const schema = new GraphQLSchema({
 *   mutation: new GraphQLObjectType({
 *     name: 'Mutation',
 *     fields: {
 *       uploadImage: {
 *         description: 'Uploads an image.',
 *         type: GraphQLBoolean,
 *         args: {
 *           image: {
 *             description: 'Image file.',
 *             type: GraphQLUpload,
 *           },
 *         },
 *         async resolve(parent, { image }) {
 *           const { filename, mimetype, createReadStream } = await image;
 *           const stream = createReadStream();
 *           // Promisify the stream and store the file, then…
 *           return true;
 *         },
 *       },
 *     },
 *   }),
 * });
 * ```
 */
module.exports = new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',
  parseValue(value) {
    if (value instanceof Upload) return value.promise;
    throw new GraphQLError('Upload value invalid.');
  },
  parseLiteral(ast) {
    throw new GraphQLError('Upload literal unsupported.', ast);
  },
  serialize() {
    throw new GraphQLError('Upload serialization unsupported.');
  },
});
