import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/upload',
        destination: 'http://localhost:8080/upload',
      },
      {
        source: '/api/download/:port',
        destination: 'http://localhost:8080/download/:port',
      },
    ];
  },
};

export default nextConfig;
