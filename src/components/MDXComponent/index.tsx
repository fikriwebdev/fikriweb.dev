import clsm from "@/utils/clsm";
import { ComponentPropsWithoutRef } from "react";
import Heading from "../Heading";
import Pre from "./Pre";

const H2 = ({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"h2">) => {
    const id = children?.toString().toLowerCase().split(" ").join("-");
    return (
        <Heading
            as="h2"
            className={clsm(
                "mb-6 text-base scroll-mt-[100px]  relative",
                className
            )}
            {...props}
            id={id}
        >
            <a
                href={`#${id}`}
                className="anchor before:hidden sm:hover:before:hidden md:hover:before:block before:content-['#'] before:absolute before:text-white before:-ml-6 "
            >
                {children}
            </a>
        </Heading>
    );
};

const H3 = ({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"h3">) => {
    const id = children?.toString().toLowerCase().split(" ").join("-");
    return (
        <Heading
            as="h3"
            className={clsm("mb-6 scroll-mt-[100px]  text-sm", className)}
            {...props}
            id={id}
        >
            <a
                href={`#${id}`}
                className="anchor before:hidden sm:hover:before:hidden md:hover:before:block before:content-['#'] before:absolute before:text-white before:-ml-6 "
            >
                {children}
            </a>
        </Heading>
    );
};

const mdxComponents = {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
        <Heading as="h1" className="anchor mb-4" {...props} />
    ),
    h2: H2,
    h3: H3,
    h4: (props: ComponentPropsWithoutRef<"h4">) => (
        <Heading as="h4" className="mb-4" {...props} />
    ),
    h5: (props: ComponentPropsWithoutRef<"h5">) => (
        <Heading as="h5" className="mb-4" {...props} />
    ),
    h6: (props: ComponentPropsWithoutRef<"h6">) => (
        <Heading as="h6" className="mb-4" {...props} />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
        <p
            className={clsm(
                "mb-8 text-gray-500 dark:text-white/70 text-sm md:text-base font-light",
                className
            )}
            {...props}
        />
    ),
    pre: Pre,
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
        <ol className="list-decimal m-0 p-0 mb-8" {...props} />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
        <ul className="m-0 p-0 leading-8 list-disc mb-8" {...props} />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
        <li
            className="ml-8 text-gray-500 dark:text-white/70 text-sm md:text-base font-light mb-2"
            {...props}
        />
    ),
    a: (props: ComponentPropsWithoutRef<"a">) => (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-[1px] -m-[1px] font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600"
            {...props}
        />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => (
        <code
            {...props}
            className="bg-gray-300 dark:bg-gray-700 p-1 rounded-md font-light text-sm md:text-base"
        />
    ),
};

export default mdxComponents;
