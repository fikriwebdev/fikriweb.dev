import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function ProjectCard() {
  return (
    <div className="w-full h-[10rem] border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden relative shadow-md group bg-transparent">
      <div className="w-full h-full relative">
        <Image
          src="/assets/images/blog-2.jpeg"
          alt="test"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/20 dark:from-gray-900/90 dark:via-gray-900/50 dark:to-gray-900/20"></div>
      <div className="absolute inset-0 p-4">
        <h1 className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
          React + NextJS + Tailwind
        </h1>
        <div className="flex items-center gap-4 mt-2 text-xl text-gray-700 dark:text-gray-200 ">
          <FaReact />
          <SiNextdotjs />
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-sm mt-2 line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          eligendi cum incidunt obcaecati dolorum odio aspernatur optio Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, itaque?
        </p>
      </div>
    </div>
  );
}
