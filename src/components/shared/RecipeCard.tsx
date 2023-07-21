import { Recipe } from "contentlayer/generated";
import Link from "next/link";
import WhatsappFileMenu from "./Recipes/WhatsappFileMenu";
import Button from "./Recipes/Button";
import Tabs from "./Recipes/AnimatedTabs";
import Input from "./Recipes/Input";

export const components = {
    "whatsapp-file-menu": <WhatsappFileMenu />,
    button: <Button variant="filled-secondary">Reusable Button</Button>,
    tabs: <Tabs />,
    input: <Input placeholder="Enter your name..." className="w-full mx-4" />,
};

export default function RecipeCard({ title, description, filename }: Recipe) {
    return (
        <div className="w-full   rounded-md  ">
            <div className="w-full h-[23rem] bg-gray-900  rounded-md bg-gradient-to-br from-purple-300/80 to-blue-300/80 dark:from-purple-700/20 dark:to-blue-700/20 flex items-center justify-center">
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
