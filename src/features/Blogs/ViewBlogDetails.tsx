import AspectRatio from "@/components/AspectRatio";
import BlurryImage from "@/components/BlurryImage";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import mdxComponents from "@/components/MDXComponent";
import Separator from "@/components/Separator";
import BlogCard from "@/components/shared/BlogCard";
import BoxBorderAnimation from "@/components/shared/BoxBorderAnimation";
import RightTopSideBlurryShape from "@/components/shared/RightTopSideBlurryShape";
import clsm from "@/utils/clsm";
import { Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Share2 } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ImageProps } from "next/image";
import OnThisPage from "./components/OnThisPage";
import { NextSeo } from "next-seo";

interface ViewBlogDetailsProps {
    blog: Blog;
    recommendations: Blog[];
    tags: string[];
}

type BlogImageProps = ImageProps & {
    blurSrc: string;
};

const BlogImage = ({ blurSrc, className, ...rest }: BlogImageProps) => {
    return (
        <div
            className={clsm(
                "w-full h-[300px] relative rounded-md overflow-hidden mb-4",
                className
            )}
        >
            <BlurryImage
                blurSrc={blurSrc}
                fill
                className="object-cover object-conter"
                {...rest}
            />
        </div>
    );
};

export default function ViewBlogDetails({
    blog,
    recommendations,
    tags,
}: ViewBlogDetailsProps) {
    const MDXContent = useMDXComponent(blog.body.code);

    return (
        <>
            <NextSeo
                title={blog.title}
                description={blog.description}
                openGraph={{
                    type: "website",
                    title: blog.title,
                    url: `${
                        process.env.NEXT_PUBLIC_PROD_URL
                    }blog/${blog._raw.flattenedPath.replace("blog/", "")}`,
                    description: blog.description,
                    siteName: "fikriweb.dev",
                    images: [
                        {
                            url: `${
                                process.env.NEXT_PUBLIC_PROD_URL
                            }${blog.image.replace("/", "")}`,
                            secureUrl: `${
                                process.env.NEXT_PUBLIC_PROD_URL
                            }${blog.image.replace("/", "")}`,
                            width: 800,
                            height: 600,
                            alt: blog.title,
                        },
                    ],
                }}
                additionalMetaTags={[
                    {
                        name: "twitter:title",
                        content: blog.title,
                    },
                    {
                        name: "twitter:description",
                        content: blog.description,
                    },
                    {
                        name: "twitter:image",
                        content: `${
                            process.env.NEXT_PUBLIC_PROD_URL
                        }${blog.image.replace("/", "")}`,
                    },
                    {
                        name: "twitter:image:src",
                        content: `${
                            process.env.NEXT_PUBLIC_PROD_URL
                        }${blog.image.replace("/", "")}`,
                    },
                    {
                        name: "twitter:image:alt",
                        content: blog.title,
                    },
                    {
                        name: "twitter:card",
                        content: "summary_large_image",
                    },
                ]}
            />
            <div className="blog">
                <section>
                    <RightTopSideBlurryShape />
                    <div className="mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">
                        <AspectRatio
                            ratio={16 / 5}
                            className="rounded-md overflow-hidden mb-4 relative"
                        >
                            <BlurryImage
                                blurSrc={blog.blurDataUrl}
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
                            <MDXContent
                                components={{
                                    ...mdxComponents,
                                    Image: BlogImage,
                                }}
                            />
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
                                Thank you for reading this blog post on{" "}
                                {blog.title}, and I hope it helps you in your
                                development journey!
                            </p>
                            <Button rightIcon={<Share2 />}>Share Blog</Button>
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
        </>
    );
}
