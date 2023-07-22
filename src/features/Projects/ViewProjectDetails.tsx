import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Project } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import Image from "next/image";

interface ViewProjectDetailsProps {
    project: Project;
    images: string[];
}

export default function ViewProjectDetails({
    images,
    project,
}: ViewProjectDetailsProps) {
    const MDXContent = useMDXComponent(project.body.code);

    return (
        <>
            <NextSeo
                title={project.title}
                description={project.description}
                openGraph={{
                    type: "website",
                    title: project.title,
                    url: `${process.env.NEXT_PUBLIC_PROD_URL}projects/${project._raw.flattenedPath}`,
                    description: project.description,
                    images: images.map(image => ({
                        url: image,
                        width: 800,
                        height: 600,
                        alt: project.description,
                    })),
                }}
            />
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
        </>
    );
}
