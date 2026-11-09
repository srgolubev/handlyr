import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Dropped the Manhasset service area — preserve any inbound links/SEO.
      {
        source: "/service-areas/manhasset",
        destination: "/service-areas",
        permanent: true, // permanent redirect (Next emits 308; SEO-equivalent to 301)
      },
      // Retired the Manhattan move-in PPC landing page.
      {
        source: "/move-in-nyc",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
