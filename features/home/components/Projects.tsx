"use client";

import { IProject } from "@/types";
import ProjectCard from "@/components/shared/ProjectCard";

export default function Projects({ data }: { data: IProject[] }) {
    return (
        <section className="mt-8 flex flex-col justify-center px-4 md:px-0">
            <h1 className="gradient-text">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {data.map(project => (
                    <ProjectCard key={project.slug} data={project} />
                ))}
            </div>
        </section>
    );
}
