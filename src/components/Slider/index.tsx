import clsm from "@/utils/clsm";
import * as RadixSlider from "@radix-ui/react-slider";
import React from "react";

const Slider = React.forwardRef<HTMLSpanElement, RadixSlider.SliderProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <RadixSlider.Root
        ref={ref}
        className={clsm(
          "relative flex items-center select-none touch-none w-[200px] h-5",
          className
        )}
        {...rest}
      >
        <RadixSlider.Track className=" bg-gray-200 dark:bg-gray-700 relative grow rounded-full h-[3px]">
          <RadixSlider.Range className="absolute bg-gray-300 dark:bg-white  rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block w-5 h-5 bg-white rounded-[10px] hover:bg-gray-100" />
      </RadixSlider.Root>
    );
  }
);

Slider.displayName = RadixSlider.Root.displayName;

export default Slider;
