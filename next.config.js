/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/chatsooner-387206.appspot.com/cdn/jobs/*',
            },
        ],
    },
};

module.exports = nextConfig;
