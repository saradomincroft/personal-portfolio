import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/personal-portfolio",
  assetPrefix: isGithubPages ? '/personal-portfolio/' : '',};

export default nextConfig;
