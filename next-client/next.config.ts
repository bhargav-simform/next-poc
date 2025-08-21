import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    position: 'bottom-right',
  }
};

export default nextConfig;
