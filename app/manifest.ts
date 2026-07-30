import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Davelaw Technologies',
    short_name: 'Davelaw',
    description:
      'Reliable solar energy solutions, hybrid inverters, batteries, CCTV systems and electrical installations across Nigeria.',

    start_url: '/',

    display: 'standalone',

    background_color: '#ffffff',

    theme_color: '#021823',

    orientation: 'portrait',

    lang: 'en',

    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
