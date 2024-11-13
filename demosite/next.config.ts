import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

const nextConfig: NextConfig = {

  reactStrictMode: true, 
  output: "export",
  basePath: isProd ? "/reactdemo/" : "",
  assetPrefix: isProd ? "/reactdemo/" : "",
  images: {
    unoptimized: isProd,
  },
  
};

export default nextConfig;
