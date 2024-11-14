/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true
  },
  // Ignore TypeScript errors during development
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;