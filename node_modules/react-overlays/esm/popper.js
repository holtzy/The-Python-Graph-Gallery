import arrow from '@popperjs/core/lib/modifiers/arrow';
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles';
import eventListeners from '@popperjs/core/lib/modifiers/eventListeners';
import flip from '@popperjs/core/lib/modifiers/flip';
import hide from '@popperjs/core/lib/modifiers/hide';
import offset from '@popperjs/core/lib/modifiers/offset';
import popperOffsets from '@popperjs/core/lib/modifiers/popperOffsets';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import { placements } from '@popperjs/core/lib/enums';
import { popperGenerator } from '@popperjs/core/lib/popper-base'; // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

export var createPopper = popperGenerator({
  defaultModifiers: [hide, popperOffsets, computeStyles, eventListeners, offset, flip, preventOverflow, arrow]
});
export { placements };