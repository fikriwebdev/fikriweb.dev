import { allBlogs } from "@/.contentlayer/generated";
import Heading from "@/components/Heading";
import BlogCard from "@/components/shared/BlogCard";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { compareDesc } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - fikriweb.dev",
};

export default async function Blog() {
    const blog = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <>
            <section className="border-b pb-4 border-gray-300 dark:border-gray-700">
                <RightTopSideBlurryShape />

                <Heading
                    as="h1"
                    className="text-left text-gray-800 dark:text-gray-300"
                >
                    Blog
                </Heading>
                <p className="mt-2 text-left text-gray-800 dark:text-gray-300">
                    Everything about my journey, story and tutorials about
                    programming especially front-end.
                </p>
            </section>
            <section className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {blog.map(blog => (
                        <BlogCard key={blog._id} {...blog} />
                    ))}
                </div>
            </section>
        </>
    );
}
