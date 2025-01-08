/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self'; 
      script-src 'self'; 
      style-src 'self'; 
      img-src 'self'; 
      frame-src 'self' ; 
      font-src 'self'; 
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
    ];
  },
};

export default nextConfig;
