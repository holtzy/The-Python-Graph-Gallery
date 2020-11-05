import * as React from "react";
import { Intent, IProps } from "../../common";
export declare const HandleType: {
    /** A full handle appears as a small square. */
    FULL: "full";
    /** A start handle appears as the left or top half of a square. */
    START: "start";
    /** An end handle appears as the right or bottom half of a square. */
    END: "end";
};
export declare type HandleType = typeof HandleType[keyof typeof HandleType];
export declare const HandleInteractionKind: {
    /** Locked handles prevent other handles from being dragged past then. */
    LOCK: "lock";
    /** Push handles move overlapping handles with them as they are dragged. */
    PUSH: "push";
    /**
     * Handles marked "none" are not interactive and do not appear in the UI.
     * They serve only to break the track into subsections that can be colored separately.
     */
    NONE: "none";
};
export declare type HandleInteractionKind = typeof HandleInteractionKind[keyof typeof HandleInteractionKind];
export interface IHandleProps extends IProps {
    /** Numeric value of this handle. */
    value: number;
    /** Intent for the track segment immediately after this handle, taking priority over `intentBefore`. */
    intentAfter?: Intent;
    /** Intent for the track segment immediately before this handle. */
    intentBefore?: Intent;
    /** Style to use for the track segment immediately after this handle, taking priority over `trackStyleBefore`. */
    trackStyleAfter?: React.CSSProperties;
    /** Style to use for the track segment immediately before this handle */
    trackStyleBefore?: React.CSSProperties;
    /**
     * How this handle interacts with other handles.
     * @default "lock"
     */
    interactionKind?: HandleInteractionKind;
    /**
     * Callback invoked when this handle's value is changed due to a drag
     * interaction. Note that "push" interactions can cause multiple handles to
     * update at the same time.
     */
    onChange?: (newValue: number) => void;
    /** Callback invoked when this handle is released (the end of a drag interaction). */
    onRelease?: (newValue: number) => void;
    /**
     * Handle appearance type.
     * @default "full"
     */
    type?: HandleType;
}
