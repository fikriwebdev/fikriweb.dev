import clsm from "@/utils/clsm";
import * as RadixSelect from "@radix-ui/react-select";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Select = RadixSelect.Root;

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  RadixSelect.SelectTriggerProps
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <RadixSelect.Trigger
      ref={ref}
      className={clsm(
        "inline-flex  items-center justify-between border border-gray-300 dark:border-gray-700 rounded px-[15px] text-sm leading-none h-[35px] gap-[5px]  text-black dark:text-white  hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-70 dark:disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
        className
      )}
      {...rest}
    >
      {children}
      <RadixSelect.Icon className="text-black dark:text-white">
        <BsChevronDown />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
});

const SelectValue = React.forwardRef<
  HTMLButtonElement,
  RadixSelect.SelectValueProps
>((props, ref) => {
  const { className, ...rest } = props;
  return <RadixSelect.Value ref={ref} className={clsm(className)} {...rest} />;
});

const SelectContent = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectViewportProps
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        ref={ref}
        className={clsm(
          "overflow-hidden bg-white dark:bg-gray-700 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]  data-[state=open]:animate-slideDownAndFade data-[state=closed]:animate-slideUpAndFade  w-full min-w-[var(--radix-select-trigger-width)] border border-gray-300 dark:border-gray-600",
          className
        )}
        side="bottom"
        position="popper"
        {...rest}
      >
        <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <BsChevronUp />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="p-[5px]">
          {children}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <BsChevronDown />
        </RadixSelect.ScrollDownButton>
        <RadixSelect.Arrow className="fill-transparent" />
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
});

const SelectGroup = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectGroupProps
>((props, ref) => {
  const { className, ...rest } = props;
  return <RadixSelect.Group ref={ref} className={clsm(className)} {...rest} />;
});

const SelectLabel = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectLabelProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixSelect.Label
      ref={ref}
      className={clsm(
        "px-6 text-xs font-semibold leading-[25px] text-black dark:text-white",
        className
      )}
      {...rest}
    />
  );
});

const SelectItem = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <RadixSelect.Item
      className={clsm(
        "text-sm leading-none text-black dark:text-white rounded-[3px] flex items-center h-[25px] px-6 relative RadixSelect-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-300 dark:data-[highlighted]:bg-gray-600 data-[highlighted]:text-black dark:data-[highlighted]:text-white",
        className
      )}
      {...props}
      ref={ref}
    >
      <RadixSelect.ItemText className="ml-4">{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute left-0  inline-flex items-center justify-center">
        <AiOutlineCheck className="w-4 h-4" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
});

const SelectSeparator = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectSeparatorProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixSelect.Separator
      ref={ref}
      className={clsm(
        "h-[1px] bg-gray-300 dark:bg-gray-600 m-[5px]",
        className
      )}
      {...rest}
    />
  );
});

SelectTrigger.displayName = RadixSelect.Trigger.displayName;
SelectValue.displayName = RadixSelect.Value.displayName;
SelectContent.displayName = RadixSelect.Content.displayName;
SelectGroup.displayName = RadixSelect.Group.displayName;
SelectLabel.displayName = RadixSelect.Label.displayName;
SelectItem.displayName = RadixSelect.Item.displayName;
SelectSeparator.displayName = RadixSelect.Separator.displayName;

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
