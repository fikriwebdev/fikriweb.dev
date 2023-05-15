"use client";

import clsm from "@/utils/clsm";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithRef } from "react";

const headingVariants = cva("font-bold", {
    variants: {
        as: {
            h1: "text-3xl md:text-4xl",
            h2: "text-2xl md:text-3xl",
            h3: "text-xl md:text-2xl",
            h4: "text-lg md:text-xl",
            h5: "text-md md:text-lg",
            h6: "text-sm md:text-md",
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
