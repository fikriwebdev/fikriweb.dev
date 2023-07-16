import Button from "@/components/Button";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Recipe } from "contentlayer/generated";
import { Share } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "./components/RecipeComponents";
import Separator from "@/components/Separator";

function Components({ filename }: { filename: string }) {
    return (
        <div className="w-full flex items-center justify-center h-[200px] border border-gray-300 dark:border-gray-700 rounded-md bg-gray-200 dark:bg-gray-900 mb-4">
            {components[filename as keyof typeof components]}
        </div>
    );
}

export default function ViewRecipeDetails({ recipe }: { recipe: Recipe }) {
    const MDXContent = useMDXComponent(recipe.body.code);

    return (
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
                        Components: () => (
                            <Components filename={recipe.filename} />
                        ),
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
    );
}
