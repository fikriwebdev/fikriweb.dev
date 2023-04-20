import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import clsm from "@/utils/clsm";
import { AiOutlineClose } from "react-icons/ai";

const Dialog = RadixDialog.Root;

const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  Omit<RadixDialog.DialogTriggerProps, "asChild">
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixDialog.Trigger
      asChild
      ref={ref}
      className={clsm(className)}
      {...rest}
    />
  );
});

const DialogPortal: React.FC<RadixDialog.PortalProps> = (props) => {
  const { className, ...rest } = props;

  return <RadixDialog.Portal className={clsm(className)} {...rest} />;
};

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  RadixDialog.DialogOverlayProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <RadixDialog.Overlay
      ref={ref}
      className={clsm(
        "fixed inset-0 bg-black/30 data-[state=open]:animate-alertOverlayShow data-[state=closed]:animate-alertOverlayHide z-[5000]",
        className
      )}
      {...rest}
    />
  );
});

const DialogContent = React.forwardRef<
  HTMLDivElement,
  RadixDialog.DialogContentProps
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <RadixDialog.Content
      ref={ref}
      className={clsm(
        "bg-white dark:bg-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed p-4 rounded-md w-[90vw] max-w-[500px] max-h-[85vh] shadow-lg dark:shadow-2xl focus:outline-none data-[state=open]:animate-alertContentShow data-[state=closed]:animate-alertContentHide z-[5000]",
        className
      )}
      {...rest}
    >
      <RadixDialog.Close
        asChild
        className="absolute top-4 right-4 cursor-pointer"
      >
        <button>
          <AiOutlineClose />
        </button>
      </RadixDialog.Close>
      {children}
    </RadixDialog.Content>
  );
});

const DialogTitle = React.forwardRef<
  HTMLDivElement,
  RadixDialog.DialogTitleProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <RadixDialog.Title
      ref={ref}
      className={clsm(
        "text-lg font-medium dark:text-white text-gray-900",
        className
      )}
      {...rest}
    />
  );
});

const DialogDescription = React.forwardRef<
  HTMLDivElement,
  RadixDialog.DialogDescriptionProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <RadixDialog.Description
      ref={ref}
      className={clsm(
        "my-4 leading-6 text-gray-500 dark:text-gray-300 text-sm",
        className
      )}
      {...rest}
    />
  );
});

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  RadixDialog.DialogCloseProps
>((props, ref) => {
  const { className, ...rest } = props;

  return <RadixDialog.Close ref={ref} className={clsm(className)} {...rest} />;
});

DialogTrigger.displayName = RadixDialog.DialogTrigger.displayName;
DialogOverlay.displayName = RadixDialog.DialogOverlay.displayName;
DialogContent.displayName = RadixDialog.DialogContent.displayName;
DialogTitle.displayName = RadixDialog.DialogTitle.displayName;
DialogDescription.displayName = RadixDialog.DialogDescription.displayName;
DialogClose.displayName = RadixDialog.DialogClose.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
