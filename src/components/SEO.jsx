// made following the Gatsby Doc: https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/

// This component is called by every page of the website.
// At the top of each page you will find a Head component export that calls this SEO component

// The SEO component will add stuff like title, description, image, lang... in the head of the HTML page
// AdThrive ads code is also added here

import React from 'react';

export const SEO = ({ title, seoDescription, keywords, image }) => {
  return (
    <>
      <title>{title}</title>
      <html lang="en" />
      <meta
        name="description"
        content={seoDescription || 'How to build a chart with Python'}
      />
      <meta name="author" content="Yan Holtz" />
      <meta
        name="keywords"
        content={keywords || 'python, chart, graph, code, viz, dataviz'}
      />

      <meta property="og:site_name" content="The Python Graph Gallery" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={
          image ||
          'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true'
        }
      />
      <meta property="og:description" content={seoDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@R_Graph_Gallery" />
    </>
  );
};
