import React from 'react';

export default function Parallax({ imgLink, opacity, height, children }) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: 'url(' + imgLink + ')',
        height: height,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          opacity: 1 - opacity,
          position: 'absolute',
        }}
      />
      {children}
    </div>
  );
}
