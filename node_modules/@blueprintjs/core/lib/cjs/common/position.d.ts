export declare const Position: {
    BOTTOM: "bottom";
    BOTTOM_LEFT: "bottom-left";
    BOTTOM_RIGHT: "bottom-right";
    LEFT: "left";
    LEFT_BOTTOM: "left-bottom";
    LEFT_TOP: "left-top";
    RIGHT: "right";
    RIGHT_BOTTOM: "right-bottom";
    RIGHT_TOP: "right-top";
    TOP: "top";
    TOP_LEFT: "top-left";
    TOP_RIGHT: "top-right";
};
export declare type Position = typeof Position[keyof typeof Position];
export declare function isPositionHorizontal(position: Position): boolean;
export declare function isPositionVertical(position: Position): boolean;
export declare function getPositionIgnoreAngles(position: Position): "left" | "right" | "bottom" | "top";
