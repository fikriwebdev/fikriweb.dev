import Layout from "@/layout";

import Blogs from "./components/Blogs";
import CTACard from "./components/CTACard";
import Hero from "./components/HomeHero";
import Projects from "./components/Projects";
import Timelines from "./components/Timelines";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Timelines />
                <Blogs />
                <Projects />
                <CTACard />
            </Layout>
        </>
    );
}
