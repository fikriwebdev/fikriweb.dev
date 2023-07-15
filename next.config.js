const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: false,
    },
};

// Merge MDX config with Next.js config
module.exports = withContentlayer(nextConfig);
