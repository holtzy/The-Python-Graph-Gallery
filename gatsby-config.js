/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // siteMetadata added here can now be used anywhere in the website thanks to a graphQL query
  siteMetadata: {
    title: 'The Python Graph Gallery',
    description: 'A gallery of charts made with Python',
    siteUrl: `https://python-graph-gallery.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Python Graph Gallery`,
        short_name: `Python Graph Gallery`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cb1dd1`,
        display: `minimal-ui`,
        icon: `static/logo/Home_single_big.png`,
        // Yan, if you want to override with specific sized icons
        // (e.g. to adjust line weight), see the docs here:
        // https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest#hybrid-mode-configuration
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-79254642-2', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: false,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    `gatsby-plugin-image`,
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
      resolve: `transform-ipynb`,
      options: {
        notebookProps: {
          displayOrder: ['image/png', 'text/html', 'text/plain'],
          showPrompt: false,
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
