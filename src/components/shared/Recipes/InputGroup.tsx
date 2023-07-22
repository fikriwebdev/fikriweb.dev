import clsm from "@/utils/clsm";
import React, { ComponentPropsWithoutRef } from "react";

const InputRightElement = React.forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<"div">
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <div
            className={clsm(
                "h-full w-8 rounded-md flex items-center justify-center p-2",
                className
            )}
            ref={ref}
            {...rest}
        />
    );
});

const InputGroup = React.forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<"div">
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <div
            className={clsm(
                "relative flex items-center [&>input]:bg-transparent dark:[&>input]:bg-transparent [&>input]:border-none dark:[&>input]:border-none [&>input]:focus:ring-0",
                className
            )}
            ref={ref}
            {...rest}
        ></div>
    );
});

InputGroup.displayName = "InputGroup";
InputRightElement.displayName = "InputRightElement";

export { InputGroup, InputRightElement };
