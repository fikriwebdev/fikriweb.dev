import ViewBlogDetails from "@/features/Blogs/ViewBlogDetails";
import { Blog, allBlogs } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export default function BlogDetails(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return <ViewBlogDetails {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = allBlogs.map(item => ({
        params: {
            slug: item._raw.flattenedPath.replace("blog/", ""),
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps<{
    blog: Blog;
    recommendations: Blog[];
    tags: string[];
}> = ({ params }) => {
    // Find the post for the current page.

    const blog = allBlogs.find(post =>
        post._raw.flattenedPath.includes(params?.slug as string)
    );

    // 404 if the post does not exist.
    if (!blog) {
        return {
            notFound: true,
        };
    }

    const recommendations = allBlogs.filter(
        item => item.tags.includes(blog.tags) && item._id !== blog._id
    );

    const tags = blog.tags.split(",");

    return {
        props: {
            blog,
            recommendations,
            tags,
        },
    };
};
