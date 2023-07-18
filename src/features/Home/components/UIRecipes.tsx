import RecipeCard from "@/components/shared/RecipeCard";
import { Recipe } from "contentlayer/generated";

export default function UIRecipes({ data }: { data: Recipe[] }) {
    return (
        <section className="mt-20 flex flex-col justify-center">
            <h1 className="gradient-text">UI Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {data.map(recipe => (
                    <RecipeCard key={recipe._id} {...recipe} />
                ))}
            </div>
        </section>
    );
}
