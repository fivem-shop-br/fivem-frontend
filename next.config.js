/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
    images: {
        domains: ["www.datocms-assets.com"],
    },
};

module.exports = nextConfig;