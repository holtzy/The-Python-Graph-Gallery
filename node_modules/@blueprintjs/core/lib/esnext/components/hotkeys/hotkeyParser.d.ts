export interface IKeyCodeTable {
    [code: number]: string;
}
export interface IKeyCodeReverseTable {
    [key: string]: number;
}
export interface IKeyMap {
    [key: string]: string;
}
export declare const KeyCodes: IKeyCodeTable;
export declare const Modifiers: IKeyCodeTable;
export declare const ModifierBitMasks: IKeyCodeReverseTable;
export declare const Aliases: IKeyMap;
export declare const ShiftKeys: IKeyMap;
export interface IKeyCombo {
    key?: string;
    modifiers: number;
}
export declare function comboMatches(a: IKeyCombo, b: IKeyCombo): boolean;
/**
 * Converts a key combo string into a key combo object. Key combos include
 * zero or more modifier keys, such as `shift` or `alt`, and exactly one
 * action key, such as `A`, `enter`, or `left`.
 *
 * For action keys that require a shift, e.g. `@` or `|`, we inlude the
 * necessary `shift` modifier and automatically convert the action key to the
 * unshifted version. For example, `@` is equivalent to `shift+2`.
 */
export declare const parseKeyCombo: (combo: string) => IKeyCombo;
/**
 * Converts a keyboard event into a valid combo prop string
 */
export declare const getKeyComboString: (e: KeyboardEvent) => string;
/**
 * Determines the key combo object from the given keyboard event. Again, a key
 * combo includes zero or more modifiers (represented by a bitmask) and one
 * action key, which we determine from the `e.which` property of the keyboard
 * event.
 */
export declare const getKeyCombo: (e: KeyboardEvent) => IKeyCombo;
/**
 * Splits a key combo string into its constituent key values and looks up
 * aliases, such as `return` -> `enter`.
 *
 * Unlike the parseKeyCombo method, this method does NOT convert shifted
 * action keys. So `"@"` will NOT be converted to `["shift", "2"]`).
 */
export declare const normalizeKeyCombo: (combo: string, platformOverride?: string | undefined) => string[];
