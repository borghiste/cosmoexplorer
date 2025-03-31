/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov', // Primo dominio
        pathname: '/**', // Puoi specificare un pattern, qui sono tutte le immagini
      },
      {
        protocol: 'https',
        hostname: 'cosmoexplorer.vercel.app', // Secondo dominio
        pathname: '/images/planets/**.jpg', // Specifica il percorso per le immagini
      },
    ],
  },
};

export default nextConfig;
