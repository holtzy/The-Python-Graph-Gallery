import { Placement } from "popper.js";
import * as React from "react";
import { PopperArrowProps } from "react-popper";
export interface IPopoverArrowProps {
    arrowProps: PopperArrowProps;
    placement: Placement;
}
export declare const PopoverArrow: React.FunctionComponent<IPopoverArrowProps>;
