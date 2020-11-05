"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireWildcard(require("./Image"));

var defaultProps = {
  fluid: true
};

var FigureImage = _react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(_Image.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, 'figure-img')
  }));
});

FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = _Image.propTypes;
FigureImage.defaultProps = defaultProps;
var _default = FigureImage;
exports.default = _default;
module.exports = exports["default"];