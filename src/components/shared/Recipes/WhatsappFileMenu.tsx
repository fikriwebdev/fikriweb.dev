/* eslint-disable jsx-a11y/alt-text */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import { Camera, File, Image, Paperclip, Sticker } from "lucide-react";
import React from "react";

// variants for animating the menu
const variants: Variants = {
    initial: {
        scale: 0,
        opacity: 0,
        x: 0,
        y: 50,
    },
    animate: {
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
    },
    exit: {
        scale: 0,
        opacity: 0,
        x: 0,
        y: 50,
    },
    hover: {
        opacity: 1,
    },
};

// variants for animating the tooltip
const tooltipVariants: Variants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 0,
        opacity: 0,
        y: 0,
    },
    exit: {
        scale: 0,
        opacity: 0,
        y: 50,
    },
    hover: {
        scale: 1,
        opacity: 1,
    },
};

const items = [
    {
        label: "Photo & Video",
        icon: <Image className="w-6 h-6 text-white" />,
        color: "bg-purple-500",
    },
    {
        label: "Stiker",
        icon: <Sticker className="w-6 h-6 text-white" />,
        color: "bg-blue-500",
    },
    {
        label: "Camera",
        icon: <Camera className="w-6 h-6 text-white" />,
        color: "bg-pink-500",
    },
    {
        label: "File",
        icon: <File className="w-6 h-6 text-white" />,
        color: "bg-indigo-500",
    },
];

function MenuItem(item: (typeof items)[0] & { index: number }) {
    return (
        <DropdownMenu.Item asChild>
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                whileFocus="hover"
                className="outline-none group  flex  items-center"
                transition={{
                    delay: (5 - item.index) * 0.02,
                    type: "spring",
                    bounce: 0.5,
                }}
            >
                <motion.button
                    className={`
                        w-14 h-14 rounded-full outline-none  flex items-center justify-center group-focus:outline group-focus:outline-2 relative group-focus:outline-offset-4 group-focus:outline-green-500/50 group select-none
                        ${item.color}`}
                >
                    {item.icon}
                </motion.button>
                <motion.span
                    className="bg-white absolute left-[60%] text-black rounded-full px-4 text-sm  py-1"
                    variants={tooltipVariants}
                >
                    {item.label}
                </motion.span>
            </motion.div>
        </DropdownMenu.Item>
    );
}

export default function WhatsappFileMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <DropdownMenu.Root
            open={open}
            onOpenChange={open => setOpen(open)}
            modal={false}
        >
            <DropdownMenu.Trigger asChild>
                <button
                    aria-label="open dropdown"
                    className="w-10 h-10 rounded-full m-0 p-0 bg-gray-500 dark:bg-gray-700 flex items-center justify-center"
                >
                    <Paperclip className="w-5 h-5 text-white" />
                </button>
            </DropdownMenu.Trigger>
            {/* Use <AnimatePresence/> to allows components to animate out when they're removed from the React tree. */}
            <AnimatePresence mode="wait">
                {open ? (
                    // use forceMount to allow consumers to delegate the mounting and unmounting of children based on the animation state determined by those libraries. See here: https://www.radix-ui.com/docs/primitives/guides/animation
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content
                            forceMount
                            loop
                            side="top"
                            className="flex flex-col gap-4 mb-4 w-screen md:w-[450px] items-center relative"
                        >
                            {items.map((item, i) => (
                                <MenuItem key={i} {...item} index={i} />
                            ))}
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                ) : null}
            </AnimatePresence>
        </DropdownMenu.Root>
    );
}
