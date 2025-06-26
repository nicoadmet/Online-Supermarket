/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Online-Supermarket', 
  assetPrefix: '/Online-Supermarket', 
};

module.exports = nextConfig;
