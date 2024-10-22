/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    env: {
        WP_API: process.env.WP_API,
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
        NETLIFY_EMAILS_SECRET: process.env.NETLIFY_EMAILS_SECRET,
        SITE_URL: process.env.SITE_URL
    },
    images: { 
        unoptimized: true,
    },
}

module.exports = nextConfig
