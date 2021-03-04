'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutboundLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Code from OutboundLink module in gatsby-plugin-google-analytics
                                                                                                                                                                                                                                                                   * modified for gtag
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OutboundLink(props) {
  return _react2.default.createElement('a', _extends({}, props, {
    onClick: function onClick(e) {
      if (typeof props.onClick === 'function') {
        props.onClick();
      }
      var redirect = true;
      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) {
        redirect = false;
      }
      if (props.target && props.target.toLowerCase() !== '_self') {
        redirect = false;
      }

      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'outbound',
          event_label: props.href,
          transport_type: 'beacon',
          event_callback: function event_callback() {
            if (redirect) {
              document.location = props.href;
            }
          }
        });
      } else {
        if (redirect) {
          document.location = props.href;
        }
      }

      return false;
    }
  }));
}

OutboundLink.propTypes = {
  href: _propTypes2.default.string,
  target: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.OutboundLink = OutboundLink;