/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Rajesh_Furniture_Works',
  reactStrictMode: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
