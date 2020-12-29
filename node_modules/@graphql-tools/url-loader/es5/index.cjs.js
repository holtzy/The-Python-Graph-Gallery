'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
    if (e && e.__esModule) { return e; } else {
        var n = {};
        if (e) {
            Object.keys(e).forEach(function (k) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            });
        }
        n['default'] = e;
        return n;
    }
}

const tslib = require('tslib');
const graphql = require('graphql');
const utils = require('@graphql-tools/utils/es5');
const validUrl = require('valid-url');
const crossFetch = require('cross-fetch');
const wrap = require('@graphql-tools/wrap/es5');
const graphqlWs = require('graphql-ws');
const WebSocket = _interopDefault(require('isomorphic-ws'));
const syncFetch = _interopDefault(require('sync-fetch'));
const isPromise = _interopDefault(require('is-promise'));
const extractFiles = require('extract-files');
const FormData = _interopDefault(require('isomorphic-form-data'));
require('eventsource/lib/eventsource-polyfill');
const sseZ = require('sse-z');

var FormDataWithStreamSupport = /** @class */ (function (_super) {
    tslib.__extends(FormDataWithStreamSupport, _super);
    function FormDataWithStreamSupport(options) {
        var _this = _super.call(this, options) || this;
        _this.hasUnknowableLength = false;
        return _this;
    }
    FormDataWithStreamSupport.prototype.append = function (key, value, optionsOrFilename) {
        if (optionsOrFilename === void 0) { optionsOrFilename = {}; }
        // allow filename as single option
        var options = typeof optionsOrFilename === 'string' ? { filename: optionsOrFilename } : optionsOrFilename;
        // empty or either doesn't have path or not an http response
        if (!options.knownLength &&
            !Buffer.isBuffer(value) &&
            typeof value !== 'string' &&
            !value.path &&
            !(value.readable && 'httpVersion' in value)) {
            this.hasUnknowableLength = true;
        }
        _super.prototype.append.call(this, key, value, options);
    };
    FormDataWithStreamSupport.prototype.getLength = function (callback) {
        if (this.hasUnknowableLength) {
            return null;
        }
        return _super.prototype.getLength.call(this, callback);
    };
    FormDataWithStreamSupport.prototype.getLengthSync = function () {
        if (this.hasUnknowableLength) {
            return null;
        }
        // eslint-disable-next-line no-sync
        return _super.prototype.getLengthSync.call(this);
    };
    return FormDataWithStreamSupport;
}(FormData));

var asyncImport = function (moduleName) { return new Promise(function (resolve) { resolve(_interopNamespace(require(moduleName))); }); };
var syncImport = function (moduleName) { return require(moduleName); };
/**
 * This loader loads a schema from a URL. The loaded schema is a fully-executable,
 * remote schema since it's created using [@graphql-tools/wrap](/docs/remote-schemas).
 *
 * ```
 * const schema = await loadSchema('http://localhost:3000/graphql', {
 *   loaders: [
 *     new UrlLoader(),
 *   ]
 * });
 * ```
 */
