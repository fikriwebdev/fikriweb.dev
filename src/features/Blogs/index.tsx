import Heading from "@/components/Heading";
import BlogCard from "@/components/shared/BlogCard";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { Blog } from "contentlayer/generated";
import { NextSeo } from "next-seo";

export default function ViewBlogs({ blogs }: { blogs: Blog[] }) {
    return (
        <>
            <NextSeo
                title="Blog"
                description="Everything about my journey, story and tutorials about programming especially front-end."
                openGraph={{
                    type: "website",
                    title: "Blog",
                    url: `${process.env.NEXT_PUBLIC_PROD_URL}blog`,
                    description:
                        "Everything about my journey, story and tutorials about programming especially front-end.",
                    siteName: "fikriweb.dev",
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_PROD_URL}api/og?title=Blog`,
                        },
                    ],
                }}
                additionalMetaTags={[
                    {
                        name: "twitter:title",
                        content: "Blog",
                    },
                    {
                        name: "twitter:description",
                        content:
                            "Everything about my journey, story and tutorials about programming especially front-end.",
                    },
                    {
                        name: "twitter:image",
                        content: `${process.env.NEXT_PUBLIC_PROD_URL}api/og?title=Blog`,
                    },
                    {
                        name: "twitter:image:src",
                        content: `${process.env.NEXT_PUBLIC_PROD_URL}api/og?title=Blog`,
                    },
                    {
                        name: "twitter:image:alt",
                        content: "blog",
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image",
                    },
                ]}
            />
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {blogs.map(blog => (
                        <BlogCard key={blog._id} {...blog} />
                    ))}
                </div>
            </section>
        </>
    );
}
