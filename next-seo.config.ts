import { DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
    title: undefined,
    defaultTitle: "fikriweb.dev",
    titleTemplate: "fikriweb.dev | %s ",
    // description:
    //     "I like to create front-end solutions  that are fast, flexible",

    // canonical: `${process.env.NEXT_PUBLIC_PROD_URL}`,
    // openGraph: {
    //     url: `${process.env.NEXT_PUBLIC_PROD_URL}`,
    //     title: "fikriweb.dev",
    //     description:
    //         "I like to create front-end solutions  that are fast, flexible",
    //     images: [
    //         {
    //             url: "/assets/images/logo.png",
    //             alt: "fikriweb.dev logo",
    //         },
    //     ],
    // },
    twitter: {
        cardType: "summary",
        site: "@fikriweb.dev",
        handle: "@muhamdfikrii",
    },
};

export default defaultSeo;
