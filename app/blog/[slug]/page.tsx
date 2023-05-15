import Button from "@/components/Button";
import Heading from "@/components/Heading";
import MarkdownRemote from "@/components/MDXComponent";
import { getContentBySlug } from "@/libs/mdx";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import rehypePrism from "rehype-prism-plus";

interface Params {
    params: { slug: string };
}

export function generateMetadata({ params }: Params): Metadata {
    const { data } = getContentBySlug("blogs", params.slug);
    return { title: data.title, description: data.description };
}

export default async function BlogDetails({ params }: Params) {
    const { content, data } = getContentBySlug("blogs", params.slug);
    const source = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypePrism],
        },
    });
    return (
        <div className="container mx-auto max-w-full md:max-w-4xl px-4 md:px-0 blog">
            <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                <div className="relative w-full h-[200px] md:h-[400px] rounded-md overflow-hidden mb-4">
                    <Image
                        src={data.banner}
                        alt={data.title}
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
                <Heading as="h1">{data.title}</Heading>
                <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
                    {data.publishedAt}
                </p>
            </div>
            <MarkdownRemote
                {...source}
                components={{
                    Button,
                }}
            />
        </div>
    );
}
