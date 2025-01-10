/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate", // No caching for SSR pages
          },
        ],
      },
    ];
  },
};

export default nextConfig;
