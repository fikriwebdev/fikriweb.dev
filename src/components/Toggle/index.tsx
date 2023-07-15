import clsm from "@/utils/clsm";
import * as RadixToggle from "@radix-ui/react-toggle";
import React from "react";
import { AiOutlineBold } from "react-icons/ai";

const Toggle = React.forwardRef<HTMLButtonElement, RadixToggle.ToggleProps>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <RadixToggle.Root
                ref={ref}
                className={clsm(
                    "hover:bg-gray-500  data-[state=on]:bg-gray-700 w-12 h-12 rounded-md flex items-center justify-center",
                    className
                )}
                {...rest}
            >
                <AiOutlineBold />
            </RadixToggle.Root>
        );
    }
);

Toggle.displayName = RadixToggle.Root.displayName;

export default Toggle;
