import Home from "@/features/home";
import { getAllPosts } from "@/libs/mdx";
import { IBlog } from "@/types";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";

interface HomePageProps {
    blogs: IBlog[];
}

export default function HomePage({ blogs }: HomePageProps) {
    return (
        <SWRConfig
            value={{
                fallback: {
                    blogs,
                },
            }}
        >
            <Home />
        </SWRConfig>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const blogs = getAllPosts();

    return {
        props: {
            blogs,
        },
    };
};
