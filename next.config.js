const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    experimental: {
        appDir: false,
        largePageDataBytes: 128 * 100000,
    },
};

module.exports = withContentlayer(nextConfig);
