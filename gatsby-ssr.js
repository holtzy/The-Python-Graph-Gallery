import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoRegular"
    />,
  ]);
};
