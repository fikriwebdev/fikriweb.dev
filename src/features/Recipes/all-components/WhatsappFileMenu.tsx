/* eslint-disable jsx-a11y/alt-text */
import Button from "@/components/Button";
import clsm from "@/utils/clsm";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import { Camera, File, Image, Paperclip, Sticker } from "lucide-react";

// variants for animating the menu
const variants: Variants = {
    initial: {
        scale: 0,
        opacity: 0,
        y: 50,
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
    },
    exit: {
        scale: 0,
        opacity: 0,
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
        label: "Foto & Video",
        icon: <Image className="w-6 h-6 text-white" />,
        color: "bg-purple-500",
    },
    {
        label: "Stiker",
        icon: <Sticker className="w-6 h-6 text-white" />,
        color: "bg-blue-500",
    },
    {
        label: "Foto & Video",
        icon: <Camera className="w-6 h-6 text-white" />,
        color: "bg-pink-500",
    },
    {
        label: "Foto & Video",
        icon: <File className="w-6 h-6 text-white" />,
        color: "bg-indigo-500",
    },
];

function MenuItem(item: (typeof items)[0] & { index: number }) {
    return (
        <DropdownMenu.Item asChild>
            <motion.button
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                whileFocus="hover"
                transition={{
                    delay: (5 - item.index) * 0.02,
                    type: "spring",
                    bounce: 0.5,
                }}
                className={clsm(
                    "w-14 h-14 rounded-full outline-none  flex items-center justify-center focus-within:outline focus-within:outline-2 relative focus-within:outline-offset-4 focus-within:outline-green-500/50 group select-none",
                    item.color
                )}
            >
                {item.icon}

                <motion.span
                    className="bg-white absolute -right-20 text-black rounded-full px-4 text-sm  py-1"
                    variants={tooltipVariants}
                >
                    {item.label}
                </motion.span>
            </motion.button>
        </DropdownMenu.Item>
    );
}

export default function WhatsappFileMenu() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button className="w-10 h-10 rounded-full m-0 p-0">
                    <Paperclip className="w-5 h-5" />
                </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                {/* Use <AnimatePresence/> to allows components to animate out when they're removed from the React tree. */}
                <AnimatePresence>
                    <DropdownMenu.Content
                        loop
                        side="top"
                        className="flex flex-col gap-4 mb-4"
                    >
                        {items.map((item, i) => (
                            <MenuItem key={i} {...item} index={i} />
                        ))}
                    </DropdownMenu.Content>
                </AnimatePresence>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
