import Layout from "@/layout";
import { getAllPosts, getPostBySlug } from "@/libs/mdx";
import { IBlog } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface BlogDetailsProps {
    source: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
    data: IBlog;
}

export default function BlogDetails({ source, data }: BlogDetailsProps) {
    return (
        <Layout
            seo={{
                title: data.title,
            }}
        >
            <div className="container mx-auto max-w-lg px-4 md:px-0 blog">
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
    const mdxSource = await serialize(content);

    return {
        props: {
            source: mdxSource,
            data: data,
        },
    };
};
