import clsm from "@/utils/clsm";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithRef } from "react";

const headingVariants = cva("leading-4", {
    variants: {
        as: {
            h1: "text-2xl md:text-3xl",
            h2: "text-xl md:text-2xl",
            h3: "text-lg md:text-xl",
            h4: "text-base md:text-lg",
            h5: "text-sm md:text-base",
            h6: "text-xs md:text-sm",
        },
    },
    defaultVariants: {
        as: "h1",
    },
});

export interface HeadingProps
    extends ComponentPropsWithRef<"h1">,
        VariantProps<typeof headingVariants> {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    (props, ref) => {
        const { as, className, ...rest } = props;
        const As = as;
        return (
            <As
                className={clsm(headingVariants({ as, className }))}
                ref={ref}
                {...rest}
            />
        );
    }
);

Heading.displayName = "Heading";

export default Heading;
