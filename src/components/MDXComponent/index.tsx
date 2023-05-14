import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import clsm from "@/utils/clsm";
import { ComponentPropsWithoutRef, useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { SiCss3, SiTailwindcss, SiTypescript } from "react-icons/si";
import Button from "../Button";
import Heading from "../Heading";

const MDXImage = ({ src, alt }: ComponentPropsWithoutRef<"img">) => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src as string}
            alt={alt as string}
            className="object-cover object-center rounded-md overflow-hidden"
        />
    );
};

const getIcons = (icon: string) => {
    switch (icon) {
        case "tsx":
            return <SiTypescript />;
        case "ts":
            return <SiTypescript />;
        case "css":
            return <SiCss3 />;
        case "tailwind":
            return <SiTailwindcss />;
        default:
            return null;
    }
};

const PreComponent = (props: ComponentPropsWithoutRef<"pre">) => {
    const { className, children, ...rest } = props;

    const preRef = useRef<HTMLPreElement>(null);

    const [value, copy] = useCopyToClipboard();

    const language = className?.replace("language-", "");

    const handleCopy = () => {
        if (preRef.current) {
            copy(preRef.current.innerText);
        }
    };

    return (
        <div className="code-wrapper border border-gray-700 rounded-md overflow-hidden mb-4">
            <div className="bg-gray-900 px-4 py-3 w-full flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2 text-lg text-white">
                    {getIcons(language || "")}
                    {language}
                </div>
                <Button
                    className="p-0 w-10 h-10 text-white"
                    variant="outline"
                    onClick={handleCopy}
                >
                    {value ? (
                        <AiOutlineCheck className="text-lg animate-checked" />
                    ) : (
                        <FiCopy className="text-lg animate-checked" />
                    )}
                </Button>
            </div>

            <pre className={clsm("relative", className)} ref={preRef} {...rest}>
                {children}
            </pre>
        </div>
    );
};

const MDXComponents = {
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
    img: MDXImage,
    pre: (props: ComponentPropsWithoutRef<"pre">) => {
        return <PreComponent {...props} />;
    },
    code: (props: ComponentPropsWithoutRef<"code">) => {
        const { className, ...rest } = props;

        return <code className={clsm("px-4", className)} {...rest} />;
    },
};

export default MDXComponents;
