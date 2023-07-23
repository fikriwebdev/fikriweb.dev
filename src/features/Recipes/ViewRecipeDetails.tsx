import Button from "@/components/Button";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import Separator from "@/components/Separator";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Recipe } from "contentlayer/generated";
import { Share2 } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";

import PreviewButton from "./components/PreviewButton";

import ReusableButton from "@/components/shared/Recipes/Button";
import WhatsappFileMenu from "@/components/shared/Recipes/WhatsappFileMenu";
import { PropsWithChildren } from "react";
import PreviewTabs from "./components/PreviewTabs";
import PreviewInput from "./components/PreviewInput";

function Container({ children }: PropsWithChildren) {
    return (
        <div className="w-full flex items-center justify-center min-h-[200px] border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 mb-4 overflow-auto">
            {children}
        </div>
    );
}

export default function ViewRecipeDetails({ recipe }: { recipe: Recipe }) {
    const MDXContent = useMDXComponent(recipe.body.code);

    return (
        <>
            <NextSeo
                title={recipe.title}
                description={recipe.description}
                openGraph={{
                    type: "website",
                    title: recipe.title,
                    url: `${
                        process.env.NEXT_PUBLIC_PROD_URL
                    }recipes/${recipe._raw.flattenedPath.replace(
                        "recipes/",
                        ""
                    )}`,
                    description: recipe.description,
                    siteName: "fikriweb.dev",
                    images: [
                        {
                            url: `${
                                process.env.NEXT_PUBLIC_PROD_URL
                            }api/og?title=${encodeURI(recipe.title)}`,
                            secureUrl: `${
                                process.env.NEXT_PUBLIC_PROD_URL
                            }api/og?title=${encodeURI(recipe.title)}`,
                        },
                    ],
                }}
                additionalMetaTags={[
                    {
                        name: "twitter:title",
                        content: recipe.title,
                    },
                    {
                        name: "twitter:description",
                        content: recipe.description,
                    },
                    {
                        name: "twitter:image",
                        content: `${
                            process.env.NEXT_PUBLIC_PROD_URL
                        }api/og?title=${encodeURI(recipe.title)}`,
                    },
                    {
                        name: "twitter:image:src",
                        content: `${
                            process.env.NEXT_PUBLIC_PROD_URL
                        }api/og?title=${encodeURI(recipe.title)}`,
                    },
                    {
                        name: "twitter:image:alt",
                        content: recipe.title,
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image",
                    },
                ]}
            />
            <div className="container mx-auto max-w-full md:max-w-4xl px-4 md:px-0 blo">
                <section>
                    <RightTopSideBlurryShape />
                    <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                        <Heading as="h1" className="mb-4">
                            {recipe.title}
                        </Heading>
                        <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
                            {recipe.description}
                        </p>
                    </div>

                    <MDXContent
                        components={{
                            ...mdxComponents,
                            Container,
                            WhatsappFileMenu,
                            Button: ReusableButton,
                            PreviewButton,
                            Tabs: PreviewTabs,
                            Input: PreviewInput,
                        }}
                    />
                </section>
                <Separator className="my-4" />
                <div className=" mx-auto my-8">
                    <BoxBorderAnimation className="max-w-xl">
                        <div className="text-center p-8 flex flex-col items-center gap-4">
                            <p className="text-3xl">🎊</p>
                            <p className="text-xl font-semibold">
                                Thank you for reading this blog post on{" "}
                                {recipe.title}, and I hope it helps you in your
                                development journey!
                            </p>
                            <Button rightIcon={<Share2 />}>Share Blog</Button>
                        </div>
                    </BoxBorderAnimation>
                </div>
            </div>
        </>
    );
}
