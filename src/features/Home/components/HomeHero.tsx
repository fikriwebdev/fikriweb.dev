import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

import Link from "next/link";
import { Instagram, Github, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="h-[60vh] border-gray-200 dark:border-gray-800">
            <div className="absolute -mt-16 inset-0 w-full h-full object-cover object-center -z-20 bg-[length:30rem] md:bg-[length:88rem] bg-no-repeat bg-[url('/assets/images/blurry-shape-sm.svg')] md:bg-[url('/assets/images/blurry-shape.svg')] overflow-hidden" />
            <div className="absolute -mt-16 inset-0 w-full h-full  object-cover object-center -z-20 paper overflow-hidden" />
            <div className="flex flex-col items-center justify-center gap-2 h-full">
                <Avatar
                    src="/assets/images/avatar.webp"
                    size="xl"
                    className="shadow-lg"
                    alt="Avatar"
                />
                <h1 className="text-base text-black dark:text-gray-400 font-semibold">
                    Hello, I&apos;m Fikri 👋
                </h1>
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-500  dark:to-gray-500 text-center">
                    I like to create <br className="block md:hidden" />{" "}
                    front-end solutions <br className="" /> that are fast,
                    flexible
                    <br className="" /> and flawless.
                </p>
                <div className="flex jusity-center mt-4">
                    <Link href="/blog">
                        <Button
                            rightIcon={
                                <ArrowRight className="text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
                            }
                            className="group"
                        >
                            Read my blogs
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <a
                        href="https://instagram.com/fikriweb.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-600 transition-colors duration-500 dark:text-gray-300 dark:hover:text-gray-400">
                            <Instagram className="w-5 h-5" />
                            <p>fikriwebdev</p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/muhamdfikrii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-600 transition-colors duration-500 dark:text-gray-300 dark:hover:text-gray-400">
                            <Github className="w-5 h-5" />
                            <p>muhamdfikrii</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
