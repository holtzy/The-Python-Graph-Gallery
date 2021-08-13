"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.runPageQueries = runPageQueries;

var _query = require("../query");

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var _assertStore = require("../utils/assert-store");

var _showExperimentNotice = require("../utils/show-experiment-notice");

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _nodeManifest = require("../utils/node-manifest");

const ONE_MINUTE = 1 * 60 * 1000;

async function runPageQueries({
  parentSpan,
  queryIds,
  store,
  program,
  graphqlRunner
}) {
  (0, _assertStore.assertStore)(store);
  const state = store.getState();

  if (!queryIds) {
    return;
  }

  const {
    pageQueryIds
  } = queryIds;

  if (pageQueryIds.length === 0) {
    return;
  }

  const activity = _reporter.default.createProgress(`run page queries`, pageQueryIds.length, 0, {
    id: `page-query-running`,
    parentSpan
  }); // TODO: This is hacky, remove with a refactor of PQR itself


  if (!process.env.GATSBY_EXPERIMENTAL_PARALLEL_QUERY_RUNNING) {
    activity.start();
  }

  let cancelNotice;

  if (process.env.gatsby_executing_command === `develop` && !process.env.GATSBY_EXPERIMENTAL_QUERY_ON_DEMAND && !(0, _gatsbyCoreUtils.isCI)()) {
    cancelNotice = (0, _showExperimentNotice.showExperimentNoticeAfterTimeout)(`Query On Demand`, `https://gatsby.dev/query-on-demand-feedback`, `which avoids running page queries in development until you visit a page — so a lot less upfront work. Here's how to try it:

modules.exports = {
  flags: { QUERY_ON_DEMAND: true },
  plugins: [...]
}
`, ONE_MINUTE);
  }

  await (0, _query.processPageQueries)(pageQueryIds, {
    state,
    activity,
    graphqlRunner,
    graphqlTracing: program === null || program === void 0 ? void 0 : program.graphqlTracing
  });

  if (process.env.NODE_ENV !== `development`) {
    /**
     * only process node manifests here when not in develop. for gatsby develop we process node manifests in src/query/query-watcher.ts everytime queries are re-run. Because we process node manifests in this location for gatsby build we have all the information needed to create the manifests. In query-watcher during gatsby build we might not have all information about created pages and queries.
     */
    await (0, _nodeManifest.processNodeManifests)();
  }

  if (cancelNotice) {
    cancelNotice();
  }

  if (!process.env.GATSBY_EXPERIMENTAL_PARALLEL_QUERY_RUNNING) {
    activity.done();
  }
}
//# sourceMappingURL=run-page-queries.js.map