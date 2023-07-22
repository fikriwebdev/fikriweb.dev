import { DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
    title: undefined,
    defaultTitle: "fikriweb.dev",
    description:
        "I like to create front-end solutions  that are fast, flexible",
    titleTemplate: "fikriweb.dev | %s ",
    canonical: `${process.env.PROD_URL}`,

    twitter: {
        cardType: "summary",
        site: "@fikriweb.dev",
        handle: "@muhamdfikrii",
    },
};

export default defaultSeo;
