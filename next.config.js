/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    // register: true,
    // skipWaiting: true,
    swSrc: 'service-worker.js',
    disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['image.tmdb.org']
  }
});

module.exports = nextConfig
