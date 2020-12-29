/// <reference types="ws" />
import { IntrospectionOptions } from 'graphql';
import { SchemaPointerSingle, Source, DocumentLoader, SingleFileOptions } from '@graphql-tools/utils';
import { AsyncExecutor, SubschemaConfig, Subscriber, SyncExecutor } from '@graphql-tools/delegate';
import WebSocket from 'isomorphic-ws';
import { FormDataWithStreamSupport } from './FormDataWithStreamSupport';
import 'eventsource/lib/eventsource-polyfill';
import { SubscriptionOptions } from 'sse-z';
export declare type AsyncFetchFn = typeof import('cross-fetch').fetch;
export declare type SyncFetchFn = (input: RequestInfo, init?: RequestInit) => SyncResponse;
export declare type SyncResponse = Omit<Response, 'json' | 'text'> & {
    json: () => any;
    text: () => string;
};
export declare type FetchFn = AsyncFetchFn | SyncFetchFn;
declare type Headers = Record<string, string> | Array<Record<string, string>>;
declare type BuildExecutorOptions<TFetchFn = FetchFn> = {
    pointer: string;
    fetch: TFetchFn;
    extraHeaders: any;
    defaultMethod: 'GET' | 'POST';
    useGETForQueries: boolean;
    multipart?: boolean;
};
export declare type AsyncImportFn<T = unknown> = (moduleName: string) => PromiseLike<T>;
export declare type SyncImportFn<T = unknown> = (moduleName: string) => T;
/**
 * Additional options for loading from a URL
 */
export interface LoadFromUrlOptions extends SingleFileOptions, Partial<IntrospectionOptions> {
    /**
     * Additional headers to include when querying the original schema
     */
    headers?: Headers;
    /**
     * A custom `fetch` implementation to use when querying the original schema.
     * Defaults to `cross-fetch`
     */
    customFetch?: FetchFn | string;
    /**
     * HTTP method to use when querying the original schema.
     */
    method?: 'GET' | 'POST';
    /**
     * Custom WebSocket implementation used by the loaded schema if subscriptions
     * are enabled
     */
    webSocketImpl?: typeof WebSocket | string;
    /**
     * Whether to use the GET HTTP method for queries when querying the original schema
     */
    useGETForQueries?: boolean;
    /**
     * Use multipart for POST requests
     */
    multipart?: boolean;
    /**
     * Use SSE for subscription instead of WebSocket
     */
    useSSEForSubscription?: boolean;
    /**
     * Additional options to pass to the constructor of the underlying EventSource instance.
     */
    eventSourceOptions?: SubscriptionOptions['eventSourceOptions'];
    /**
     * Handle URL as schema SDL
     */
    handleAsSDL?: boolean;
}
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
export declare class UrlLoader implements DocumentLoader<LoadFromUrlOptions> {
    loaderId(): string;
    canLoad(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Promise<boolean>;
    canLoadSync(pointer: SchemaPointerSingle, _options: LoadFromUrlOptions): boolean;
    createFormDataFromVariables<TVariables>({ query, variables }: {
        query: string;
        variables: TVariables;
    }): Promise<FormDataWithStreamSupport>;
    buildExecutor(options: BuildExecutorOptions<SyncFetchFn>): SyncExecutor;
    buildExecutor(options: BuildExecutorOptions<AsyncFetchFn>): AsyncExecutor;
    buildWSSubscriber(pointer: string, webSocketImpl: typeof WebSocket): Subscriber;
    buildSSESubscriber(pointer: string, eventSourceOptions?: SubscriptionOptions['eventSourceOptions']): Subscriber;
    getFetch(customFetch: LoadFromUrlOptions['customFetch'], importFn: AsyncImportFn, async: true): PromiseLike<AsyncFetchFn>;
    getFetch(customFetch: LoadFromUrlOptions['customFetch'], importFn: SyncImportFn, async: false): SyncFetchFn;
    private getHeadersFromOptions;
    private getDefaultMethodFromOptions;
    getWebSocketImpl(options: LoadFromUrlOptions, importFn: AsyncImportFn): PromiseLike<typeof WebSocket>;
    getWebSocketImpl(options: LoadFromUrlOptions, importFn: SyncImportFn): typeof WebSocket;
    getExecutorAndSubscriberAsync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Promise<{
        executor: AsyncExecutor;
        subscriber: Subscriber;
    }>;
    getExecutorAndSubscriberSync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): {
        executor: SyncExecutor;
        subscriber: Subscriber;
    };
    getSubschemaConfigAsync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Promise<SubschemaConfig>;
    getSubschemaConfigSync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): SubschemaConfig;
    handleSDLAsync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Promise<Source>;
    handleSDLSync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Source;
    load(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Promise<Source>;
    loadSync(pointer: SchemaPointerSingle, options: LoadFromUrlOptions): Source;
}
export {};
