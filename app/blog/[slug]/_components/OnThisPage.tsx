"use client";

import { AnchorArray } from "@/types";
import clsm from "@/utils/clsm";
import React from "react";

const HEADER_HEIGHT = 64;
const HEADER_OFFSET = 100;

export default function OnThisPage() {
    const [scrollY, setScrollY] = React.useState<number>(0);
    const [contents, setContents] = React.useState<AnchorArray[]>([]);

    React.useEffect(() => {
        const anchors = document.querySelectorAll(".blog h2, .blog h3");
        const anchorsArray: AnchorArray[] = Array.from(anchors).map(anchor => {
            const anchorTag = anchor.querySelector("a");

            const rect = anchorTag?.getBoundingClientRect();
            return {
                title: anchorTag?.textContent || "",
                level: +anchor.tagName.replace("H", ""),
                anchor: anchor?.id || "",
                position: rect?.y || 0,
            };
        });
        setContents(anchorsArray);
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY + HEADER_HEIGHT + HEADER_OFFSET);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-[var(--header-height)]">
            <div className="text-black dark:text-white text-md font-semibold">
                On this page
            </div>
            <div className="flex flex-col gap-2 items-start mt-4">
                {contents.map((content, index, array) => {
                    const isActive =
                        content.position < scrollY &&
                        (index === array.length - 1 ||
                            scrollY < array[index + 1].position);

                    return (
                        <div
                            key={content.anchor}
                            className={clsm(
                                isActive
                                    ? "text-black dark:text-white"
                                    : "text-gray-400 dark:text-gray-500",
                                +content.level > 2 ? "ml-4" : "ml-0"
                            )}
                        >
                            <a href={`#${content.anchor}`}>{content.title}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
