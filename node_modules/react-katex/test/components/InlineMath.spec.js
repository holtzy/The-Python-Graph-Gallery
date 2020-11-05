import { InlineMath } from '../../src';
import sharedExamples from '../sharedExamples';

describe('InlineMath', function() {
  sharedExamples(InlineMath, {
    wrapperTag: 'span',
    displayMode: false
  });
});
