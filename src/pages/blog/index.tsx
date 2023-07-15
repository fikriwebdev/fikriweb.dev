import ViewBlogs from "@/features/Blogs";
import { Blog as BlogType, allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Blog({
    blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <ViewBlogs blogs={blogs} />;
}

export const getStaticProps: GetStaticProps<{ blogs: BlogType[] }> = () => {
    const blogs = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return {
        props: {
            blogs,
        },
    };
};
