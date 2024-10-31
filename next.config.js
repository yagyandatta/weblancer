/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
