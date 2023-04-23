import clsm from "@/utils/clsm";
import * as RadixPopover from "@radix-ui/react-popover";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popover = RadixPopover.Root;

const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  RadixPopover.PopoverTriggerProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixPopover.Trigger ref={ref} className={clsm(className)} {...rest} />
  );
});

const PopoverContent = React.forwardRef<
  HTMLDivElement,
  RadixPopover.PopoverContentProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        className={clsm(
          "bg-gray-50 dark:bg-gray-700 rounded-md data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade p-5 shadow-lg",
          className
        )}
        sideOffset={5}
        {...rest}
      />
    </RadixPopover.Portal>
  );
});

const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  RadixPopover.PopoverCloseProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixPopover.Close ref={ref} className={clsm(className)} {...rest}>
      <AiOutlineClose />
    </RadixPopover.Close>
  );
});

const PopoverArrow = React.forwardRef<
  SVGSVGElement,
  RadixPopover.PopoverArrowProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixPopover.Arrow
      ref={ref}
      className={clsm("fill-black dark:fill-white", className)}
      {...rest}
    />
  );
});

PopoverTrigger.displayName = RadixPopover.Trigger.displayName;
PopoverContent.displayName = RadixPopover.Content.displayName;
PopoverClose.displayName = RadixPopover.Close.displayName;
PopoverArrow.displayName = RadixPopover.Arrow.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverClose, PopoverArrow };
