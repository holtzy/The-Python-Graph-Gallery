import ReactDOM from 'react-dom';
export default function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}