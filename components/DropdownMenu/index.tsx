"use client";

import clsm from "@/utils/clsm";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { BsCheck, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const DropdownMenu = RadixDropdownMenu.Root;

const DropdownMenuTrigger = React.forwardRef<
    HTMLButtonElement,
    RadixDropdownMenu.DropdownMenuTriggerProps
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <RadixDropdownMenu.Trigger
            ref={ref}
            asChild
            className={clsm(className)}
            {...rest}
        >
            {children}
        </RadixDropdownMenu.Trigger>
    );
});

const DropdownMenuPortal = (props: RadixDropdownMenu.MenuPortalProps) => {
    const { className, ...rest } = props;
    return <RadixDropdownMenu.Portal className={clsm(className)} {...rest} />;
};

const DropdownMenuContent = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuContentProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.Content
            ref={ref}
            className={clsm(
                "min-w-[220px] bg-gray-50 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                className
            )}
            sideOffset={5}
            {...rest}
        />
    );
});

const DropdownMenuItem = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuItemProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.Item
            ref={ref}
            className={clsm(
                "group text-[13px] leading-none text-black dark:text-white  flex items-center h-[25px] relative px-4 my-1 select-none outline-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none dark:data-[highlighted]:bg-gray-600 data-[highlighted]:bg-gray-300 data-[highlighted]:text-black dark:data-[highlighted]:text-white",
                className
            )}
            {...rest}
        />
    );
});

const DropdownMenuSub = (props: RadixDropdownMenu.DropdownMenuSubProps) => {
    return <RadixDropdownMenu.Sub {...props} />;
};

const DropdownMenuSubTrigger = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuSubTriggerProps
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <RadixDropdownMenu.SubTrigger
            ref={ref}
            className={clsm(
                "group text-[13px] leading-none text-black dark:text-white  flex items-center h-[25px] relative px-4 my-1 select-none outline-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none dark:data-[highlighted]:bg-gray-600 data-[highlighted]:bg-gray-300 data-[highlighted]:text-black dark:data-[highlighted]:text-white ",
                className
            )}
            {...rest}
        >
            {children}
            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                <BsChevronRight />
            </div>
        </RadixDropdownMenu.SubTrigger>
    );
});

const DropdownMenuSubContent = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuSubContentProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.SubContent
            ref={ref}
            className={clsm(
                "min-w-[220px] bg-gray-50 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                className
            )}
            {...rest}
        />
    );
});

const DropdownMenuSeparator = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuSeparatorProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.Separator
            ref={ref}
            className={clsm(
                "h-[1px]  bg-gray-300 dark:bg-gray-500 my-1",
                className
            )}
            {...rest}
        />
    );
});

const DropdownMenuCheckboxItem = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuCheckboxItemProps
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <RadixDropdownMenu.CheckboxItem
            ref={ref}
            className={clsm(
                "text-[13px] leading-none text-black dark:text-white  flex items-center h-[25px] relative px-4 my-1 select-none outline-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none dark:data-[highlighted]:bg-gray-600 data-[highlighted]:bg-gray-300 data-[highlighted]:text-black dark:data-[highlighted]:text-white pl-6",
                className
            )}
            {...rest}
        >
            <RadixDropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <BsCheck className="fill-black dark:fill-white w-4 h-4" />
            </RadixDropdownMenu.ItemIndicator>
            {children}
        </RadixDropdownMenu.CheckboxItem>
    );
});

const DropdownMenuItemIndicator = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuItemIndicatorProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.ItemIndicator
            ref={ref}
            className={clsm(className)}
            {...rest}
        />
    );
});

const DropdownMenuLabel = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuLabelProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.Label
            ref={ref}
            className={clsm(
                "text-xs  text-black dark:text-white p-[5px] pl-4 opacity-50",
                className
            )}
            {...rest}
        />
    );
});

const DropdownMenuRadioGroup = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuRadioGroupProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.RadioGroup
            ref={ref}
            className={clsm(className)}
            {...rest}
        />
    );
});

const DropdownMenuRadioItem = React.forwardRef<
    HTMLDivElement,
    RadixDropdownMenu.DropdownMenuRadioItemProps
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <RadixDropdownMenu.RadioItem
            ref={ref}
            className={clsm(
                "text-[13px] leading-none text-black dark:text-white  flex items-center h-[25px] relative px-4 my-1 select-none outline-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none dark:data-[highlighted]:bg-gray-600 data-[highlighted]:bg-gray-300 data-[highlighted]:text-black dark:data-[highlighted]:text-white pl-6",
                className
            )}
            {...rest}
        >
            <RadixDropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <RxDotFilled className="fill-black dark:fill-white w-4 h-4" />
            </RadixDropdownMenu.ItemIndicator>
            {children}
        </RadixDropdownMenu.RadioItem>
    );
});

const DropdownMenuArrow = React.forwardRef<
    SVGSVGElement,
    RadixDropdownMenu.DropdownMenuArrowProps
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <RadixDropdownMenu.Arrow
            ref={ref}
            className={clsm("fill-gray-50 dark:fill-gray-700", className)}
            {...rest}
        />
    );
});

DropdownMenuTrigger.displayName = RadixDropdownMenu.Trigger.displayName;
DropdownMenuPortal.displayName = RadixDropdownMenu.Portal.displayName;
DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName;
DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName;
DropdownMenuSub.displayName = RadixDropdownMenu.Sub.displayName;
DropdownMenuSubTrigger.displayName = RadixDropdownMenu.SubTrigger.displayName;
DropdownMenuSubContent.displayName = RadixDropdownMenu.SubContent.displayName;
DropdownMenuSeparator.displayName = RadixDropdownMenu.Separator.displayName;
DropdownMenuCheckboxItem.displayName =
    RadixDropdownMenu.CheckboxItem.displayName;
DropdownMenuItemIndicator.displayName =
    RadixDropdownMenu.ItemIndicator.displayName;
DropdownMenuLabel.displayName = RadixDropdownMenu.DropdownMenuLabel.displayName;
DropdownMenuRadioGroup.displayName =
    RadixDropdownMenu.DropdownMenuRadioGroup.displayName;
DropdownMenuRadioItem.displayName =
    RadixDropdownMenu.DropdownMenuRadioItem.displayName;
DropdownMenuArrow.displayName = RadixDropdownMenu.DropdownMenuArrow.displayName;

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuItemIndicator,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuArrow,
};
