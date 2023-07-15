import AspectRatio from "@/components/AspectRatio";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import Separator from "@/components/Separator";
import BlogCard from "@/components/shared/BlogCard";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import OnThisPage from "./components/OnThisPage";
import { Blog } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

interface ViewBlogDetailsProps {
    blog: Blog;
    recommendations: Blog[];
    tags: string[];
}

export default function ViewBlogDetails({
    blog,
    recommendations,
    tags,
}: ViewBlogDetailsProps) {
    const MDXContent = useMDXComponent(blog.body.code);

    return (
        <div className="blog">
            <section>
                <RightTopSideBlurryShape />
                <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                    <AspectRatio
                        ratio={16 / 5}
                        className="rounded-md overflow-hidden mb-4 relative"
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
                        <div className="flex items-center gap-2 absolute z-[1] bottom-0 left-0 m-4">
                            {tags.map(tag => (
                                <div
                                    key={tag}
                                    className="bg-gray-300 dark:bg-gray-700 dark:text-white rounded-md px-2 text-sm text-black"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
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
