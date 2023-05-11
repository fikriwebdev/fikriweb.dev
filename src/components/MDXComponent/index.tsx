import { ComponentPropsWithoutRef } from "react";

const MDXImage = ({ src, alt }: ComponentPropsWithoutRef<"img">) => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src as string}
            alt={alt as string}
            className="w-full h-[200px] object-cover object-center rounded-md overflow-hidden"
        />
    );
};

const MDXComponents = {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
        <h1 className="text-red-500" {...props} />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
        <h2 className="text-red-500" {...props} />
    ),
    img: MDXImage,
};

export default MDXComponents;
