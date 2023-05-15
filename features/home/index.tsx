import { getAllContent } from "@/libs/mdx";
import Blogs from "./components/Blogs";
import CTACard from "./components/CTACard";
import Hero from "./components/HomeHero";
import Projects from "./components/Projects";
import Timelines from "./components/Timelines";

export default async function ViewHomePage() {
    const data = getAllContent("blogs");
    return (
        <>
            <Hero />
            <Timelines />
            <Blogs data={data} />
            <Projects />
            <CTACard />
        </>
    );
}
