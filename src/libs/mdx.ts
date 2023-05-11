import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getPostBySlug = (slug: string) => {
    const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);
    const file = fs.readFileSync(filePath);
    const content = matter(file);

    return content;
};

export const getAllPosts = () => {
    const filePath = path.join(process.cwd(), "src", "posts");
    const files = fs.readdirSync(filePath);
    const content = files.map(file => {
        const filename = file.replace(".mdx", "");
        const { data } = getPostBySlug(filename);

        return { ...data, slug: filename };
    });

    return content;
};
