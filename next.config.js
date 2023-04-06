/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENVIRONMENT_URL: process.env.ENVIRONMENT_URL,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    USERNAME: process.env.USERNAME,
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.veryfi.com",
      },
      {
        protocol: "https",
        hostname: "scdn.veryfi.com",
      },
    ],
  },
};

module.exports = nextConfig;
