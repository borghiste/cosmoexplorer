/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cosmoexplorer.vercel.app',
        pathname: '/images/planets/**.jpg',
      },
    ],
  },
};

export default nextConfig;
