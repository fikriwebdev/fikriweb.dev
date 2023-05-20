import { allBlogs } from "@/.contentlayer/generated";
import AspectRatio from "@/components/AspectRatio";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { notFound } from "next/navigation";
import OnThisPage from "./_components/OnThisPage";
import BlogCard from "@/components/shared/BlogCard";
import Separator from "@/components/Separator";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";
import Button from "@/components/Button";
import { AiOutlineShareAlt } from "react-icons/ai";

interface Params {
    params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const blog = allBlogs.find(blog => blog.url.includes(params.slug));
    if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);
    return {
        title: `${blog.title} - fikriweb.dev`,
        description: blog.description,
    };
}

export default async function BlogDetails({ params }: Params) {
    // Find the post for the current page.
    const blog = allBlogs.find(post =>
        post._raw.flattenedPath.includes(params.slug)
    );

    // 404 if the post does not exist.
    if (!blog) notFound();

    const MDXContent = getMDXComponent(blog.body.code);

    const recommendations = allBlogs.filter(
        item => item.tags.includes(blog.tags) && item._id !== blog._id
    );

    return (
        <div className="blog">
            <section>
                <RightTopSideBlurryShape />
                <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                    <AspectRatio
                        ratio={16 / 5}
                        className="rounded-md overflow-hidden mb-4"
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </AspectRatio>
                    <Heading as="h1" className="mb-4">
                        {blog.title}
                    </Heading>
                    <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
                        {format(parseISO(blog.date), "dd MMM yyyy")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="block col-span-1 md:col-span-4">
                        <MDXContent components={mdxComponents} />
                    </div>
                    <div className="col-span-2 hidden md:block">
                        <OnThisPage />
                    </div>
                </div>
            </section>
            <div className=" mx-auto my-8">
                <BoxBorderAnimation className="max-w-xl">
                    <div className="text-center p-8 flex flex-col items-center gap-4">
                        <p className="text-3xl">🎊</p>
                        <p className="text-xl font-semibold">
                            Thank you for reading this blog post on {blog.title}
                            , and I hope it helps you in your development
                            journey!
                        </p>
                        <Button rightIcon={<AiOutlineShareAlt />}>
                            Share Blog
                        </Button>
                    </div>
                </BoxBorderAnimation>
            </div>
            <Separator />
            <section className="mt-8">
                <h1 className="gradient-text">See other posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    {recommendations.slice(0, 3).map(recommendation => (
                        <BlogCard
                            key={recommendation._id}
                            {...recommendation}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
