import { UsePopperOptions, Offset, Placement, Modifiers } from './usePopper';
export declare type Config = {
    flip?: boolean;
    fixed?: boolean;
    alignEnd?: boolean;
    enabled?: boolean;
    containerPadding?: number;
    arrowElement?: Element | null;
    enableEvents?: boolean;
    offset?: Offset;
    placement?: Placement;
    popperConfig?: UsePopperOptions;
};
export declare function toModifierMap(modifiers: Modifiers | undefined): Record<string, Partial<import("./usePopper").Modifier<any, any>>>;
export declare function toModifierArray(map?: Modifiers | undefined): Partial<import("@popperjs/core").Modifier<any, any>>[];
export default function mergeOptionsWithPopperConfig({ enabled, enableEvents, placement, flip, offset, fixed, containerPadding, arrowElement, popperConfig, }: Config): UsePopperOptions;
