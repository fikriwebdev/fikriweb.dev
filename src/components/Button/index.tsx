import clsm from "@/utills/clsm";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const buttonVariants = cva(
  "inline-flex items-center justify-center bg-red-500 rounded-md text-sm font-medium text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95 gap-2",
  {
    variants: {
      size: {
        sm: "h-9 px-4 py-2",
        md: "h-10 px-5 py-2",
        lg: "h-11 px-8 py-2",
      },
      variant: {
        default: "bg-emerald-500 hover:bg-emerald-600",
        ghost: "bg-transparent hover:bg-gray-500",
        link: "bg-transparent hover:underline underline-offset-4",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      size,
      variant,
      leftIcon,
      rightIcon,
      isLoading,
      disabled,
      children,
      loadingText = "Loading",
      ...rest
    } = props;
    return (
      <button
        className={clsm(
          buttonVariants({
            className,
            size,

            variant,
          })
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...rest}
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : null}
        {leftIcon && !isLoading ? leftIcon : null}
        {isLoading ? loadingText : children}
        {rightIcon && !isLoading ? rightIcon : null}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
