/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eldenring.fanapis.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig