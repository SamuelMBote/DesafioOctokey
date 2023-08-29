/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.weatherapi.com',
      },
    ],
  },
};

module.exports = nextConfig;

