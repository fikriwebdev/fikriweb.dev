import { Blog as BlogType, Project } from "contentlayer/generated";
import Blog from "./components/Blog";
import CTACard from "./components/CTACard";
import Hero from "./components/HomeHero";
import Projects from "./components/Projects";
import Timelines from "./components/Timelines";

interface HomeProps {
    blogs: BlogType[];
    projects: Project[];
}

export default function ViewHome({ blogs, projects }: HomeProps) {
    return (
        <>
            <Hero />
            <Timelines />
            <Blog data={blogs} />
            <Projects data={projects} />
            <CTACard />
        </>
    );
}
