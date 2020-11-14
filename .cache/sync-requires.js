const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/about.js"))),
  "component---src-pages-all-charts-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/all-charts.js"))),
  "component---src-pages-boxplot-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/boxplot.js"))),
  "component---src-pages-density-plot-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/density-plot.js"))),
  "component---src-pages-histogram-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/histogram.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/index.js"))),
  "component---src-pages-ridgeline-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/ridgeline.js"))),
  "component---src-pages-scatter-plot-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/scatter-plot.js"))),
  "component---src-pages-violin-plot-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/pages/violin-plot.js"))),
  "component---src-templates-basic-js": hot(preferDefault(require("/Users/yan.holtz/Desktop/The-Python-Graph-Gallery/src/templates/basic.js")))
}

