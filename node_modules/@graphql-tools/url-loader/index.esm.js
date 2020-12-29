import { print, parse, buildASTSchema, Kind } from 'graphql';
import { isAsyncIterable, observableToAsyncIterable } from '@graphql-tools/utils';
import { isWebUri } from 'valid-url';
import { fetch } from 'cross-fetch';
import { introspectSchema, wrapSchema } from '@graphql-tools/wrap';
import { createClient } from 'graphql-ws';
import WebSocket from 'isomorphic-ws';
import syncFetch from 'sync-fetch';
import isPromise from 'is-promise';
import { extractFiles, isExtractableFile } from 'extract-files';
import FormData from 'isomorphic-form-data';
import 'eventsource/lib/eventsource-polyfill';
import { Subscription } from 'sse-z';

class FormDataWithStreamSupport extends FormData {
    constructor(options) {
        super(options);
        this.hasUnknowableLength = false;
    }
    append(key, value, optionsOrFilename = {}) {
        // allow filename as single option
        const options = typeof optionsOrFilename === 'string' ? { filename: optionsOrFilename } : optionsOrFilename;
        // empty or either doesn't have path or not an http response
        if (!options.knownLength &&
            !Buffer.isBuffer(value) &&
            typeof value !== 'string' &&
            !value.path &&
            !(value.readable && 'httpVersion' in value)) {
            this.hasUnknowableLength = true;
        }
        super.append(key, value, options);
    }
    getLength(callback) {
        if (this.hasUnknowableLength) {
            return null;
        }
        return super.getLength(callback);
    }
    getLengthSync() {
        if (this.hasUnknowableLength) {
            return null;
        }
        // eslint-disable-next-line no-sync
        return super.getLengthSync();
    }
}

