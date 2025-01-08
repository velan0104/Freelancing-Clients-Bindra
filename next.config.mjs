/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self'; 
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.googleapis.com; 
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
      img-src 'self' https://maps.gstatic.com https://www.google.com; 
      frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com; 
      font-src 'self' https://fonts.gstatic.com; 
      object-src 'none'; 
    `.replace(/\n/g, ""), // Remove newlines
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // Match all paths
        headers: securityHeaders,
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
