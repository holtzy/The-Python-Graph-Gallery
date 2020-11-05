import mapContextToProps from './mapContextToProps';
export default (function (Context, prop, Component) {
  return mapContextToProps(Context, function (context) {
    var _ref;

    return _ref = {}, _ref[prop] = context, _ref;
  }, Component);
});