import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: !!process.env.STATIC_EXPORT,
  images: { unoptimized: true },
};

export default nextConfig;
