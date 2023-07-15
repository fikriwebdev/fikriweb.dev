import ViewProjects from "@/features/Projects";
import { Project, allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Blog({
    projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <ViewProjects projects={projects} />;
}

export const getStaticProps: GetStaticProps<{ projects: Project[] }> = () => {
    const projects = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return {
        props: {
            projects,
        },
    };
};
