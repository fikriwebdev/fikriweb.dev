import { Blog } from "contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";

import { motion } from "framer-motion";
import BlurryImage from "../BlurryImage";

export default function BlogCard({
    title,
    description,
    date,
    image,
    tags,
    blurDataUrl,
    _raw,
}: Blog) {
    const slug = _raw.flattenedPath;

    return (
        <Link href={`${slug}`}>
            <motion.div className="w-full h-[23rem] border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden relative  hover:border-gray-200 dark:hover:border-gray-700  bg-white dark:bg-gray-900 shadow-sm">
                <div className="relative h-[50%] w-full">
                    <BlurryImage
                        blurSrc={blurDataUrl}
                        src={image}
                        alt="test"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className="p-4 z-10 
text-gray-700 dark:text-gray-200  h-[50%]"
                >
                    <div className="flex items-center gap-2 mb-2">
                        {tags.split(",").map(tag => (
                            <div
                                key={tag}
                                className="bg-gray-300 dark:bg-gray-700 dark:text-white rounded-md px-2 text-sm text-black"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <h1 className="text-lg  font-semibold line-clamp-2">
                        {title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-sm font-semibold mt-1">
                        {format(new Date(date), "dd MMM yyyy")}
                    </p>
                    <p className=" font-normal text-sm mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
                        {description}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
}
