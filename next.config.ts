import type { NextConfig } from 'next';

// Static export served by GitHub Pages.
// trailingSlash: true produces /slug/index.html, exactly like the former Gatsby build,
// so every URL stays identical (GitHub Pages redirects /slug to /slug/).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
