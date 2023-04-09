import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { BsCheck } from "react-icons/bs";
import clsm from "@/utils/clsm";

interface CheckBoxProps extends Omit<RadixCheckbox.CheckboxProps, "id"> {
  id: string;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckBoxProps>(
  (props, ref) => {
    const { className, children, id, ...rest } = props;
    return (
      <div className="flex items-center gap-2">
        <RadixCheckbox.Root
          ref={ref}
          className={clsm(
            "border border-gray-500 w-5 h-5 rounded-sm flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed peer",
            className
          )}
          id={id}
          {...rest}
        >
          <RadixCheckbox.Indicator className="text-white group data-[state=checked]:animate-checked data-[state=unchecked]:animate-unchecked">
            <BsCheck className="w-6 h-6" />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label
          htmlFor={id}
          className="peer-disabled:opacity-70 peer-disabled:cursor-not-allowed"
        >
          {children}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = RadixCheckbox.Checkbox.displayName;

export default Checkbox;
