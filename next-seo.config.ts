import { DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
    title: undefined,
    defaultTitle: "fikriweb.dev",
    description:
        "I like to create front-end solutions  that are fast, flexible",
    titleTemplate: "fikriweb.dev | %s ",
    canonical: "https://www.fikriweb.dev",
    openGraph: {
        url: "https://www.fikriweb.dev",
        title: "fikriweb.dev",
        description:
            "I like to create front-end solutions  that are fast, flexible",
        images: [
            {
                url: "/assets/images/logo.png",
                width: 800,
                height: 600,
                alt: "fikriweb.dev logo",
            },
        ],
    },
    twitter: {
        cardType: "summary",
        site: "@fikriweb.dev",
        handle: "@muhamdfikrii",
    },
};

export default defaultSeo;