/* eslint-disable no-case-declarations */
const asyncImport = (moduleName) => import(moduleName);
const syncImport = (moduleName) => require(moduleName);
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
class UrlLoader {
    loaderId() {
        return 'url';
    }
    async canLoad(pointer, options) {
        return this.canLoadSync(pointer, options);
    }
    canLoadSync(pointer, _options) {
        return !!isWebUri(pointer);
    }
    async createFormDataFromVariables({ query, variables }) {
        const { Upload } = await import('graphql-upload');
        const vars = Object.assign({}, variables);
        const { clone, files } = extractFiles(vars, 'variables', ((v) => isExtractableFile(v) || v instanceof Upload || isAsyncIterable(v) || isPromise(v)));
        const map = Array.from(files.values()).reduce((prev, curr, currIndex) => {
            prev[currIndex] = curr;
            return prev;
        }, {});
        const uploads = new Map(Array.from(files.keys()).map((u, i) => [i, u]));
        const form = new FormDataWithStreamSupport();
        form.append('operations', JSON.stringify({
            query,
            variables: clone,
        }));
        form.append('map', JSON.stringify(map));
        await Promise.all(Array.from(uploads.entries()).map(async ([i, u]) => {
            if (isPromise(u)) {
                u = await u;
            }
            if (u instanceof Upload) {
                const upload = await u.promise;
                const stream = upload.createReadStream();
                form.append(i.toString(), stream, {
                    filename: upload.filename,
                    contentType: upload.mimetype,
                });
            }
            else {
                form.append(i.toString(), u, {
                    filename: 'name' in u ? u['name'] : i,
                    contentType: u.type,
                });
            }
        }));
        return form;
    }
    buildExecutor({ pointer, fetch, extraHeaders, defaultMethod, useGETForQueries, multipart, }) {
        const HTTP_URL = switchProtocols(pointer, {
            wss: 'https',
            ws: 'http',
        });
        const executor = ({ document, variables, }) => {
            let method = defaultMethod;
            if (useGETForQueries) {
                method = 'GET';
                for (const definition of document.definitions) {
                    if (definition.kind === Kind.OPERATION_DEFINITION) {
                        if (definition.operation !== 'query') {
                            method = defaultMethod;
                        }
                    }
                }
            }
            let fetchResult;
            const query = print(document);
            switch (method) {
                case 'GET':
                    const urlObj = new URL(HTTP_URL);
                    urlObj.searchParams.set('query', query);
                    if (variables && Object.keys(variables).length > 0) {
                        urlObj.searchParams.set('variables', JSON.stringify(variables));
                    }
                    const finalUrl = urlObj.toString();
                    fetchResult = fetch(finalUrl, {
                        method: 'GET',
                        headers: extraHeaders,
                    });
                    break;
                case 'POST':
                    if (multipart) {
                        fetchResult = this.createFormDataFromVariables({ query, variables }).then(form => fetch(HTTP_URL, {
                            method: 'POST',
                            body: form,
                            headers: {
                                ...extraHeaders,
                            },
                        }));
                    }
                    else {
                        fetchResult = fetch(HTTP_URL, {
                            method: 'POST',
                            body: JSON.stringify({
                                query,
                                variables,
                            }),
                            headers: {
                                'content-type': 'application/json',
                                ...extraHeaders,
                            },
                        });
                    }
                    break;
            }
            if (isPromise(fetchResult)) {
                return fetchResult.then(res => res.json());
            }
            return fetchResult.json();
        };
        return executor;
    }
    buildWSSubscriber(pointer, webSocketImpl) {
        const WS_URL = switchProtocols(pointer, {
            https: 'wss',
            http: 'ws',
        });
        const subscriptionClient = createClient({
            url: WS_URL,
            webSocketImpl,
        });
        return async ({ document, variables }) => {
            const query = print(document);
            return observableToAsyncIterable({
                subscribe: observer => {
                    const unsubscribe = subscriptionClient.subscribe({
                        query,
                        variables,
                    }, observer);
                    return {
                        unsubscribe,
                    };
                },
            });
        };
    }
    buildSSESubscriber(pointer, eventSourceOptions) {
        return async ({ document, variables }) => {
            const query = print(document);
            return observableToAsyncIterable({
                subscribe: observer => {
                    const subscription = new Subscription({
                        url: pointer,
                        searchParams: {
                            query,
                            variables: JSON.stringify(variables),
                        },
                        eventSourceOptions: {
                            // Ensure cookies are included with the request
                            withCredentials: true,
                            ...eventSourceOptions,
                        },
                        onNext: data => {
                            const parsedData = JSON.parse(data);
                            observer.next(parsedData);
                        },
                        onError: data => {
                            observer.error(data);
                        },
                        onComplete: () => {
                            observer.complete();
                        },
                    });
                    return subscription;
                },
            });
        };
    }
    getFetch(customFetch, importFn, async) {
        if (customFetch) {
            if (typeof customFetch === 'string') {
                const [moduleName, fetchFnName] = customFetch.split('#');
                const moduleResult = importFn(moduleName);
                if (isPromise(moduleResult)) {
                    return moduleResult.then(module => (fetchFnName ? module[fetchFnName] : module));
                }
                else {
                    return fetchFnName ? moduleResult[fetchFnName] : moduleResult;
                }
            }
            else {
                return customFetch;
            }
        }
        return async ? fetch : syncFetch;
    }
    getHeadersFromOptions(customHeaders) {
        let headers = {};
        if (customHeaders) {
            if (Array.isArray(customHeaders)) {
                headers = customHeaders.reduce((prev, v) => ({ ...prev, ...v }), {});
            }
            else if (typeof customHeaders === 'object') {
                headers = customHeaders;
            }
        }
        return headers;
    }
    getDefaultMethodFromOptions(method, defaultMethod) {
        if (method) {
            defaultMethod = method;
        }
        return defaultMethod;
    }
    getWebSocketImpl(options, importFn) {
        if (typeof (options === null || options === void 0 ? void 0 : options.webSocketImpl) === 'string') {
            const [moduleName, webSocketImplName] = options.webSocketImpl.split('#');
            const importedModule = importFn(moduleName);
            if (isPromise(importedModule)) {
                return importedModule.then(webSocketImplName ? importedModule[webSocketImplName] : importedModule);
            }
            else {
                return webSocketImplName ? importedModule[webSocketImplName] : importedModule;
            }
        }
        else {
            const websocketImpl = options.webSocketImpl || WebSocket;
            return websocketImpl;
        }
    }
    async getExecutorAndSubscriberAsync(pointer, options) {
        const fetch = await this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, asyncImport, true);
        const headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
        const defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'POST');
        const extraHeaders = {
            accept: 'application/json',
            ...headers,
        };
        const executor = this.buildExecutor({
            pointer,
            fetch,
            extraHeaders,
            defaultMethod,
            useGETForQueries: options.useGETForQueries,
            multipart: options.multipart,
        });
        let subscriber;
        if (options.useSSEForSubscription) {
            subscriber = this.buildSSESubscriber(pointer, options.eventSourceOptions);
        }
        else {
            const webSocketImpl = await this.getWebSocketImpl(options, asyncImport);
            subscriber = this.buildWSSubscriber(pointer, webSocketImpl);
        }
        return {
            executor,
            subscriber,
        };
    }
    getExecutorAndSubscriberSync(pointer, options) {
        const fetch = this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, syncImport, false);
        const headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
        const defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'POST');
        const extraHeaders = {
            accept: 'application/json',
            ...headers,
        };
        const executor = this.buildExecutor({
            pointer,
            fetch,
            extraHeaders,
            defaultMethod,
            useGETForQueries: options.useGETForQueries,
        });
        let subscriber;
        if (options.useSSEForSubscription) {
            subscriber = this.buildSSESubscriber(pointer, options.eventSourceOptions);
        }
        else {
            const webSocketImpl = this.getWebSocketImpl(options, syncImport);
            subscriber = this.buildWSSubscriber(pointer, webSocketImpl);
        }
        return {
            executor,
            subscriber,
        };
    }
    async getSubschemaConfigAsync(pointer, options) {
        const { executor, subscriber } = await this.getExecutorAndSubscriberAsync(pointer, options);
        return {
            schema: await introspectSchema(executor, undefined, options),
            executor,
            subscriber,
        };
    }
    getSubschemaConfigSync(pointer, options) {
        const { executor, subscriber } = this.getExecutorAndSubscriberSync(pointer, options);
        return {
            schema: introspectSchema(executor, undefined, options),
            executor,
            subscriber,
        };
    }
    async handleSDLAsync(pointer, options) {
        const fetch = await this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, asyncImport, true);
        const headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
        const defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'GET');
        const response = await fetch(pointer, {
            method: defaultMethod,
            headers,
        });
        const schemaString = await response.text();
        const document = parse(schemaString, options);
        const schema = buildASTSchema(document, options);
        return {
            location: pointer,
            rawSDL: schemaString,
            document,
            schema,
        };
    }
    handleSDLSync(pointer, options) {
        const fetch = this.getFetch(options === null || options === void 0 ? void 0 : options.customFetch, syncImport, false);
        const headers = this.getHeadersFromOptions(options === null || options === void 0 ? void 0 : options.headers);
        const defaultMethod = this.getDefaultMethodFromOptions(options === null || options === void 0 ? void 0 : options.method, 'GET');
        const response = fetch(pointer, {
            method: defaultMethod,
            headers,
        });
        const schemaString = response.text();
        const document = parse(schemaString, options);
        const schema = buildASTSchema(document, options);
        return {
            location: pointer,
            rawSDL: schemaString,
            document,
            schema,
        };
    }
    async load(pointer, options) {
        if ((options === null || options === void 0 ? void 0 : options.handleAsSDL) || pointer.endsWith('.graphql')) {
            return this.handleSDLAsync(pointer, options);
        }
        const subschemaConfig = await this.getSubschemaConfigAsync(pointer, options);
        const remoteExecutableSchema = wrapSchema(subschemaConfig);
        return {
            location: pointer,
            schema: remoteExecutableSchema,
        };
    }
    loadSync(pointer, options) {
        if ((options === null || options === void 0 ? void 0 : options.handleAsSDL) || pointer.endsWith('.graphql')) {
            return this.handleSDLSync(pointer, options);
        }
        const subschemaConfig = this.getSubschemaConfigSync(pointer, options);
        const remoteExecutableSchema = wrapSchema(subschemaConfig);
        return {
            location: pointer,
            schema: remoteExecutableSchema,
        };
    }
}
function switchProtocols(pointer, protocolMap) {
    const protocols = Object.keys(protocolMap).map(source => [source, protocolMap[source]]);
    return protocols.reduce((prev, [source, target]) => prev.replace(`${source}://`, `${target}://`).replace(`${source}:\\`, `${target}:\\`), pointer);
}

export { UrlLoader };
//# sourceMappingURL=index.esm.js.map
