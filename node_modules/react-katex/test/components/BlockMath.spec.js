import { BlockMath } from '../../src';
import sharedExamples from '../sharedExamples';

describe('BlockMath', function() {
  sharedExamples(BlockMath, {
    wrapperTag: 'div',
    displayMode: true
  });
});
