import React, { useEffect } from 'react';

// This is for ESLint, it does not understand that process is a global variable in a gatsby environment
/*global process*/

const AdInjector = ({ siteId }) => {
  useEffect(() => {
    // exit if dev mode
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    // Initialize AdThrive object
    window.adthrive = window.adthrive || {};
    window.adthrive.cmd = window.adthrive.cmd || [];
    window.adthrive.plugin = 'adthrive-ads-manual-spa';
    window.adthrive.host = 'ads.adthrive.com';

    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.referrerpolicy = 'no-referrer-when-downgrade';
    script.src = `https://${
      window.adthrive.host
    }/sites/${siteId}/ads.min.js?referrer=${encodeURIComponent(
      window.location.href
    )}`;

    // Insert the script element into the DOM
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, [siteId]);

  return null;
};

export default AdInjector;
