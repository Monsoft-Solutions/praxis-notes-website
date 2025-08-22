import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Option 1: Allow images from any domain (less secure but flexible)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Option 2: Specific domains only (more secure - uncomment and use instead if preferred)
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "*.public.blob.vercel-storage.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //   },
    //   // Add other specific domains as needed
    // ],
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
