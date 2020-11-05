import ownerDocument from 'dom-helpers/ownerDocument';
import safeFindDOMNode from './safeFindDOMNode';
export default (function (componentOrElement) {
  return ownerDocument(safeFindDOMNode(componentOrElement));
});