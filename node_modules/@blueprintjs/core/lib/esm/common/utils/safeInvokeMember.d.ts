/**
 * Safely invoke the member function with no arguments, if the object
 * exists and the given key is indeed a function, and return its value.
 * Otherwise, return `undefined`.
 * @deprecated use TypeScript 3.7+ optional chaining and optional call operator obj?[key]?.()
 */
export declare function safeInvokeMember<T extends {
    [k in K]?: () => R;
}, K extends keyof T, R = void>(obj: T | undefined, key: K): R | undefined;
/**
 * Safely invoke the member function with one argument, if the object
 * exists and the given key is indeed a function, and return its value.
 * Otherwise, return `undefined`.
 *
 * ```js
 * // example usage
 * safeInvokeMember(this.props.inputProps, "onChange", evt);
 * ```
 *
 * @deprecated use TypeScript 3.7+ optional chaining and optional call operator obj?[key]?.()
 */
export declare function safeInvokeMember<T extends {
    [k in K]?: (a: A) => R;
}, K extends keyof T, A, R = void>(obj: T | undefined, key: K, arg1: A): R | undefined;
/**
 * Safely invoke the member function with two arguments, if the object
 * exists and the given key is indeed a function, and return its value.
 * Otherwise, return `undefined`.
 * @deprecated use TypeScript 3.7+ optional chaining and optional call operator obj?[key]?.()
 */
export declare function safeInvokeMember<T extends {
    [k in K]?: (a: A, b: B) => R;
}, K extends keyof T, A, B, R = void>(obj: T | undefined, key: K, arg1: A, arg2: B): R | undefined;
/**
 * Safely invoke the member function with three arguments, if the object
 * exists and the given key is indeed a function, and return its value.
 * Otherwise, return undefined.
 * @deprecated use TypeScript 3.7+ optional chaining and optional call operator obj?[key]?.()
 */
export declare function safeInvokeMember<T extends {
    [k in K]?: (a: A, b: B, c: C) => R;
}, K extends keyof T, A, B, C, R = void>(obj: T | undefined, key: K, arg1: A, arg2: B, arg3: C): R | undefined;
