import path from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { IBlog } from "@/types";

export const getContentBySlug = (folder: string, slug: string) => {
    const filePath = path.join(process.cwd(), "content", folder, `${slug}.mdx`);
    const file = fs.readFileSync(filePath);
    const content = matter(file);

    return content as GrayMatterFile<Buffer> & { data: IBlog };
};

export const getAllContent = (folder: string) => {
    const filePath = path.join(process.cwd(), "content", folder);
    const files = fs.readdirSync(filePath);
    const content = files.map(file => {
        const filename = file.replace(".mdx", "");
        const { data } = getContentBySlug(folder, filename);

        return { ...data, slug: filename };
    });

    return content as unknown as IBlog[];
};
