import Heading from "@/components/Heading";
import BlogCard from "@/components/shared/BlogCard";
import { getAllContent } from "@/libs/mdx";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - fikriweb.dev",
};

export default async function Blog() {
    const data = await getAllContent<IBlog[]>("blogs");

    return (
        <>
            <section className="border-b pb-4 border-gray-100 dark:border-gray-700">
                <Heading as="h1" className="text-left text-gray-300">
                    Blog
                </Heading>
                <p className="mt-2">
                    Everything about my journey, story and tutorials about
                    programming especially front-end.
                </p>
            </section>
            <section className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map(blog => (
                        <BlogCard key={blog.slug} {...blog} />
                    ))}
                </div>
            </section>
        </>
    );
}
