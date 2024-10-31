/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Ignore TypeScript errors during development
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
