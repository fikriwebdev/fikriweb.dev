"use client";

import { IBlog } from "@/types";
import BlogCard from "./BlogCard";
import Button from "@/components/Button";
import { BsArrowRight } from "react-icons/bs";

export default function Blogs({ data }: { data: IBlog[] }) {
    return (
        <section className="mt-8 flex flex-col justify-center px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-300  dark:to-gray-700 text-center">
                Blogs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {data?.slice(0, 6).map(blog => (
                    <BlogCard key={blog.title} {...blog} />
                ))}
            </div>

            {data.length > 6 ? (
                <div className="flex justify-center mt-4">
                    <Button
                        className="mt-4 group"
                        rightIcon={
                            <BsArrowRight className="transform transition-transform duration-500 group-hover:translate-x-1" />
                        }
                    >
                        See more blogs
                    </Button>
                </div>
            ) : null}
        </section>
    );
}
