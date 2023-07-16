import Heading from "@/components/Heading";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import RecipeCard from "./components/RecipeCard";
import { Recipe } from "contentlayer/generated";

export default function ViewRecipes({ recipes }: { recipes: Recipe[] }) {
    return (
        <>
            <section className="border-b pb-4 border-gray-300 dark:border-gray-700">
                <RightTopSideBlurryShape />

                <Heading
                    as="h1"
                    className="text-left text-gray-800 dark:text-gray-300"
                >
                    UI Recipes
                </Heading>
                <p className="mt-2 text-left text-gray-800 dark:text-gray-300">
                    Documentation of my learning creating component that
                    inspired with another website or app.
                </p>
            </section>
            <section className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe._id} {...recipe} />
                    ))}
                </div>
            </section>
        </>
    );
}
