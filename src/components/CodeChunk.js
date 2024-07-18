import './codeChunk.css';

import React, { useState } from 'react';
import Prism from '../prism/prism';
import '../prism/prism.css';
import { Clipboard } from 'lucide-react';

export default function CodeChunk({ children, hasWhiteBackground = false }) {
  const [isCopied, setIsCopied] = useState(false);

  React.useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  const copyButton = (
    <div
      onClick={() => {
        navigator.clipboard.writeText(children);
        setIsCopied(true);
      }}
      className="codeChunckCopyButton"
    >
      {isCopied ? 'Copied' : <Clipboard size={14} style={{ padding: 0 }} />}
    </div>
  );

  return (
    <div style={{ position: 'relative' }} title="Copy code to clipboard">
      <pre style={{ backgroundColor: hasWhiteBackground ? 'white' : '' }}>
        <code
          style={{
            outline: '0px solid transparent',
            backgroundColor: hasWhiteBackground ? 'white' : '',
          }}
          className="language-python"
        >
          {children}
        </code>
      </pre>
      <div className="copyButtonContainer">{copyButton}</div>
    </div>
  );
}
