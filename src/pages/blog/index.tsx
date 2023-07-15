import ViewBlogs from "@/features/Blogs";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Blog() {
    const blogs = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
    return <ViewBlogs blogs={blogs} />;
}
