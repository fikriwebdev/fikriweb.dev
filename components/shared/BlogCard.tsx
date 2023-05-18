"use client";

import { Blog } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
    title,
    description,
    date,
    image,
    _raw,
}: Blog) {
    const slug = _raw.flattenedPath;

    return (
        <Link href={`${slug}`}>
            <div className="w-full h-[20rem] border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden relative  hover:border-gray-200 dark:hover:border-gray-700 transition-colors bg-white dark:bg-gray-900">
                <div className="relative h-[70%] w-full opacity-100 dark:opacity-80">
                    <div className="absolute inset-0 z-10 gradient-blog-title"></div>
                    <div className="relative w-full h-full">
                        <Image
                            src={image}
                            alt="test"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div
                    className="absolute bottom-0 m-4 z-10 
text-gray-700 dark:text-gray-200"
                >
                    <p className="text-gray-600 dark:text-gray-300">
                        {format(new Date(date), "dd MMM yyyy")}
                    </p>
                    <h1 className="text-3xl  font-semibold">{title}</h1>
                    <p className=" font-medium mt-2">{description}</p>
                </div>
            </div>
        </Link>
    );
}
