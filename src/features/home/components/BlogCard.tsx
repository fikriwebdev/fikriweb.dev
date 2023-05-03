import Image from "next/image";
import { BsClock, BsEye } from "react-icons/bs";

export default function BlogCard() {
  return (
    <div className="w-full h-[20rem] border border-gray-300 dark:border-gray-800 rounded-md overflow-hidden relative shadow-md group">
      <div className="relative h-[70%] w-full opacity-100 dark:opacity-80">
        <div className="absolute inset-0 z-10 gradient-blog-title"></div>
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/blog-2.jpeg"
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
        <h1 className="text-3xl  font-semibold">Title of blog</h1>
        <p className=" font-medium">Lorem ipsum dolor sit amet.</p>
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
