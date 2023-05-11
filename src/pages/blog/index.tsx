import Layout from "@/layout";
import { getPostBySlug } from "@/libs/mdx";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface BlogDetailsProps {
    source: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
}

export default function BlogDetails({ source }: BlogDetailsProps) {
    return (
        <Layout>
            <div className="container mx-auto max-w-lg px-4 md:px-0 blog">
                <MDXRemote {...source} />
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { content, data } = getPostBySlug("introduction");
    const mdxSource = await serialize(content);

    return {
        props: {
            source: mdxSource,
            data: data,
        },
    };
};
