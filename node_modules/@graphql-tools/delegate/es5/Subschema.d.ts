import { GraphQLSchema } from 'graphql';
import { SubschemaConfig, Transform, MergedTypeConfig, CreateProxyingResolverFn, Subscriber, Executor, BatchingOptions } from './types';
export declare function isSubschema(value: any): value is Subschema;
interface ISubschema extends SubschemaConfig {
    transformedSchema: GraphQLSchema;
}
export declare class Subschema<K = any, V = any, C = K> implements ISubschema {
    schema: GraphQLSchema;
    rootValue?: Record<string, any>;
    executor?: Executor;
    subscriber?: Subscriber;
    batch?: boolean;
    batchingOptions?: BatchingOptions<K, V, C>;
    createProxyingResolver?: CreateProxyingResolverFn;
    transforms: Array<Transform>;
    transformedSchema: GraphQLSchema;
    merge?: Record<string, MergedTypeConfig>;
    constructor(config: SubschemaConfig);
}
export {};
