'use strict';

/**
 * A file expected to be uploaded as it has been declared in the `map` field of
 * a [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * The [`processRequest`]{@link processRequest} function places references to an
 * instance of this class wherever the file is expected in the
 * [GraphQL operation]{@link GraphQLOperation}. The
 * [`Upload` scalar]{@link GraphQLUpload} derives it’s value from the
 * [`promise`]{@link Upload#promise} property.
 * @kind class
 * @name Upload
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import { Upload } from 'graphql-upload';
 * ```
 *
 * ```js
 * import Upload from 'graphql-upload/public/Upload.js';
 * ```
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const { Upload } = require('graphql-upload');
 * ```
 *
 * ```js
 * const Upload = require('graphql-upload/public/Upload');
 * ```
 */
module.exports = class Upload {
  constructor() {
    /**
     * Promise that resolves file upload details. This should only be utilized
     * by [`GraphQLUpload`]{@link GraphQLUpload}.
     * @kind member
     * @name Upload#promise
     * @type {Promise<FileUpload>}
     */
    this.promise = new Promise((resolve, reject) => {
      /**
       * Resolves the upload promise with the file upload details. This should
       * only be utilized by [`processRequest`]{@link processRequest}.
       * @kind function
       * @name Upload#resolve
       * @param {FileUpload} file File upload details.
       */
      this.resolve = (file) => {
        /**
         * The file upload details, available when the
         * [upload promise]{@link Upload#promise} resolves. This should only be
         * utilized by [`processRequest`]{@link processRequest}.
         * @kind member
         * @name Upload#file
         * @type {undefined|FileUpload}
         */
        this.file = file;

        resolve(file);
      };

      /**
       * Rejects the upload promise with an error. This should only be
       * utilized by [`processRequest`]{@link processRequest}.
       * @kind function
       * @name Upload#reject
       * @param {object} error Error instance.
       */
      this.reject = reject;
    });

    // Prevent errors crashing Node.js, see:
    // https://github.com/nodejs/node/issues/20392
    this.promise.catch(() => {});
  }
};
