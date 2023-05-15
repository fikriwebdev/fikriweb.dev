"use client";

import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const OverlapedImages = ({ images }: { images: string[] }) => {
    return (
        <div className="w-full p-4 relative col-span-4 group  ml-4 md:ml-0">
            <div className="absolute">
                <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden transition-transform duration-500 transform rotate-[-4deg] group-hover:-translate-x-4 group-hover:scale-105 group-hover:rotate-[-10deg]">
                    <Image
                        src={images[0]}
                        alt="test"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="absolute z-10 transform translate-x-[4rem] translate-y-4 rotate-[-2deg] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-6deg] group-hover:translate-x-[3.5rem]">
                <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden">
                    <Image
                        src={images[1]}
                        alt="test"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="absolute z-10 translate-x-[8rem] translate-y-8 ransition-transform duration-500 transform  group-hover:scale-105 group-hover:rotate-[1deg]">
                <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden">
                    <Image
                        src={images[2]}
                        alt="test"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default function ProjectCard({ data }: { data: IProject }) {
    const images = data.images.split(",");

    return (
        <Link href={`/project/${data.slug}`}>
            <div className="w-full h-[30rem] md:h-[15rem] bg-white dark:bg-gray-900   border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden relative   bg-transparent grid grid-cols-1 md:grid-cols-7 content-start justify-center place-content-center md:content-center paper-project-card hover:border-gray-500 dark:hover:border-gray-700 transition-colors duration-500">
                <div className="p-4 col-span-3">
                    <div className="flex items-center gap-4 mb-2 text-xl text-gray-700 dark:text-gray-200 ">
                        <FaReact />
                        <SiNextdotjs />
                    </div>
                    <h1 className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
                        {data.title}
                    </h1>

                    <p className="text-gray-700 dark:text-gray-200 text-sm mt-2 line-clamp-3">
                        {data.description}
                    </p>

                    <div className="w-4 h-[48px]" />
                </div>
                <OverlapedImages images={images} />
            </div>
        </Link>
    );
}
