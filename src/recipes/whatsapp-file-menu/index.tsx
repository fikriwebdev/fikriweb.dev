import Button from "@/components/Button";
import clsm from "@/utils/clsm";

import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { BsCardImage } from "react-icons/bs";

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
};

const items = [
    {
        label: "Foto & Video",
        icon: <BsCardImage className="w-6 h-6" />,
        color: "bg-purple-500",
    },
    {
        label: "Stiker",
        icon: <BsCardImage className="w-6 h-6" />,
        color: "bg-purple-500",
    },
    {
        label: "Foto & Video",
        icon: <BsCardImage className="w-6 h-6" />,
        color: "bg-purple-500",
    },
    {
        label: "Foto & Video",
        icon: <BsCardImage className="w-6 h-6" />,
        color: "bg-purple-500",
    },
];

export default function WhatsappFileMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="h-[100vh] w-full flex items-center justify-center border">
            <div className="relative flex flex-col items-center">
                <AnimatePresence>
                    {open ? (
                        <ul className=" flex flex-col gap-4 absolute bottom-14">
                            {items.map((item, i) => (
                                <motion.li
                                    variants={variants}
                                    key={i}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    custom={i}
                                    transition={{
                                        delay: (5 - i) * 0.02,
                                        type: "spring",
                                        bounce: 0.5,
                                    }}
                                    className={clsm(
                                        "w-14 h-14 rounded-full  flex items-center justify-center",
                                        item.color
                                    )}
                                >
                                    {item.icon}
                                </motion.li>
                            ))}
                        </ul>
                    ) : null}
                </AnimatePresence>

                <Button
                    className="w-10 h-10 rounded-full m-0 p-0 relative"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <AiOutlinePaperClip className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}
