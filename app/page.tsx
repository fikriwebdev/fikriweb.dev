import { allProjects, allBlogs } from "contentlayer/generated";
import CTACard from "./_components/CTACard";
import Hero from "./_components/HomeHero";
import Timelines from "./_components/Timelines";
import Blogs from "./_components/Blog";
import { compareDesc } from "date-fns";

import Projects from "./_components/Projects";

export default async function ViewHomePage() {
    const blog = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
    const projects = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <>
            <Hero />
            <Timelines />
            <Blogs data={blog} />
            <Projects data={projects} />
            <CTACard />
        </>
    );
}
