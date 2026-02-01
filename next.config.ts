import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/nowmode",
  assetPrefix: "/nowmode",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
