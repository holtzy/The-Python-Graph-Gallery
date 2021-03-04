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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Python Graph Gallery`,
        short_name: `Python Graph Gallery`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#69b3a2`,
        display: `standalone`,
        icon: `static/logo/Home_single_big.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-79254642-2", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
};
