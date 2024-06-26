/* eslint-disable @next/next/no-img-element */
import { Project } from "contentlayer/generated";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import BlurryImage from "../BlurryImage";

type OverlapedImagesProps = {
    images: string[];
    blurDataUrl: string[];
    title: string;
};

const OverlapedImages = ({
    images,
    blurDataUrl,
    title,
}: OverlapedImagesProps) => {
    return (
        <div className="w-full p-4 relative col-span-4 mt-16 md:mt-0   ml-4 md:ml-0 block  md:flex items-center md:mb-6">
            <div className="absolute">
                <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden transition-transform duration-500 transform rotate-[-4deg] group-hover:-translate-x-4 group-hover:scale-105 group-hover:rotate-[-10deg]">
                    <BlurryImage
                        src={images[0]}
                        blurSrc={blurDataUrl[0]}
                        alt={`${title} showcase 1`}
                    />
                </div>
            </div>
            <div className="absolute z-10 transform translate-x-[4rem] translate-y-4 rotate-[-2deg] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-6deg] group-hover:translate-x-[3.5rem]">
                <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden">
                    <BlurryImage
                        src={images[1]}
                        blurSrc={blurDataUrl[1]}
                        alt={`${title} showcase 2`}
                    />
                </div>
            </div>
            <div className="absolute z-10 translate-x-[8rem] translate-y-8 ransition-transform duration-500 transform  group-hover:scale-105 group-hover:rotate-[1deg]">
                <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden">
                    <BlurryImage
                        src={images[2]}
                        blurSrc={blurDataUrl[2]}
                        alt={`${title} showcase 2`}
                    />
                </div>
            </div>
        </div>
    );
};

export default function ProjectCard({ data }: { data: Project }) {
    const images = data.images.split(",");
    const blurDataUrl = data.blurDataUrl.split(",");

    const slug = data._raw.flattenedPath;

    return (
        <Link href={`${slug}`}>
            <div className="w-full h-[25rem] md:h-[18rem] bg-white dark:bg-gray-900 group   border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden relative   bg-transparent flex flex-col md:grid  md:grid-cols-7  paper-project-card hover:border-gray-500 dark:hover:border-gray-700 transition-colors duration-500">
                <div className="px-4 col-span-3 h-[80px]  md:h-full block pt-4 md:pt-0 md:flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2 text-xl text-gray-700 dark:text-gray-200 ">
                        <FaReact />
                        <SiNextdotjs />
                    </div>
                    <h1 className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
                        {data.title}
                    </h1>

                    <p className="text-gray-700 dark:text-gray-200 text-sm mt-2 line-clamp-3 lg:line-clamp-5">
                        {data.description}
                    </p>
                </div>
                <OverlapedImages
                    images={images}
                    blurDataUrl={blurDataUrl}
                    title={data.title}
                />
            </div>
        </Link>
    );
}
