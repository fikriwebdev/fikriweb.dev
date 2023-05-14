import Heading from "@/components/Heading";
import Layout from "@/layout";
import { getAllPosts, getPostBySlug } from "@/libs/mdx";
import { IBlog } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import rehypePrism from "rehype-prism-plus";

interface BlogDetailsProps {
    source: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
    data: IBlog;
}

export default function BlogDetails({ source, data }: BlogDetailsProps) {
    console.log(source);
    return (
        <Layout
            seo={{
                title: data.title,
            }}
        >
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
                <MDXRemote {...source} />
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = getAllPosts();

    return {
        paths: blogs.map(blog => ({
            params: { slug: blog.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { content, data } = getPostBySlug(
        typeof params?.slug === "string" ? params.slug : ""
    );
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypePrism],
        },
    });

    return {
        props: {
            source: mdxSource,
            data: data,
        },
    };
};
