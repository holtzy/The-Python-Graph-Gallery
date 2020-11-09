import DataLoader from 'dataloader';
import { ExecutionParams, Executor } from './types';
export declare const getBatchingExecutor: (A1: Record<string, any>, A2: Executor, A3: DataLoader.Options<any, any, any>, A4: (mergedExtensions: Record<string, any>, executionParams: ExecutionParams) => Record<string, any>) => Executor;
