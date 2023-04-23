import clsm from "@/utils/clsm";
import * as RadixSeparator from "@radix-ui/react-separator";
import React from "react";

const Separator = React.forwardRef<
  HTMLDivElement,
  RadixSeparator.SeparatorProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixSeparator.Root
      ref={ref}
      className={clsm(
        "bg-gray-300 dark:bg-gray-700 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4",
        className
      )}
      {...rest}
    />
  );
});

Separator.displayName = RadixSeparator.Root.displayName;

export default Separator;
