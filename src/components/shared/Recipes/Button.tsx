import clsm from "@/utils/clsm";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { PropsWithChildren } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium cursor-pointer disabled:opacity-70 dark:disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  active:scale-95 gap-2 ring-offset-white dark:focus:ring-offset-gray-900",
    {
        variants: {
            size: {
                sm: "h-9 px-4 py-2",
                md: "h-10 px-5 py-2",
                lg: "h-11 px-8 py-2",
                // ...another size
            },

            variant: {
                // filled variants
                filled: "bg-blue-500 border-blue-300 hover:bg-blue-600  border border-blue-500  text-white focus:ring-blue-400  dark:bg-blue-700 dark:hover:bg-blue-800",
                "filled-secondary":
                    "bg-gray-500 text-white border-gray-500 hover:bg-gray-600 dark:bg-gray-700 border dark:border-gray-600 dark:hover:bg-gray-800 dark:text-white focus:ring-gray-400 ",
                "filled-danger":
                    "bg-red-500 borde-red-300 text-white hover:bg-red-600 focus:ring-red-400 dark:bg-red-600 dark:hover:bg-red-700",
                "filled-warning":
                    "bg-yellow-500 borde-yellow-300 text-white hover:bg-yellow-600 focus:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700",
                "filled-success":
                    "bg-emerald-500 borde-emerald-300 text-white hover:bg-emerald-600 focus:ring-emerald-400 dark:bg-emerald-600 dark:hover:bg-emerald-700",

                // outline variants
                outline:
                    "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500/20  border   text-blue-500 focus:ring-blue-400",
                "outline-secondary":
                    "bg-transparent text-gray-500 border-gray-500 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-300/20 dark:hover:bg-gray-500/20  border   focus:ring-slate-400",
                "outline-danger":
                    "bg-transparent text-black/90 border-red-300 hover:bg-red-500/20  border dark:border-red-600 text-red-500  focus:ring-red-400",
                "outline-warning":
                    "bg-transparent border border-yellow-300 text-yellow-500 hover:bg-yellow-500/20 focus:ring-yellow-400",
                "outline-success":
                    "bg-transparent border border-emerald-300 text-white hover:bg-emerald-500/20 focus:ring-emerald-400 text-emerald-500",

                // ghost variants
                ghost: "bg-transparent hover:bg-blue-500  hover:bg-blue-600 text-blue-500 hover:text-white focus:ring-blue-400  dark:hover:bg-blue-700",
                "ghost-secondary":
                    "bg-transparent text-gray-500 hover:text-white  hover:bg-gray-500 focus:ring-gray-400 dark:hover:bg-gray-600",
                "ghost-danger":
                    "bg-transparent text-red-500 hover:text-white  hover:bg-red-500 focus:ring-red-400 dark:hover:bg-red-600",
                "ghost-warning":
                    "bg-transparent text-yellow-500 hover:text-white hover:bg-yellow-500 focus:ring-yellow-400  dark:hover:bg-yellow-600",
                "ghost-success":
                    "bg-transparent text-emerald-500 hover:text-white hover:bg-emerald-500 focus:ring-emerald-400  dark:hover:bg-emerald-600",

                // ... another variants
            },
        },
        defaultVariants: {
            size: "md",
            variant: "filled",
        },
    }
);

function Spinner({ children }: PropsWithChildren) {
    return (
        <span className="animate-spin" role="progressbar">
            {children}
        </span>
    );
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isLoading?: boolean;
    loadingText?: string;
    spinner?: React.ReactNode;
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
            loadingText = "Loading...",
            spinner,
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
                    <Spinner>
                        {spinner ? spinner : <Loader2 className="w-4 h-4" />}
                    </Spinner>
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
