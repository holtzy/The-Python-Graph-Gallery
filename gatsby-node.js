const path = require(`path`);

// This allows to render iframe
// see https://github.com/gatsbyjs/gatsby/issues/17761
// iframes are used to insert plotly outputs (interactive charts) to pages.
const express = require('express');
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'));
};

// alias `slug` to `metadata.slug` for ease of use of `slug` in filesystem routing
// i.e. {jupyterNotebook.slug}.js
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type JupyterNotebook implements Node {
      slug: String @proxy(from: "metadata.slug")
    }
  `;
  createTypes(typeDefs);
};
