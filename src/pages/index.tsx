import { GetStaticProps, InferGetStaticPropsType } from "next";
import ViewHome from "../features/Home";
import { allBlogs, allProjects, allRecipes } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home({
    blogs,
    projects,
    recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <ViewHome blogs={blogs} projects={projects} recipes={recipes} />;
}

export const getStaticProps: GetStaticProps = () => {
    const blogs = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
    const projects = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    const recipes = allRecipes.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return {
        props: {
            blogs,
            projects,
            recipes,
        },
    };
};
