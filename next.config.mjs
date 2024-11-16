import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/sultan-web",
    output: "export",
    reactStrictMode: true,
};

module.exports = nextConfig;

export default withNextIntl(nextConfig);