import ViewRecipeDetails from "@/features/Recipes/ViewRecipeDetails";
import { Recipe, allRecipes } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export default function RecipeDetail({
    recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <ViewRecipeDetails recipe={recipe} />;
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = allRecipes.map(item => ({
        params: {
            slug: item._raw.flattenedPath.replace("recipes/", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    recipe: Recipe;
}> = ({ params }) => {
    const recipe = allRecipes.find(item =>
        item._raw.flattenedPath.includes((params?.slug as string) || "")
    );

    if (!recipe)
        return {
            notFound: true,
        };

    return {
        props: {
            recipe,
        },
    };
};
