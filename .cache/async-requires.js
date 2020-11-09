// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-density-plot-js": () => import("./../../../src/pages/density-plot.js" /* webpackChunkName: "component---src-pages-density-plot-js" */),
  "component---src-pages-histogram-js": () => import("./../../../src/pages/histogram.js" /* webpackChunkName: "component---src-pages-histogram-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-violin-plot-js": () => import("./../../../src/pages/violin-plot.js" /* webpackChunkName: "component---src-pages-violin-plot-js" */),
  "component---src-templates-basic-js": () => import("./../../../src/templates/basic.js" /* webpackChunkName: "component---src-templates-basic-js" */)
}

