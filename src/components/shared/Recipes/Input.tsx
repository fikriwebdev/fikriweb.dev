import clsm from "@/utils/clsm";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const inputVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium  disabled:opacity-70 dark:disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400   gap-2 ring-offset-white dark:focus:ring-offset-gray-900 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 border placeholder:text-black/30 dark:placeholder:text-white/50",
    {
        variants: {
            size: {
                sm: "h-9 px-4 py-2",
                md: "h-10 px-4 py-2",
                lg: "h-11 px-4 py-2",
                // ...another size
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, size, ...rest } = props;

    return (
        <input
            ref={ref}
            className={clsm(
                inputVariants({
                    className,
                    size,
                })
            )}
            {...rest}
        />
    );
});

Input.displayName = "Input";

export default Input;
