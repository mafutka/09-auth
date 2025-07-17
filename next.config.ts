import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['ac.goit.global'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://notehub-api.goit.study/:path*',
      },
    ];
  },
};

export default nextConfig;
