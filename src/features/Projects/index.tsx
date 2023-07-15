import Heading from "@/components/Heading";
import ProjectCard from "@/components/shared/ProjectCard";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Project } from "contentlayer/generated";

export default function ViewProjects({ projects }: { projects: Project[] }) {
    return (
        <>
            <section className="border-b pb-4 border-gray-300 dark:border-gray-700">
                <RightTopSideBlurryShape />
                <Heading
                    as="h1"
                    className="text-left text-gray-800 dark:text-gray-300"
                >
                    Projects
                </Heading>
                <p className="mt-2 text-left text-gray-800 dark:text-gray-300">
                    All projects that i proud of.
                </p>
            </section>
            <section className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map(project => (
                        <ProjectCard key={project._id} data={project} />
                    ))}
                </div>
            </section>
        </>
    );
}
