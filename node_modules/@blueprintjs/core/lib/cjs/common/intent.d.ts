/**
 * The four basic intents.
 */
export declare const Intent: {
    NONE: "none";
    PRIMARY: "primary";
    SUCCESS: "success";
    WARNING: "warning";
    DANGER: "danger";
};
export declare type Intent = typeof Intent[keyof typeof Intent];
