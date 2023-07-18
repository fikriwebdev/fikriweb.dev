import { Blog as BlogType, Project, Recipe } from "contentlayer/generated";
import Blog from "./components/Blog";
import CTACard from "./components/CTACard";
import Hero from "./components/HomeHero";
import Projects from "./components/Projects";
import Timelines from "./components/Timelines";
import UIRecipes from "./components/UIRecipes";

interface HomeProps {
    blogs: BlogType[];
    projects: Project[];
    recipes: Recipe[];
}

export default function ViewHome({ blogs, projects, recipes }: HomeProps) {
    return (
        <>
            <Hero />
            <Timelines />
            <Blog data={blogs} />
            <Projects data={projects} />
            <UIRecipes data={recipes} />
            <CTACard />
        </>
    );
}
