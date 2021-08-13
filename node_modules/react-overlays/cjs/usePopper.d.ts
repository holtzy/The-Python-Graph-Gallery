import * as Popper from '@popperjs/core';
export declare type Modifier<Name, Options> = Popper.Modifier<Name, Options>;
export declare type Options = Popper.Options;
export declare type Instance = Popper.Instance;
export declare type Placement = Popper.Placement;
export declare type VirtualElement = Popper.VirtualElement;
export declare type State = Popper.State;
export declare type OffsetValue = [
    number | null | undefined,
    number | null | undefined
];
export declare type OffsetFunction = (details: {
    popper: Popper.Rect;
    reference: Popper.Rect;
    placement: Placement;
}) => OffsetValue;
export declare type Offset = OffsetFunction | OffsetValue;
export declare type ModifierMap = Record<string, Partial<Modifier<any, any>>>;
export declare type Modifiers = Popper.Options['modifiers'] | Record<string, Partial<Modifier<any, any>>>;
export declare type UsePopperOptions = Omit<Options, 'modifiers' | 'placement' | 'strategy'> & {
    enabled?: boolean;
    placement?: Options['placement'];
    strategy?: Options['strategy'];
    modifiers?: Options['modifiers'];
};
export interface UsePopperState {
    placement: Placement;
    update: () => void;
    forceUpdate: () => void;
    attributes: Record<string, Record<string, any>>;
    styles: Record<string, Partial<CSSStyleDeclaration>>;
    state?: State;
}
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */
declare function usePopper(referenceElement: VirtualElement | null | undefined, popperElement: HTMLElement | null | undefined, { enabled, placement, strategy, modifiers, ...config }?: UsePopperOptions): UsePopperState;
export default usePopper;
