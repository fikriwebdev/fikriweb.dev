import * as RadixTooltip from "@radix-ui/react-tooltip";
import React from "react";

interface TooltipProps {
    children?: React.ReactNode;
    label: string;
}

export default function Tooltip({ children, label }: TooltipProps) {
    return (
        <RadixTooltip.Provider delayDuration={300}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-black dark:text-white select-none rounded-[4px] bg-gray-50 dark:bg-gray-700 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-[5000]"
                        sideOffset={5}
                        align="center"
                    >
                        {label}
                        <RadixTooltip.Arrow className="fill-transparent" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
}
