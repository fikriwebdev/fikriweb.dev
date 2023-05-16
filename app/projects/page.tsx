import Heading from "@/components/Heading";
import ProjectCard from "@/components/shared/ProjectCard";
import { getAllContent } from "@/libs/mdx";
import { IProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - fikriweb.dev",
};

export default async function Blog() {
    const data = await getAllContent<IProject[]>("projects");

    return (
        <>
            <section className="border-b pb-4 border-gray-100 dark:border-gray-700">
                <Heading as="h1" className="text-left text-gray-300">
                    Projects
                </Heading>
                <p className="mt-2">All projects that i proud of.</p>
            </section>
            <section className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map(project => (
                        <ProjectCard key={project.slug} data={project} />
                    ))}
                </div>
            </section>
        </>
    );
}
