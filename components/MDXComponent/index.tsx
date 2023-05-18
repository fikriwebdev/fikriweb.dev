import { ComponentPropsWithoutRef } from "react";
import Heading from "../Heading";
import Pre from "./Pre";

const mdxComponents = {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
        <Heading as="h1" className="mb-4" {...props} />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
        <Heading as="h2" className="mb-6" {...props} />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
        <Heading as="h3" className="mb-4" {...props} />
    ),
    h4: (props: ComponentPropsWithoutRef<"h4">) => (
        <Heading as="h4" className="mb-4" {...props} />
    ),
    h5: (props: ComponentPropsWithoutRef<"h5">) => (
        <Heading as="h5" className="mb-4" {...props} />
    ),
    h6: (props: ComponentPropsWithoutRef<"h6">) => (
        <Heading as="h6" className="mb-4" {...props} />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
        <p className="mb-8" {...props} />
    ),
    pre: Pre,
};

export default mdxComponents;
