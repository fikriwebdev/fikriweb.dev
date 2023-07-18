import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import React, { ComponentProps } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { SiCss3, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GoTerminal } from "react-icons/go";
import Button from "../Button";

const getIcons = (icon: string) => {
    switch (icon) {
        case "tsx":
            return <SiTypescript className="text-lg" />;
        case "ts":
            return <SiTypescript className="text-lg" />;
        case "css":
            return <SiCss3 className="text-lg" />;
        case "tailwind":
            return <SiTailwindcss className="text-lg" />;
        case "terminal":
            return <GoTerminal className="text-lg" />;
        default:
            return null;
    }
};

const Pre = ({
    children,
    raw,
    ...props
}: ComponentProps<"pre"> & { raw?: string }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const lang = props["data-language" as keyof typeof props];
    const [value, copy] = useCopyToClipboard();

    const title = ref.current?.previousSibling?.textContent;

    return (
        <>
            <pre {...props}>
                <div className="bg-gray-500 dark:bg-slate-700 w-full rounded-t-md flex items-center justify-between px-4 py-2 mb-2">
                    <div className="flex items-center gap-2 text-white">
                        {getIcons(lang || "")}
                        {title}
                    </div>
                    <Button
                        className="p-0 w-8 h-8 text-white"
                        variant="outline"
                        onClick={() => copy(raw || "")}
                    >
                        {value ? (
                            <AiOutlineCheck className="text-md animate-checked" />
                        ) : (
                            <FiCopy className="text-md animate-checked" />
                        )}
                    </Button>
                </div>
                {children}
            </pre>
        </>
    );
};

export default Pre;
