/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    // GitHub Pages runs on a subpath (the repo name), so we need to set basePath
    basePath: isProd ? '/lilys-bakehouse' : '',
    // Asset prefix ensures static assets are loaded from the correct path
    assetPrefix: isProd ? '/lilys-bakehouse/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
