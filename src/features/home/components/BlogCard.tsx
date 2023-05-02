import Image from "next/image";
import { BsClock, BsEye } from "react-icons/bs";

export default function BlogCard() {
  return (
    <div className="w-full h-[20rem] border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden relative shadow-md group">
      <div className="relative h-full w-full opacity-100 dark:opacity-80">
        <Image
          src="/assets/images/blog-2.jpeg"
          alt="test"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4  gradient-blog-title h-full" />
      <div className="absolute bottom-0 m-4 z-10 transition-transform transform translate-y-[4.25rem] group-hover:translate-y-0">
        <h1 className="text-3xl text-gray-800 dark:text-white font-semibold">
          Title of blog
        </h1>
        <p className="text-gray-800 dark:text-white font-medium">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="pt-4">
          <p>2 May, 2023</p>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-2">
              <BsClock />
              <p>12 Min read</p>
            </div>
            <div className="flex items-center gap-2">
              <BsEye />
              <p>1,000 views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
