'use client';

import { useEffect, useRef, useState } from 'react';

const TOOL_URL = 'https://holtzy.github.io/dataviz-color-finder/';

// Embeds the palette finder app. The ?palette= parameter of the page url is forwarded to the app.
export default function ColorPaletteFinderIframe() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState('');

  // The url parameter is only known in the browser (static export)
  useEffect(() => {
    const palette = new URLSearchParams(window.location.search).get('palette');
    setSrc(TOOL_URL + '?palette=' + palette);
  }, []);

  useEffect(() => {
    if (src) iframeRef.current?.focus();
  }, [src]);

  return (
    <div className="h-full">
      <iframe
        ref={iframeRef}
        id="color-tool"
        title="Tool to find a color palette for a python chart"
        width="100%"
        height="1300px"
        src={src || undefined}
        allow="clipboard-write"
        sandbox="allow-same-origin allow-top-navigation allow-modals allow-scripts"
        className="block w-full"
      />
    </div>
  );
}
