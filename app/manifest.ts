import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Python Graph Gallery',
    short_name: 'Python Graph Gallery',
    start_url: '/',
    background_color: '#ffffff',
    theme_color: '#cb1dd1',
    display: 'minimal-ui',
    icons: [48, 72, 96, 144, 192, 256, 384, 512].map((s) => ({
      src: `/icons/icon-${s}x${s}.png`,
      sizes: `${s}x${s}`,
      type: 'image/png',
    })),
  };
}
