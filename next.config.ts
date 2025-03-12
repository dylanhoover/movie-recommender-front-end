import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "image.tmdb.org" }],
  },
  async rewrites() {
    return [
      {
        source: "/recommend/:path*",
        destination: "http://localhost:8000/:path*",
      },
      // {
      //   source: "/poster/:path*",
      //   destination: "https://api.themoviedb.org/3/movie/:path*",
      // },
    ];
  },
};

export default nextConfig;
