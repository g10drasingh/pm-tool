import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // serverActions: true already default in 15
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
