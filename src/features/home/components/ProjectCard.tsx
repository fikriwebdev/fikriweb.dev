import Button from "@/components/Button";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const OverlapedImages = () => {
  return (
    <div className="w-full p-4 relative col-span-4 group mt-4 ml-4 md:ml-0">
      <div className="absolute">
        <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden transition-transform duration-500 transform rotate-[-4deg] group-hover:-translate-x-4 group-hover:scale-105 group-hover:rotate-[-10deg]">
          <Image
            src="/assets/images/blog-1.jpeg"
            alt="test"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="absolute z-10 transform translate-x-[4rem] translate-y-4 rotate-[-2deg] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-6deg] group-hover:translate-x-[3.5rem]">
        <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden">
          <Image
            src="/assets/images/blog-2.jpeg"
            alt="test"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="absolute z-10 translate-x-[8rem] translate-y-8 ransition-transform duration-500 transform  group-hover:scale-105 group-hover:rotate-[1deg]">
        <div className="w-[12rem] h-[12rem] relative rounded-md overflow-hidden">
          <Image
            src="/assets/images/gojo.jpg"
            alt="test"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default function ProjectCard() {
  return (
    <div className="w-full h-[30rem] md:h-[15rem] bg-white dark:bg-gray-900   border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden relative shadow-md  bg-transparent grid grid-cols-1 md:grid-cols-7 content-start justify-center place-content-center md:content-center">
      <div className="p-4 col-span-3">
        <div className="flex items-center gap-4 mb-2 text-xl text-gray-700 dark:text-gray-200 ">
          <FaReact />
          <SiNextdotjs />
        </div>
        <h1 className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
          React + NextJS + Tailwind
        </h1>

        <p className="text-gray-700 dark:text-gray-200 text-sm mt-2 line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          eligendi cum incidunt obcaecati dolorum odio aspernatur optio Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, itaque?
        </p>
        <Button className="mt-4" rightIcon={<BsArrowRight />}>
          See more{" "}
        </Button>
      </div>
      <OverlapedImages />
    </div>
  );
}