var UrlLoader = /** @class */ (function () {
    function UrlLoader() {
    }
    UrlLoader.prototype.loaderId = function () {
        return 'url';
    };
    UrlLoader.prototype.canLoad = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.canLoadSync(pointer, options)];
            });
        });
    };
    UrlLoader.prototype.canLoadSync = function (pointer, _options) {
        return !!validUrl.isWebUri(pointer);
    };
    UrlLoader.prototype.createFormDataFromVariables = function (_a) {
        var query = _a.query, variables = _a.variables;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var Upload, vars, _b, clone, files, map, uploads, form;
            var _this = this;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { resolve(_interopNamespace(require('graphql-upload'))); })];
                    case 1:
                        Upload = (_c.sent()).Upload;
                        vars = Object.assign({}, variables);
                        _b = extractFiles.extractFiles(vars, 'variables', (function (v) { return extractFiles.isExtractableFile(v) || v instanceof Upload || utils.isAsyncIterable(v) || isPromise(v); })), clone = _b.clone, files = _b.files;
                        map = Array.from(files.values()).reduce(function (prev, curr, currIndex) {
                            prev[currIndex] = curr;
                            return prev;
                        }, {});
                        uploads = new Map(Array.from(files.keys()).map(function (u, i) { return [i, u]; }));
                        form = new FormDataWithStreamSupport();
                        form.append('operations', JSON.stringify({
                            query: query,
                            variables: clone,
                        }));
                        form.append('map', JSON.stringify(map));
                        return [4 /*yield*/, Promise.all(Array.from(uploads.entries()).map(function (_a) {
                                var _b = tslib.__read(_a, 2), i = _b[0], u = _b[1];
                                return tslib.__awaiter(_this, void 0, void 0, function () {
                                    var upload, stream;
                                    return tslib.__generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                if (!isPromise(u)) return [3 /*break*/, 2];
                                                return [4 /*yield*/, u];
                                            case 1:
                                                u = _c.sent();
                                                _c.label = 2;
                                            case 2:
                                                if (!(u instanceof Upload)) return [3 /*break*/, 4];
                                                return [4 /*yield*/, u.promise];
                                            case 3:
                                                upload = _c.sent();
                                                stream = upload.createReadStream();
                                                form.append(i.toString(), stream, {
                                                    filename: upload.filename,
                                                    contentType: upload.mimetype,
                                                });
                                                return [3 /*break*/, 5];
                                            case 4:
                                                form.append(i.toString(), u, {
                                                    filename: 'name' in u ? u['name'] : i,
                                                    contentType: u.type,
                                                });
                                                _c.label = 5;
                                            case 5: return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, form];
                }
            });
        });
    };
    UrlLoader.prototype.buildExecutor = function (_a) {
        var _this = this;
        var pointer = _a.pointer, fetch = _a.fetch, extraHeaders = _a.extraHeaders, defaultMethod = _a.defaultMethod, useGETForQueries = _a.useGETForQueries, multipart = _a.multipart;
        var HTTP_URL = switchProtocols(pointer, {
            wss: 'https',
            ws: 'http',
        });
        var executor = function (_a) {
            var e_1, _b;
            var document = _a.document, variables = _a.variables;
            var method = defaultMethod;
            if (useGETForQueries) {
                method = 'GET';
                try {
                    for (var _c = tslib.__values(document.definitions), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var definition = _d.value;
                        if (definition.kind === graphql.Kind.OPERATION_DEFINITION) {
                            if (definition.operation !== 'query') {
                                method = defaultMethod;
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            var fetchResult;
            var query = graphql.print(document);
            switch (method) {
                case 'GET':
                    var urlObj = new URL(HTTP_URL);
                    urlObj.searchParams.set('query', query);
                    if (variables && Object.keys(variables).length > 0) {
                        urlObj.searchParams.set('variables', JSON.stringify(variables));
                    }
                    var finalUrl = urlObj.toString();
                    fetchResult = fetch(finalUrl, {
                        method: 'GET',
                        headers: extraHeaders,
                    });
                    break;
                case 'POST':
                    if (multipart) {
                        fetchResult = _this.createFormDataFromVariables({ query: query, variables: variables }).then(function (form) {
                            return fetch(HTTP_URL, {
                                method: 'POST',
                                body: form,
                                headers: tslib.__assign({}, extraHeaders),
                            });
                        });
                    }
                    else {
                        fetchResult = fetch(HTTP_URL, {
                            method: 'POST',
                            body: JSON.stringify({
                                query: query,
                                variables: variables,
                            }),
                            headers: tslib.__assign({ 'content-type': 'application/json' }, extraHeaders),
                        });
                    }
                    break;
            }
            if (isPromise(fetchResult)) {
                return fetchResult.then(function (res) { return res.json(); });
            }
            return fetchResult.json();
        };
        return executor;
    };
    UrlLoader.prototype.buildWSSubscriber = function (pointer, webSocketImpl) {
        var _this = this;
        var WS_URL = switchProtocols(pointer, {
            https: 'wss',
            http: 'ws',
        });
        var subscriptionClient = graphqlWs.createClient({
            url: WS_URL,
            webSocketImpl: webSocketImpl,
        });
        return function (_a) {
            var document = _a.document, variables = _a.variables;
            return tslib.__awaiter(_this, void 0, void 0, function () {
                var query;
                return tslib.__generator(this, function (_b) {
                    query = graphql.print(document);
                    return [2 /*return*/, utils.observableToAsyncIterable({
                            subscribe: function (observer) {
                                var unsubscribe = subscriptionClient.subscribe({
                                    query: query,
                                    variables: variables,
                                }, observer);
                                return {
                                    unsubscribe: unsubscribe,
                                };
                            },
                        })];
                });
            });
        };
    };
    UrlLoader.prototype.buildSSESubscriber = function (pointer, eventSourceOptions) {
        var _this = this;
        return function (_a) {
            var document = _a.document, variables = _a.variables;
            return tslib.__awaiter(_this, void 0, void 0, function () {
                var query;
                return tslib.__generator(this, function (_b) {
                    query = graphql.print(document);
                    return [2 /*return*/, utils.observableToAsyncIterable({
                            subscribe: function (observer) {
                                var subscription = new sseZ.Subscription({
                                    url: pointer,
                                    searchParams: {
                                        query: query,
                                        variables: JSON.stringify(variables),
                                    },
                                    eventSourceOptions: tslib.__assign({ 
                                        // Ensure cookies are included with the request
                                        withCredentials: true }, eventSourceOptions),
                                    onNext: function (data) {
                                        var parsedData = JSON.parse(data);
                                        observer.next(parsedData);
                                    },
                                    onError: function (data) {
                                        observer.error(data);
                                    },
                                    onComplete: function () {
                                        observer.complete();
                                    },
                                });
                                return subscription;
                            },
                        })];
                });
            });
        };
    };
    UrlLoader.prototype.getFetch = function (customFetch, importFn, async) {
        if (customFetch) {
            if (typeof customFetch === 'string') {
                var _a = tslib.__read(customFetch.split('#'), 2), moduleName = _a[0], fetchFnName_1 = _a[1];
                var moduleResult = importFn(moduleName);
                if (isPromise(moduleResult)) {
                    return moduleResult.then(function (module) { return (fetchFnName_1 ? module[fetchFnName_1] : module); });
                }
                else {
                    return fetchFnName_1 ? moduleResult[fetchFnName_1] : moduleResult;
                }
            }
            else {
                return customFetch;
            }
        }
        return async ? crossFetch.fetch : syncFetch;
    };
    UrlLoader.prototype.getHeadersFromOptions = function (customHeaders) {
        var headers = {};
        if (customHeaders) {
            if (Array.isArray(customHeaders)) {
                headers = customHeaders.reduce(function (prev, v) { return (tslib.__assign(tslib.__assign({}, prev), v)); }, {});
            }
            else if (typeof customHeaders === 'object') {
                headers = customHeaders;
            }
        }
        return headers;
    };
    UrlLoader.prototype.getDefaultMethodFromOptions = function (method, defaultMethod) {
        if (method) {
            defaultMethod = method;
        }
        return defaultMethod;
    };
    UrlLoader.prototype.getWebSocketImpl = function (options, importFn) {
        if (typeof (options === null || options === void 0 ? void 0 : options.webSocketImpl) === 'string') {
            var _a = tslib.__read(options.webSocketImpl.split('#'), 2), moduleName = _a[0], webSocketImplName = _a[1];
            var importedModule = importFn(moduleName);
            if (isPromise(importedModule)) {
                return importedModule.then(webSocketImplName ? importedModule[webSocketImplName] : importedModule);
            }
            else {
                return webSocketImplName ? importedModule[webSocketImplName] : importedModule;
            }
        }
        else {
            var websocketImpl = options.webSocketImpl || WebSocket;
            return websocketImpl;
        }
    };
    UrlLoader.prototype.getExecutorAndSubscriberAsync = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fetch, headers, defaultMethod, extraHeaders, executor, subscriber, webSocketImpl;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, asyncImport, true)];
                    case 1:
                        fetch = _a.sent();
                        headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
                        defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'POST');
                        extraHeaders = tslib.__assign({ accept: 'application/json' }, headers);
                        executor = this.buildExecutor({
                            pointer: pointer,
                            fetch: fetch,
                            extraHeaders: extraHeaders,
                            defaultMethod: defaultMethod,
                            useGETForQueries: options.useGETForQueries,
                            multipart: options.multipart,
                        });
                        if (!options.useSSEForSubscription) return [3 /*break*/, 2];
                        subscriber = this.buildSSESubscriber(pointer, options.eventSourceOptions);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getWebSocketImpl(options, asyncImport)];
                    case 3:
                        webSocketImpl = _a.sent();
                        subscriber = this.buildWSSubscriber(pointer, webSocketImpl);
                        _a.label = 4;
                    case 4: return [2 /*return*/, {
                            executor: executor,
                            subscriber: subscriber,
                        }];
                }
            });
        });
    };
    UrlLoader.prototype.getExecutorAndSubscriberSync = function (pointer, options) {
        var fetch = this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, syncImport, false);
        var headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
        var defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'POST');
        var extraHeaders = tslib.__assign({ accept: 'application/json' }, headers);
        var executor = this.buildExecutor({
            pointer: pointer,
            fetch: fetch,
            extraHeaders: extraHeaders,
            defaultMethod: defaultMethod,
            useGETForQueries: options.useGETForQueries,
        });
        var subscriber;
        if (options.useSSEForSubscription) {
            subscriber = this.buildSSESubscriber(pointer, options.eventSourceOptions);
        }
        else {
            var webSocketImpl = this.getWebSocketImpl(options, syncImport);
            subscriber = this.buildWSSubscriber(pointer, webSocketImpl);
        }
        return {
            executor: executor,
            subscriber: subscriber,
        };
    };
    UrlLoader.prototype.getSubschemaConfigAsync = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, executor, subscriber;
            var _b;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getExecutorAndSubscriberAsync(pointer, options)];
                    case 1:
                        _a = _c.sent(), executor = _a.executor, subscriber = _a.subscriber;
                        _b = {};
                        return [4 /*yield*/, wrap.introspectSchema(executor, undefined, options)];
                    case 2: return [2 /*return*/, (_b.schema = _c.sent(),
                            _b.executor = executor,
                            _b.subscriber = subscriber,
                            _b)];
                }
            });
        });
    };
    UrlLoader.prototype.getSubschemaConfigSync = function (pointer, options) {
        var _a = this.getExecutorAndSubscriberSync(pointer, options), executor = _a.executor, subscriber = _a.subscriber;
        return {
            schema: wrap.introspectSchema(executor, undefined, options),
            executor: executor,
            subscriber: subscriber,
        };
    };
    UrlLoader.prototype.handleSDLAsync = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fetch, headers, defaultMethod, response, schemaString, document, schema;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, asyncImport, true)];
                    case 1:
                        fetch = _a.sent();
                        headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
                        defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'GET');
                        return [4 /*yield*/, fetch(pointer, {
                                method: defaultMethod,
                                headers: headers,
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 3:
                        schemaString = _a.sent();
                        document = graphql.parse(schemaString, options);
                        schema = graphql.buildASTSchema(document, options);
                        return [2 /*return*/, {
                                location: pointer,
                                rawSDL: schemaString,
                                document: document,
                                schema: schema,
                            }];
                }
            });
        });
    };
    UrlLoader.prototype.handleSDLSync = function (pointer, options) {
        var fetch = this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, syncImport, false);
        var headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
        var defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'GET');
        var response = fetch(pointer, {
            method: defaultMethod,
            headers: headers,
        });
        var schemaString = response.text();
        var document = graphql.parse(schemaString, options);
        var schema = graphql.buildASTSchema(document, options);
        return {
            location: pointer,
            rawSDL: schemaString,
            document: document,
            schema: schema,
        };
    };
    UrlLoader.prototype.load = function (pointer, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var subschemaConfig, remoteExecutableSchema;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((options === null || options === void 0 ? void 0 : options.handleAsSDL) || pointer.endsWith('.graphql')) {
                            return [2 /*return*/, this.handleSDLAsync(pointer, options)];
                        }
                        return [4 /*yield*/, this.getSubschemaConfigAsync(pointer, options)];
                    case 1:
                        subschemaConfig = _a.sent();
                        remoteExecutableSchema = wrap.wrapSchema(subschemaConfig);
                        return [2 /*return*/, {
                                location: pointer,
                                schema: remoteExecutableSchema,
                            }];
                }
            });
        });
    };
    UrlLoader.prototype.loadSync = function (pointer, options) {
        if ((options === null || options === void 0 ? void 0 : options.handleAsSDL) || pointer.endsWith('.graphql')) {
            return this.handleSDLSync(pointer, options);
        }
        var subschemaConfig = this.getSubschemaConfigSync(pointer, options);
        var remoteExecutableSchema = wrap.wrapSchema(subschemaConfig);
        return {
            location: pointer,
            schema: remoteExecutableSchema,
        };
    };
    return UrlLoader;
}());
function switchProtocols(pointer, protocolMap) {
    var protocols = Object.keys(protocolMap).map(function (source) { return [source, protocolMap[source]]; });
    return protocols.reduce(function (prev, _a) {
        var _b = tslib.__read(_a, 2), source = _b[0], target = _b[1];
        return prev.replace(source + "://", target + "://").replace(source + ":\\", target + ":\\");
    }, pointer);
}

exports.UrlLoader = UrlLoader;
//# sourceMappingURL=index.cjs.js.map
