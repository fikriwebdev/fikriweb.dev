import ViewBlogDetails from "@/features/Blogs/ViewBlogDetails";
import { Blog, allBlogs } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export default function BlogDetails(props: {
    blog: Blog;
    recommendations: Blog[];
    tags: string[];
}) {
    const { blog } = props;
    return (
        <>
            <NextSeo
                title={blog.title}
                description={blog.description}
                openGraph={{
                    type: "website",
                    title: blog.title,
                    url: `${process.env.NEXT_PUBLIC_PROD_URL}blog/${blog._raw.flattenedPath}`,
                    description: blog.description,
                    siteName: "fikriweb.dev",
                    images: [
                        {
                            url: blog.image,
                            secureUrl: blog.image,
                        },
                    ],
                }}
            />
            <ViewBlogDetails {...props} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = allBlogs.map(item => ({
        params: {
            slug: item._raw.flattenedPath.replace("blog/", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
    // Find the post for the current page.

    const blog = allBlogs.find(post =>
        post._raw.flattenedPath.includes(params?.slug as string)
    );

    const recommendations = allBlogs.filter(
        item => item.tags.includes(blog?.tags || "") && item._id !== blog?._id
    );

    const tags = blog?.tags.split(",");

    return {
        props: {
            blog,
            recommendations,
            tags,
        },
    };
};
