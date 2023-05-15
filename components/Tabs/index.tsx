"use client";

import clsm from "@/utils/clsm";
import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";

const Tabs = React.forwardRef<HTMLDivElement, RadixTabs.TabsProps>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <RadixTabs.Tabs
                ref={ref}
                className={clsm("flex flex-col  p-4", className)}
                {...rest}
            />
        );
    }
);

const TabsList = React.forwardRef<HTMLDivElement, RadixTabs.TabsListProps>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <RadixTabs.List
                ref={ref}
                className={clsm(
                    "shrink-0 flex items-center border-b border-b-gray-200 ",
                    className
                )}
                {...rest}
            />
        );
    }
);

const TabsTrigger = React.forwardRef<
    HTMLButtonElement,
    RadixTabs.TabsTriggerProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixTabs.TabsTrigger
            ref={ref}
            className={clsm(
                "-mb-[1px] pb-4 px-5 h-11 flex items-center justify-center select-none  first:rounded-tl-md last:rounded-tr-md  w-auto border-b border-b-transparent data-[state=active]:border-b-sky-400 data-[state=active]:text-sky-400 transition-colors duration-200",
                className
            )}
            {...rest}
        />
    );
});

const TabsContent = React.forwardRef<
    HTMLDivElement,
    RadixTabs.TabsContentProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixTabs.TabsContent
            ref={ref}
            className={clsm(
                "grow p-5 rounded-bl-md rounded-br-md outline-none",
                className
            )}
            {...rest}
        />
    );
});

Tabs.displayName = RadixTabs.Tabs.displayName;
TabsList.displayName = RadixTabs.TabsList.displayName;
TabsTrigger.displayName = RadixTabs.TabsTrigger.displayName;
TabsContent.displayName = RadixTabs.TabsContent.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
