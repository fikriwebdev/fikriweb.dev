// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import { visit } from "unist-util-visit";

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: `blog/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        description: { type: "string", required: true },
        image: { type: "string", required: true },
        tags: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post => `src/contents/blog/${post._raw.flattenedPath}`,
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
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post => `src/contents/projects/${post._raw.flattenedPath}`,
        },
    },
}));

const rehypePrettyCodeOptions: Partial<Options> = {
    // use a prepackaged theme
    theme: "github-dark",
};

export default makeSource({
    contentDirPath: "src/contents",
    documentTypes: [Blog, Project],
    mdx: {
        rehypePlugins: [
            () => tree => {
                visit(tree, node => {
                    if (node?.type === "element" && node?.tagName === "pre") {
                        const [codeEl] = node.children;

                        if (codeEl.tagName !== "code") return;

                        node.raw = codeEl.children?.[0].value;
                    }
                });
            },
            [rehypePrettyCode, rehypePrettyCodeOptions],
            () => tree => {
                visit(tree, node => {
                    if (node?.type === "element" && node?.tagName === "div") {
                        if (
                            !(
                                "data-rehype-pretty-code-fragment" in
                                node.properties
                            )
                        ) {
                            return;
                        }

                        for (const child of node.children) {
                            if (child.tagName === "pre") {
                                child.properties["raw"] = node.raw;
                            }
                        }
                    }
                });
            },
        ],
    },
});
