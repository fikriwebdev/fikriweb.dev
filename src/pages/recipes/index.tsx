import ViewRecipes from "@/features/Recipes";
import { Recipe, allRecipes } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Recipes({
    recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <ViewRecipes recipes={recipes} />;
}

export const getStaticProps: GetStaticProps<{ recipes: Recipe[] }> = () => {
    const recipes = allRecipes.sort((a, b) => a.title.localeCompare(b.title));

    return {
        props: {
            recipes,
        },
    };
};
