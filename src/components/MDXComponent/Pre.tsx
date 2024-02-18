import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { ComponentProps } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { GoTerminal } from "react-icons/go";
import {
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";

import Button from "../Button";

const getIcons = (icon: string) => {
    switch (icon) {
        case "tsx":
            return <SiTypescript className="text-lg" />;
        case "ts":
            return <SiTypescript className="text-lg" />;
        case "jsx":
            return <SiJavascript className="text-lg" />;
        case "js":
            return <SiJavascript className="text-lg" />;
        case "json":
            return <VscJson className="text-lg" />;
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
    const lang = props["data-language" as keyof typeof props];
    const [value, copy] = useCopyToClipboard();

    return (
        <pre {...props}>
            <div className="bg-gray-500 dark:bg-slate-700 w-full rounded-t-md flex items-center justify-between px-4 py-2 mb-2 sticky top-0">
                <div className="flex items-center gap-2 text-white">
                    {getIcons(lang || "")}
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
            <div className="w-full overflow-auto">{children}</div>
        </pre>
    );
};

export default Pre;
