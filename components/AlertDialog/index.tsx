"use client";

import clsm from "@/utils/clsm";
import * as RadixAlert from "@radix-ui/react-alert-dialog";
import React from "react";

const AlertDialog = RadixAlert.Root;

const AlertDialogTrigger = React.forwardRef<
    HTMLButtonElement,
    Omit<RadixAlert.AlertDialogTriggerProps, "asChild">
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <RadixAlert.Trigger
            asChild
            ref={ref}
            className={clsm(className)}
            {...rest}
        >
            {children}
        </RadixAlert.Trigger>
    );
});

const AlertDialogPortal: React.FC<
    RadixAlert.AlertDialogPortalProps
> = props => {
    const { className, ...rest } = props;

    return <RadixAlert.Portal className={clsm(className)} {...rest} />;
};

const AlertDialogOverlay = React.forwardRef<
    HTMLDivElement,
    RadixAlert.AlertDialogOverlayProps
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <RadixAlert.Overlay
            ref={ref}
            className={clsm(
                "fixed inset-0 bg-black/30 data-[state=open]:animate-alertOverlayShow data-[state=closed]:animate-alertOverlayHide",
                className
            )}
            {...rest}
        />
    );
});

const AlertDialogContent = React.forwardRef<
    HTMLDivElement,
    RadixAlert.AlertDialogContentProps
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <RadixAlert.Content
            ref={ref}
            className={clsm(
                "bg-white dark:bg-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed p-4 rounded-md w-[90vw] max-w-[500px] max-h-[85vh] shadow-lg dark:shadow-2xl focus:outline-none data-[state=open]:animate-alertContentShow data-[state=closed]:animate-alertContentHide",
                className
            )}
            {...rest}
        />
    );
});

const AlertDialogTitle = React.forwardRef<
    HTMLDivElement,
    RadixAlert.AlertDialogTitleProps
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <RadixAlert.Title
            ref={ref}
            className={clsm(
                "text-lg font-medium dark:text-white text-gray-900",
                className
            )}
            {...rest}
        />
    );
});

const AlertDialogDescription = React.forwardRef<
    HTMLDivElement,
    RadixAlert.AlertDialogDescriptionProps
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <RadixAlert.Description
            ref={ref}
            className={clsm(
                "my-4 leading-6 text-gray-500 dark:text-gray-300 text-sm",
                className
            )}
            {...rest}
        />
    );
});

const AlertDialogCancel = React.forwardRef<
    HTMLButtonElement,
    Omit<RadixAlert.AlertDialogCancelProps, "asChild">
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <RadixAlert.Cancel
            asChild
            ref={ref}
            className={clsm(className)}
            {...rest}
        />
    );
});

const AlertDialogAction = React.forwardRef<
    HTMLButtonElement,
    Omit<RadixAlert.AlertDialogActionProps, "asChild">
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <RadixAlert.Action
            asChild
            ref={ref}
            className={clsm(className)}
            {...rest}
        />
    );
});

AlertDialogTrigger.displayName = RadixAlert.Trigger.displayName;
AlertDialogPortal.displayName = RadixAlert.AlertDialogPortal.displayName;
AlertDialogOverlay.displayName = RadixAlert.AlertDialogOverlay.displayName;
AlertDialogContent.displayName = RadixAlert.AlertDialogContent.displayName;
AlertDialogTitle.displayName = RadixAlert.AlertDialogTitle.displayName;
AlertDialogDescription.displayName =
    RadixAlert.AlertDialogDescription.displayName;
AlertDialogCancel.displayName = RadixAlert.AlertDialogCancel.displayName;
AlertDialogAction.displayName = RadixAlert.AlertDialogAction.displayName;

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
};
