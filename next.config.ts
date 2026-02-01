import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Optional: add basePath if your repo name is not username.github.io
  // basePath: process.env.NODE_ENV === 'production' ? '/nowmode' : '',
};

export default nextConfig;
