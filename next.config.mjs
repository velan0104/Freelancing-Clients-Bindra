/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    polyfillsOptimization: true, // Ensures unnecessary polyfills are removed.
  },
};

export default nextConfig;
