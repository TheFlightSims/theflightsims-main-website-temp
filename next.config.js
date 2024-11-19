/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable JavaScript minification
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
