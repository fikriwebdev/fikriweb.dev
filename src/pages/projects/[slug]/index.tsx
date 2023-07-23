import ViewProjectDetails from "@/features/Projects/ViewProjectDetails";
import { Project, allProjects } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export default function BlogDetails(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return <ViewProjectDetails {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = allProjects.map(item => ({
        params: {
            slug: item._raw.flattenedPath.replace("projects/", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    project: Project;
    images: string[];
}> = ({ params }) => {
    const project = allProjects.find(item =>
        item._raw.flattenedPath.includes((params?.slug as string) || "")
    );

    if (!project)
        return {
            notFound: true,
        };

    const images = project.images.split(",");

    return {
        props: {
            project,
            images,
        },
    };
};
