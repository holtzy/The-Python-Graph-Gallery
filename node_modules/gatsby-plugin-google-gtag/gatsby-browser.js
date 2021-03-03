"use strict";

exports.onRouteUpdate = function (_ref) {
  var location = _ref.location;

  if (process.env.NODE_ENV !== "production" || typeof gtag !== "function") {
    return null;
  }

  var pathIsExcluded = location && typeof window.excludeGtagPaths !== "undefined" && window.excludeGtagPaths.some(function (rx) {
    return rx.test(location.pathname);
  });
  if (pathIsExcluded) return null; // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)

  var sendPageView = function sendPageView() {
    var pagePath = location ? location.pathname + location.search + location.hash : undefined;
    window.gtag("event", "page_view", {
      page_path: pagePath
    });
  };

  if ("requestAnimationFrame" in window) {
    requestAnimationFrame(function () {
      requestAnimationFrame(sendPageView);
    });
  } else {
    // simulate 2 rAF calls
    setTimeout(sendPageView, 32);
  }

  return null;
};