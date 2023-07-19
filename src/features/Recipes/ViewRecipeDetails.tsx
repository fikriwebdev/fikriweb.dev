import Button from "@/components/Button";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import Separator from "@/components/Separator";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Recipe } from "contentlayer/generated";
import { ArrowRight, Loader, Settings, Share } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";

import WhatsappFileMenu from "@/components/shared/Recipes/WhatsappFileMenu";
import ReusableButton from "@/components/shared/Recipes/Button";
import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
    return (
        <div className="w-full flex items-center justify-center min-h-[200px] border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 mb-4 overflow-auto">
            {children}
        </div>
    );
}

function PreviewButton() {
    return (
        <div className="flex flex-col gap-4 items-start p-4  w-full">
            <div className="flex items-center gap-4">
                {/* filled */}
                <ReusableButton>Default</ReusableButton>
                <ReusableButton variant="filled-secondary">
                    Secondary
                </ReusableButton>
                <ReusableButton variant="filled-danger">Danger</ReusableButton>
                <ReusableButton variant="filled-warning">
                    Warning
                </ReusableButton>
                <ReusableButton variant="filled-success">
                    Success
                </ReusableButton>
            </div>
            <div className="flex items-center gap-4">
                {/* outline */}
                <ReusableButton variant="outline">Outline</ReusableButton>
                <ReusableButton variant="outline-secondary">
                    Outline
                </ReusableButton>
                <ReusableButton variant="outline-danger">
                    Outline
                </ReusableButton>
                <ReusableButton variant="outline-warning">
                    Outline
                </ReusableButton>
                <ReusableButton variant="outline-success">
                    Outline
                </ReusableButton>
            </div>
            <div className="flex items-center gap-4">
                {/* ghost */}
                <ReusableButton variant="ghost">Ghost</ReusableButton>
                <ReusableButton variant="ghost-secondary">Ghost</ReusableButton>
                <ReusableButton variant="ghost-danger">Ghost</ReusableButton>
                <ReusableButton variant="ghost-warning">Ghost</ReusableButton>
                <ReusableButton variant="ghost-success">Ghost</ReusableButton>
            </div>
            <div className="flex items-center gap-4">
                {/* With icon */}
                <ReusableButton>
                    <Settings className="w-4 h-4" /> Settings
                </ReusableButton>
                <ReusableButton>
                    Continue <ArrowRight className="w-4 h-4" />
                </ReusableButton>
                <ReusableButton disabled>Disabled</ReusableButton>
                <ReusableButton isLoading>Disabled</ReusableButton>
                <ReusableButton
                    isLoading
                    spinner={<Loader className="w-4 h-4" />}
                    loadingText="Saving..."
                >
                    Disabled
                </ReusableButton>
            </div>
        </div>
    );
}

export default function ViewRecipeDetails({ recipe }: { recipe: Recipe }) {
    const MDXContent = useMDXComponent(recipe.body.code);

    return (
        <>
            <NextSeo title={recipe.title} description={recipe.description} />
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
                            <Button rightIcon={<Share />}>Share Blog</Button>
                        </div>
                    </BoxBorderAnimation>
                </div>
            </div>
        </>
    );
}
