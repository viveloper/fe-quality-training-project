/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
