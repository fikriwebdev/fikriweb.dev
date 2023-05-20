"use client";

import { type Blog as BlogType } from "@/.contentlayer/generated";
import Button from "@/components/Button";
import BlogCard from "@/components/shared/BlogCard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Blog({ data }: { data: BlogType[] }) {
    return (
        <section className="mt-20 flex flex-col justify-center">
            <h1 className="gradient-text">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                {data?.slice(0, 6).map(blog => (
                    <BlogCard key={blog.title} {...blog} />
                ))}
            </div>

            {data.length > 4 ? (
                <div className="flex justify-center mt-4">
                    <Link href="/blog">
                        <Button
                            className="mt-4 group"
                            rightIcon={
                                <BsArrowRight className="transform transition-transform duration-500 group-hover:translate-x-1" />
                            }
                        >
                            See more blogs
                        </Button>
                    </Link>
                </div>
            ) : null}
        </section>
    );
}
