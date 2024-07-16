import React from 'react';
import Prism from '../prism/prism';
import '../prism/prism.css';

export default function CodeChunk({ children, hasWhiteBackground = false }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <pre style={{ backgroundColor: hasWhiteBackground ? 'white' : '' }}>
        <code
          style={{
            outline: '0px solid transparent',
            backgroundColor: hasWhiteBackground ? 'white' : '',
          }}
          className={`language-javascript`}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
