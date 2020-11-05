/** Returns whether the value is a function. Acts as a type guard. */
export declare function isFunction(value: any): value is Function;
/**
 * Safely invoke the function with the given arguments, if it is indeed a
 * function, and return its value. Otherwise, return undefined.
 * @deprecated use TypeScript 3.7+ optional call operator func?.()
 */
export declare function safeInvoke<R>(func: (() => R) | undefined): R | undefined;
export declare function safeInvoke<A, R>(func: ((arg1: A) => R) | undefined, arg1: A): R | undefined;
export declare function safeInvoke<A, B, R>(func: ((arg1: A, arg2: B) => R) | undefined, arg1: A, arg2: B): R | undefined;
export declare function safeInvoke<A, B, C, R>(func: ((arg1: A, arg2: B, arg3: C) => R) | undefined, arg1: A, arg2: B, arg3: C): R | undefined;
export declare function safeInvoke<A, B, C, D, R>(func: ((arg1: A, arg2: B, arg3: C, arg4: D) => R) | undefined, arg1: A, arg2: B, arg3: C, arg4: D): R | undefined;
/**
 * Safely invoke the provided entity if it is a function; otherwise, return the
 * entity itself.
 * @deprecated use TypeScript 3.7+ optional call operator func?.()
 */
export declare function safeInvokeOrValue<R>(funcOrValue: (() => R) | R | undefined): R;
export declare function safeInvokeOrValue<A, R>(funcOrValue: ((arg1: A) => R) | R | undefined, arg1: A): R;
export declare function safeInvokeOrValue<A, B, R>(funcOrValue: ((arg1: A, arg2: B) => R) | R | undefined, arg1: A, arg2: B): R;
export declare function safeInvokeOrValue<A, B, C, R>(funcOrValue: ((arg1: A, arg2: B, arg3: C) => R) | R | undefined, arg1: A, arg2: B, arg3: C): R;
export declare function safeInvokeOrValue<A, B, C, D, R>(funcOrValue: ((arg1: A, arg2: B, arg3: C, arg4: D) => R) | R | undefined, arg1: A, arg2: B, arg3: C, arg4: D): R;
