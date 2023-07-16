import { Recipe } from "contentlayer/generated";
import Link from "next/link";
import { components } from "./RecipeComponents";

export default function RecipeCard({ title, description, filename }: Recipe) {
    return (
        <div className="w-full h-[23rem]  rounded-md relative">
            <div className="w-full h-full rounded-md bg-gradient-to-br from-purple-700/20 to-blue-700/20 flex items-center justify-center">
                {components[filename as keyof typeof components]}
            </div>
            <Link href={`/recipes/${filename}`}>
                <h1 className="font-medium text-lg mt-4 text-black/80 dark:text-white/80">
                    {title}
                </h1>
                <p className="font-light text-sm text-gray-500">
                    {description}
                </p>
            </Link>
        </div>
    );
}