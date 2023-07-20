import './chartImage.css';

import React from 'react';
import './image-patchwork.css';

export default function ImagePatchwork() {
  return (
    <div className="patchwork-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1000">
        <rect x="50" y="50" width="200" height="100" fill="blue" />
        <polygon points="200,50 350,350 50,350" fill="#ff0000" />
      </svg>
    </div>
  );
}
