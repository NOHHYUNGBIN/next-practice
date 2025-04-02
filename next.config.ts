import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/products/delete",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/delete2",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
