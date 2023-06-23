(function (w, d) {
  console.log("raptive activated");
  w.adthrive = w.adthrive || {};
  w.adthrive.cmd = w.adthrive.cmd || [];
  w.adthrive.plugin = "adthrive-ads-manual";
  w.adthrive.host = "ads.adthrive.com";
  var s = d.createElement("script");
  s.async = true;
  s.referrerpolicy = "no-referrer-when-downgrade";
  s.src =
    "https://" +
    w.adthrive.host +
    "/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer=" +
    w.encodeURIComponent(w.location.href) +
    "&cb=" +
    (Math.floor(Math.random() * 100) + 1);
  var n = d.getElementsByTagName("script")[0];
  n.parentNode.insertBefore(s, n);
})(window, document);
