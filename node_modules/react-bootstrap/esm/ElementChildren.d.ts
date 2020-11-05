import React from 'react';
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
declare function map<P = any>(children: any, func: (el: React.ReactElement<P>, index: number) => any): any;
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
declare function forEach<P = any>(children: any, func: (el: React.ReactElement<P>, index: number) => void): void;
export { map, forEach };
