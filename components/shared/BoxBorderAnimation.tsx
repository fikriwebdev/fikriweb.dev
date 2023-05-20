import clsm from "@/utils/clsm";
import { ComponentProps } from "react";

export default function BoxBorderAnimation({
    children,
    className,
    ...props
}: ComponentProps<"div">) {
    return (
        <div
            className={clsm(
                "flex flex-col justify-center  mx-auto relative w-full rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800",
                className
            )}
            {...props}
        >
            <div className="absolute -left-1/2 -right-1/2  animate-rotate bg-gradient-to-r from-slate-400 dark:from-white via-transparent to-transparent dark:via-transparent dark:to-transparent w-[200%] h-[700%] transform rotate-90  z-10"></div>
            <div className="bg-gray-200 dark:bg-gray-800 m-1  flex flex-col items-center relative z-10 rounded-md">
                {children}
            </div>
        </div>
    );
}
