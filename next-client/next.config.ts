import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    position: 'bottom-left',
  },
  experimental: {
    optimizePackageImports: ['antd', 'react-draft-wysiwyg'],
    serverActions: {
      allowedOrigins: ['http://localhost:3000', 'http://localhost:3001'],
    }
  }
  // expireTime: 60,
};

export default withBundleAnalyzer(nextConfig);
