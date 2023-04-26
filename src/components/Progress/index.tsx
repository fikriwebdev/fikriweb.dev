import clsm from "@/utils/clsm";
import * as RadixProgress from "@radix-ui/react-progress";
import React from "react";

const Progress = React.forwardRef<HTMLDivElement, RadixProgress.ProgressProps>(
  (props, ref) => {
    const { className, value, ...rest } = props;
    return (
      <RadixProgress.Root
        ref={ref}
        className={clsm(
          "relative overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-full h-[25px]",
          className
        )}
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
        value={value}
        {...rest}
      >
        <RadixProgress.Indicator
          className="bg-gray-400 dark:bg-white w-full h-full transition-transform  ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{
            transform:
              value && typeof value === "number"
                ? `translateX(-${100 - value}%)`
                : undefined,
          }}
        />
      </RadixProgress.Root>
    );
  }
);

Progress.displayName = RadixProgress.Root.displayName;

export default Progress;
