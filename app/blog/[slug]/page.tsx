import { allBlogs } from "@/.contentlayer/generated";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
    params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const blog = allBlogs.find(blog => blog.url.includes(params.slug));
    if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);
    return { title: blog.title, description: blog.description };
}

export default async function BlogDetails({ params }: Params) {
    // Find the post for the current page.
    const blog = allBlogs.find(post =>
        post._raw.flattenedPath.includes(params.slug)
    );

    // 404 if the post does not exist.
    if (!blog) notFound();

    const MDXContent = getMDXComponent(blog.body.code);

    return (
        <div className="container mx-auto max-w-full md:max-w-4xl px-4 md:px-0 blog">
            <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                <div className="relative w-full h-[200px] md:h-[400px] rounded-md overflow-hidden mb-4">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
                <Heading as="h1">{blog.title}</Heading>
                <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
                    {format(parseISO(blog.date), "dd MMM yyyy")}
                </p>
            </div>
            <MDXContent components={mdxComponents} />
        </div>
    );
}
