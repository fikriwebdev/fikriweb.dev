import { IBlog } from "@/types";
import BlogCard from "./BlogCard";
import useSWR from "swr";

export default function Blogs() {
    const { data } = useSWR<IBlog[]>("blogs");

    console.log({ data });
    return (
        <section className="mt-8 flex flex-col justify-center px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-300  dark:to-gray-700 text-center">
                Blogs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {data?.map(blog => (
                    <BlogCard key={blog.title} {...blog} />
                ))}
            </div>
        </section>
    );
}
