// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypePrettyCode, { Options } from "rehype-pretty-code";

const CONTENT_FOLDER = "src/contents";

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: `blog/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        description: { type: "string", required: true },
        image: { type: "string", required: true },
        blurDataUrl: { type: "string", required: true },
        tags: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post =>
                `${CONTENT_FOLDER}/blog/${post._raw.flattenedPath}`,
        },
    },
}));

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `projects/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        description: { type: "string", required: true },
        images: { type: "string", required: true },
        stack: { type: "string", required: true },
        blurDataUrl: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post =>
                `${CONTENT_FOLDER}/projects/${post._raw.flattenedPath}`,
        },
    },
}));

export const Recipe = defineDocumentType(() => ({
    name: "Recipe",
    filePathPattern: `recipes/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        description: { type: "string", required: true },
        stack: { type: "string", required: true },
        filename: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post =>
                `${CONTENT_FOLDER}/recipes/${post._raw.flattenedPath}`,
        },
    },
}));

const rehypePrettyCodeOptions: Partial<Options> = {
    // use a prepackaged theme
    theme: {
        dark: "github-dark",
        light: "github-light",
    },
};

export default makeSource({
    contentDirPath: `${CONTENT_FOLDER}`,
    documentTypes: [Blog, Project, Recipe],
    mdx: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    },
});
