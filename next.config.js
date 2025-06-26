/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // si usás next/image y no querés optimización serverless
  },
}

module.exports = nextConfig
