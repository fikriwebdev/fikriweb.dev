import clsm from "@/utils/clsm";
import * as RadixAccordion from "@radix-ui/react-accordion";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion = RadixAccordion.Root;

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionItemProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixAccordion.Item
      ref={ref}
      className={clsm("border-b  border-gray-200 overflow-hidden", className)}
      {...rest}
    />
  );
});

AccordionItem.displayName = RadixAccordion.AccordionItem.displayName;

const AccordionHeader = React.forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionHeaderProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixAccordion.AccordionHeader
      ref={ref}
      className={clsm("flex text-white", className)}
      {...rest}
    />
  );
});

AccordionHeader.displayName = RadixAccordion.AccordionHeader.displayName;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  RadixAccordion.AccordionTriggerProps
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <RadixAccordion.AccordionTrigger
      ref={ref}
      className={clsm(
        "flex flex-1 text-white items-center justify-between transition-all  h-[45px] py-0 px-4 hover:bg-gray-50 hover:bg-opacity-10 [&[data-state=open]>svg]:rotate-180 text-lg font-medium",
        className
      )}
      {...rest}
    >
      {children}
      <HiOutlineChevronDown className="w-4 h-4" />
    </RadixAccordion.AccordionTrigger>
  );
});

AccordionTrigger.displayName = RadixAccordion.AccordionTrigger.displayName;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionContentProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixAccordion.AccordionContent
      ref={ref}
      className={clsm(
        "overflow-hidden text-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp transition-all px-4 pt-1 pb-4 font-light",
        className
      )}
      {...rest}
    />
  );
});

AccordionContent.displayName = RadixAccordion.AccordionContent.displayName;

export {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
};
