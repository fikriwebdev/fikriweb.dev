/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "fikriweb-dev.vercel.app",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                allow: "/api/og/*",
            },
        ],
    },
};
