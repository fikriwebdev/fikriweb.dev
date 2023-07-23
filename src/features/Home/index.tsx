import { Blog as BlogType, Project, Recipe } from "contentlayer/generated";
import Blog from "./components/Blog";
import CTACard from "./components/CTACard";
import Hero from "./components/HomeHero";
import Projects from "./components/Projects";
import Timelines from "./components/Timelines";
import UIRecipes from "./components/UIRecipes";
import { NextSeo } from "next-seo";

interface HomeProps {
    blogs: BlogType[];
    projects: Project[];
    recipes: Recipe[];
}

export default function ViewHome({ blogs, projects, recipes }: HomeProps) {
    return (
        <>
            <NextSeo
                openGraph={{
                    url: `${process.env.NEXT_PUBLIC_PROD_URL}`,
                    title: "fikriweb.dev",
                    description:
                        "I like to create front-end solutions  that are fast, flexible",
                    type: "website",
                    siteName: "fikriweb.dev",
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_PROD_URL}assets/images/logo.png`,
                            secureUrl: `${process.env.NEXT_PUBLIC_PROD_URL}assets/images/logo.png`,
                            width: 800,
                            height: 600,
                            alt: "fikriweb.dev logo",
                        },
                    ],
                }}
                additionalMetaTags={[
                    {
                        name: "twitter:title",
                        content: "fikriweb.dev",
                    },
                    {
                        name: "twitter:description",
                        content:
                            "I like to create front-end solutions  that are fast, flexible",
                    },
                    {
                        name: "twitter:image",
                        content: `${process.env.NEXT_PUBLIC_PROD_URL}assets/images/logo.png`,
                    },
                    {
                        name: "twitter:image:src",
                        content: `${process.env.NEXT_PUBLIC_PROD_URL}assets/images/logo.png`,
                    },
                    {
                        name: "twitter:image:alt",
                        content: "fikri logo",
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image",
                    },
                ]}
            />
            <Hero />
            <Timelines />
            <Blog data={blogs} />
            <Projects data={projects} />
            <UIRecipes data={recipes} />
            <CTACard />
        </>
    );
}
