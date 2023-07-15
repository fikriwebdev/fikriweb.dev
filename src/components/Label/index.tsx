import React from "react";
import * as RadixLabel from "@radix-ui/react-label";
import clsm from "@/utils/clsm";

const Label = React.forwardRef<HTMLLabelElement, RadixLabel.LabelProps>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <RadixLabel.Root
                ref={ref}
                className={clsm(
                    "peer-disabled:opacity-70 text-sm font-medium leading-none",
                    className
                )}
                {...rest}
            />
        );
    }
);

Label.displayName = RadixLabel.Root.displayName;

export default Label;
