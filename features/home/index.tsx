import { getAllContent } from "@/libs/mdx";
import Blogs from "./components/Blogs";
import CTACard from "./components/CTACard";
import Hero from "./components/HomeHero";
import Projects from "./components/Projects";
import Timelines from "./components/Timelines";
import { IBlog, IProject } from "@/types";

export default async function ViewHomePage() {
    const blogs = await getAllContent<IBlog[]>("blogs");
    const projects = await getAllContent<IProject[]>("projects");

    return (
        <>
            <Hero />
            <Timelines />
            <Blogs data={blogs} />
            <Projects data={projects} />
            <CTACard />
        </>
    );
}
