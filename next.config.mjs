/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.transparenttextures.com', // Para el fondo de cubos si lo cambias
            },
        ],
    },
};

export default nextConfig;