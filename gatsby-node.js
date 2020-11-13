const path = require(`path`);

// This allows to render iframe
// see https://github.com/gatsbyjs/gatsby/issues/17761
const express = require('express')
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'))
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogPostTemplate = path.resolve(`src/templates/basic.js`);
  const results = await graphql(
    `
      {
        allJupyterNotebook {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  );
  const posts = results.data.allJupyterNotebook.nodes;
  posts.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "JupyterNotebook") {
    createNodeField({
      name: "slug",
      node,
      value: node.json.metadata.slug,
    });
  }
};
