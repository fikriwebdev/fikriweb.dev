import React, { PropsWithChildren } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import clsm from "@/utils/clsm";
import { AiOutlineClose } from "react-icons/ai";
import {
  DrawerContextProvider,
  DrawerContextValues,
  useDrawerContext,
} from "./use-drawer";
import { cva } from "class-variance-authority";

const Drawer = ({
  children,
  ...value
}: DrawerContextValues & PropsWithChildren) => {
  return (
    <DrawerContextProvider {...value}>
      <RadixDialog.Root>{children}</RadixDialog.Root>
    </DrawerContextProvider>
  );
};

const DrawerTrigger = React.forwardRef<
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

const DrawerPortal: React.FC<RadixDialog.PortalProps> = (props) => {
  const { className, ...rest } = props;

  return <RadixDialog.Portal className={clsm(className)} {...rest} />;
};

const DrawerOverlay = React.forwardRef<
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

const drawerContentVariants = cva(
  "bg-white dark:bg-gray-800  fixed  z-[5000]  p-4    shadow-lg dark:shadow-2xl focus:outline-none ",
  {
    variants: {
      position: {
        left: "data-[state=open]:animate-slideLeftShow data-[state=closed]:animate-slideLeftHide bottom-0 top-0 left-0 w-[90vw] max-w-[300px] h-screen",
        right:
          "data-[state=open]:animate-slideRightShow data-[state=closed]:animate-slideRightHide bottom-0 top-0 right-0 w-[90vw] max-w-[300px] h-screen",
        top: "data-[state=open]:animate-slideTopShow data-[state=closed]:animate-slideTopHide w-screen h-1/3 top-0 left-0 right-0",
        bottom:
          "data-[state=open]:animate-slideBottomShow data-[state=closed]:animate-slideBottomHide w-screen h-1/3 bottom-0 left-0 right-0",
      },
    },
    defaultVariants: {
      position: "left",
    },
  }
);

const DrawerContent = React.forwardRef<
  HTMLDivElement,
  RadixDialog.DialogContentProps
>((props, ref) => {
  const { className, children, ...rest } = props;

  const { position } = useDrawerContext();

  return (
    <RadixDialog.Content
      ref={ref}
      className={clsm(
        drawerContentVariants({
          className,
          position,
        })
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

const DrawerTitle = React.forwardRef<
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

const DrawerDescription = React.forwardRef<
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

const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  RadixDialog.DialogCloseProps
>((props, ref) => {
  const { className, ...rest } = props;

  return <RadixDialog.Close ref={ref} className={clsm(className)} {...rest} />;
});

DrawerTrigger.displayName = RadixDialog.DialogTrigger.displayName;
DrawerOverlay.displayName = RadixDialog.DialogOverlay.displayName;
DrawerContent.displayName = RadixDialog.DialogContent.displayName;
DrawerTitle.displayName = RadixDialog.DialogTitle.displayName;
DrawerDescription.displayName = RadixDialog.DialogDescription.displayName;
DrawerClose.displayName = RadixDialog.DialogClose.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
};
