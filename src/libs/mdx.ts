import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

const rehypePrettyCodeOptions: Partial<Options> = {
    // use a prepackaged theme
    theme: "rehype-pretty-code",
};

export const getContentBySlug = async <T>(folder: string, slug: string) => {
    const filePath = path.join(process.cwd(), "content", folder, `${slug}.mdx`);
    const file = fs.readFileSync(filePath);
    const data = matter(file);

    const source = await serialize(data.content, {
        mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
    });

    return { ...data, source } as GrayMatterFile<Buffer> & {
        data: T;
        source: MDXRemoteSerializeResult<
            Record<string, unknown>,
            Record<string, unknown>
        >;
    };
};

export const getAllContent = async <T>(folder: string) => {
    const filePath = path.join(process.cwd(), "content", folder);
    const files = fs.readdirSync(filePath);
    const content = await Promise.all(
        files.map(async file => {
            const filename = file.replace(".mdx", "");
            const { data, source } = await getContentBySlug(folder, filename);

            return { ...data, source, slug: filename };
        })
    );

    return content as unknown as T;
};
