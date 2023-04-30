import clsm from "@/utils/clsm";
import * as RadixSwitch from "@radix-ui/react-switch";
import React from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeSwitch = React.forwardRef<
  HTMLButtonElement,
  RadixSwitch.SwitchProps
>((props, ref) => {
  const { className, checked, ...rest } = props;
  return (
    <RadixSwitch.Root
      className={clsm(
        "w-20 h-8 transition-colors duration-500 bg-gray-500 rounded-full relative  data-[state=checked]:bg-gray-700 outline-none cursor-default block",
        className
      )}
      id="switch-theme"
      ref={ref}
      checked={checked}
      {...rest}
      // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
    >
      <div className="flex absolute justify-between inset-0 items-center px-2">
        <BsSunFill
          className={clsm(
            "text-gray-300 transform transition-transform duration-500",
            checked ? "scale-100" : "scale-0"
          )}
        />
        <BsMoonStarsFill
          className={clsm(
            "text-gray-200 transform transition-transform duration-500",
            checked ? "scale-0" : "scale-100"
          )}
        />
      </div>
      <RadixSwitch.Thumb className="flex items-center justify-center w-7 h-7 bg-white rounded-full transition-transform duration-300 translate-x-0.5 will-change-transform  data-[state=checked]:translate-x-[50px] group">
        {checked ? (
          <BsMoonStarsFill className="text-gray-700 animate-themeChecked" />
        ) : (
          <BsSunFill className="text-gray-500 animate-themeChecked" />
        )}
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
});

ThemeSwitch.displayName = RadixSwitch.Root.displayName;

export default ThemeSwitch;
