import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'image.pollinations.ai',
      },
      {
        hostname: 'placehold.co',
      },
      {
        hostname: 'rexus.id',
      },
    ],
  },
  reactStrictMode: false
};

export default nextConfig;
