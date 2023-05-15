"use client";

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center gap-2 paper  border-b h-[60vh] border-gray-200 dark:border-gray-800">
            <Avatar
                src="/assets/images/avatar-hero.png"
                size="xl"
                className="shadow-lg"
            />
            <h1 className="text-base text-gray-500 font-medium">
                Hello, I&apos;m Fikri 👋
            </h1>
            <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-300  dark:to-gray-700 text-center">
                I like to create front-end solutions <br className="" /> that
                are fast, flexible,
                <br className="" /> and flawless.
            </p>
            <div className="flex jusity-center mt-4">
                <Button
                    rightIcon={
                        <BsArrowRightShort className="text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
                    }
                    className="group"
                >
                    Read my blogs
                </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Link href="/">
                    <div className="flex items-center gap-1 text-gray-500 font-medium hover:text-gray-600 transition-colors duration-500 dark:text-gray-300 dark:hover:text-gray-400">
                        <CgFileDocument />
                        <p>Resume</p>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex items-center gap-1 text-gray-500 font-medium hover:text-gray-600 transition-colors duration-500 dark:text-gray-300 dark:hover:text-gray-400">
                        <AiFillGithub />
                        <p>muhamdfikrii</p>
                    </div>
                </Link>
            </div>
        </section>
    );
}
