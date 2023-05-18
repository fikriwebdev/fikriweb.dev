import { allProjects } from "@/.contentlayer/generated";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

interface Params {
    params: { slug: string };
}

export function generateMetadata({ params }: Params): Metadata {
    const project = allProjects.find(item =>
        item._raw.flattenedPath.includes(params.slug)
    );
    if (!project) throw new Error(`Project not found for slug: ${params.slug}`);
    return { title: project.title, description: project.description };
}

export default async function BlogDetails({ params }: Params) {
    const project = allProjects.find(item =>
        item._raw.flattenedPath.includes(params.slug)
    );
    if (!project) throw new Error(`Project not found for slug: ${params.slug}`);

    const images = project.images.split(",");

    const MDXContent = getMDXComponent(project.body.code);

    return (
        <div className="container mx-auto max-w-full md:max-w-4xl px-4 md:px-0 blog">
            <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                <div className="relative w-full h-[200px] md:h-[400px] rounded-md overflow-hidden mb-4">
                    <Image
                        src={images[0]}
                        alt={project.title}
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
                <Heading as="h1">{project.title}</Heading>
                <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
                    {format(parseISO(project.date), "dd MMM yyyy")}
                </p>
            </div>
            <MDXContent components={mdxComponents} />
        </div>
    );
}
