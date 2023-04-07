import clsm from "@/utils/clsm";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const inputVariants = cva(
  "w-full  px-4 font-light disabled:opacity-50 dark:disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 appearance-none input[type=date]:bg-red-500",
  {
    variants: {
      size: {
        sm: "h-8 text-sm",
        md: "h-10",
        lg: "h-12",
      },
      variant: {
        outline: "border border-gray-400 rounded-md bg-transparent",
        filled:
          "bg-gray-100 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-md",
        flushed:
          "border-b-2 border-gray-400 bg-transparent focus:ring-0 focus:outline-none focus:border-blue-400",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, size, variant, ...rest } = props;
  return (
    <input
      ref={ref}
      className={clsm(
        inputVariants({
          className,
          size,
          variant,
        })
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export default Input;
