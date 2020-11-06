import DataLoader from 'dataloader';
import { ExecutionParams, Executor } from './types';
export declare function createBatchingExecutor(executor: Executor, dataLoaderOptions?: DataLoader.Options<any, any, any>, extensionsReducer?: (mergedExtensions: Record<string, any>, executionParams: ExecutionParams) => Record<string, any>): Executor;
