/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/Online-Supermarket' : '',
  assetPrefix: isProd ? '/Online-Supermarket/' : '',
}

module.exports = nextConfig
