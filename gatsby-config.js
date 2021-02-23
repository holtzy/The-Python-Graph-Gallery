/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // siteMetadata added here can now be used anywhere in the website thanks to a graphQL query
  siteMetadata: {
    title: "The Python Graph Gallery",
    description: "A gallery of charts made with Python",
  },
  pathPrefix: "/The-Python-Graph-Gallery",
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notebooks`,
        path: `${__dirname}/src/notebooks`,
        ignore: [`**/.ipynb_checkpoints`],
      },
    },
    {
      resolve: `@rafaelquintanilha/gatsby-transformer-ipynb`,
      options: {
        notebookProps: {
          displayOrder: ["image/png", "text/html", "text/plain"],
          showPrompt: false,
        },
      },
    },
  ],
};
