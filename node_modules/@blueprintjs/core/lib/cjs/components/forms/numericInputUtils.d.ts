/// <reference types="react" />
export declare function clampValue(value: number, min?: number, max?: number): number;
export declare function getValueOrEmptyValue(value?: number | string): string;
/** Returns `true` if the string represents a valid numeric value, like "1e6". */
export declare function isValueNumeric(value: string): boolean;
export declare function isValidNumericKeyboardEvent(e: React.KeyboardEvent): boolean;
/**
 * Round the value to have _up to_ the specified maximum precision.
 *
 * This differs from `toFixed(5)` in that trailing zeroes are not added on
 * more precise values, resulting in shorter strings.
 */
export declare function toMaxPrecision(value: number, maxPrecision: number): number;
/**
 * Convert full-width (Japanese) numbers to ASCII, and strip all characters that are not valid floating-point numeric characters
 */
export declare function sanitizeNumericInput(value: string): string;
