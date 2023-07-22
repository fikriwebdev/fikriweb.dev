import Heading from "@/components/Heading";
import ProjectCard from "@/components/shared/ProjectCard";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Project } from "contentlayer/generated";
import { NextSeo } from "next-seo";

export default function ViewProjects({ projects }: { projects: Project[] }) {
    return (
        <>
            <NextSeo
                title="Projects"
                description="Discover a showcase of projects that we are proud to present."
                openGraph={{
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_PROD_URL}api/og?title=Projects`,
                        },
                    ],
                }}
            />
            <section className="border-b pb-4 border-gray-300 dark:border-gray-700">
                <RightTopSideBlurryShape />
                <Heading
                    as="h1"
                    className="text-left text-gray-800 dark:text-gray-300"
                >
                    Projects
                </Heading>
                <p className="mt-2 text-left text-gray-800 dark:text-gray-300">
                    Discover a showcase of projects that we are proud to
                    present.
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
