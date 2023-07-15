import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Project } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

interface ViewProjectDetailsProps {
    project: Project;
    images: string[];
}

export default function ViewProjectDetails({
    images,
    project,
}: ViewProjectDetailsProps) {
    const MDXContent = getMDXComponent(project.body.code);

    return (
        <div className="container mx-auto max-w-full md:max-w-4xl px-4 md:px-0 blog">
            <RightTopSideBlurryShape />
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
