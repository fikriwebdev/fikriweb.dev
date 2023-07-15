"use client";

import clsm from "@/utils/clsm";
import * as RadixSwitch from "@radix-ui/react-switch";
import React from "react";

const Switch = React.forwardRef<HTMLButtonElement, RadixSwitch.SwitchProps>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <RadixSwitch.Root
                className={clsm(
                    "w-[42px] h-[25px] bg-gray-500 rounded-full relative  data-[state=checked]:bg-green-100 outline-none cursor-default",
                    className
                )}
                id="airplane-mode"
                ref={ref}
                {...rest}
                // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
            >
                <RadixSwitch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:bg-green-500 data-[state=checked]:translate-x-[19px]" />
            </RadixSwitch.Root>
        );
    }
);

Switch.displayName = RadixSwitch.Root.displayName;

export default Switch;
