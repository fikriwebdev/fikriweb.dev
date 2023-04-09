import React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import clsm from "@/utils/clsm";

const RadioGroup = RadixRadioGroup.Root;

interface RadioGroupItemProps
  extends Omit<RadixRadioGroup.RadioGroupItemProps, "id"> {
  id: string;
}

const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  (props, ref) => {
    const { className, id, children, ...rest } = props;
    return (
      <div className="flex items-center gap-2">
        <RadixRadioGroup.Item
          ref={ref}
          className={clsm(
            "peer border-2 border-gray-300 dark:border-gray-500 rounded-full w-4 h-4 data-[state=checked]:border-0  disabled:opacity-70 dark:disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ",
            className
          )}
          id={id}
          {...rest}
        >
          <RadixRadioGroup.Indicator className="relative w-full h-full">
            <div className="w-full h-full rounded-full bg-sky-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white dark:bg-gray-900 rounded-full"></div>
            </div>
          </RadixRadioGroup.Indicator>
        </RadixRadioGroup.Item>
        <label
          htmlFor={id}
          className="peer-disabled:opacity-70 text-sm font-medium leading-none"
        >
          {children}
        </label>
      </div>
    );
  }
);

RadioGroupItem.displayName = RadixRadioGroup.Item.displayName;

export { RadioGroup, RadioGroupItem };
