'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.onRouteUpdate = function (_ref) {
  var location = _ref.location;

  var trackingId = window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID;
  var anonymize = window.GATSBY_GTAG_PLUGIN_ANONYMIZE || false;

  if (!trackingId || typeof window.gtag !== 'function') {
    return;
  }

  var locationStr = '';

  if (location) {
    locationStr = '' + location.pathname + location.search + location.hash;
  }

  var anonymizeObj = {};
  if (anonymize) {
    anonymizeObj = { anonymize_ip: true };
  }

  window.gtag('config', trackingId, _extends({
    page_path: locationStr
  }, anonymizeObj));
};