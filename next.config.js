/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "paulomoutinho.vercel.app", "pbs.twimg.com", "media.licdn.com"]
  }
}

module.exports = nextConfig
