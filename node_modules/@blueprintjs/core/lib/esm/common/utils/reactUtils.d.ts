import * as React from "react";
/**
 * Returns true if `node` is null/undefined, false, empty string, or an array
 * composed of those. If `node` is an array, only one level of the array is
 * checked, for performance reasons.
 */
export declare function isReactNodeEmpty(node?: React.ReactNode, skipArray?: boolean): boolean;
/**
 * Converts a React node to an element: non-empty string or number or
 * `React.Fragment` (React 16.3+) is wrapped in given tag name; empty strings
 * and booleans are discarded.
 */
export declare function ensureElement(child: React.ReactNode | undefined, tagName?: keyof JSX.IntrinsicElements): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | undefined;
export declare function isReactElement<T = any>(child: React.ReactNode): child is React.ReactElement<T>;
/**
 * Represents anything that has a `name` property such as Functions.
 */
export interface INamed {
    name?: string;
}
export declare function getDisplayName(ComponentClass: React.ComponentType | INamed): string;
/**
 * Returns true if the given JSX element matches the given component type.
 *
 * NOTE: This function only checks equality of `displayName` for performance and
 * to tolerate multiple minor versions of a component being included in one
 * application bundle.
 * @param element JSX element in question
 * @param ComponentType desired component type of element
 */
export declare function isElementOfType<P = {}>(element: any, ComponentType: React.ComponentType<P>): element is React.ReactElement<P>;
/**
 * Returns React.createRef if it's available, or a ref-like object if not.
 */
export declare function createReactRef<T>(): React.RefObject<T>;
/**
 * Replacement type for { polyfill } from "react-lifecycles-compat" useful in some places where
 * the correct type is not inferred automatically. This should be removed once Blueprint depends on React >= 16.
 * HACKHACK part of https://github.com/palantir/blueprint/issues/4342
 */
export declare type LifecycleCompatPolyfill<P, T extends React.ComponentClass<P>> = (Comp: T) => T & {
    [K in keyof T]: T[K];
};
