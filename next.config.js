/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    env: {
        WP_API: process.env.WP_API,
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT

    },
    images: { 
        unoptimized: true,
    },
}

module.exports = nextConfig
