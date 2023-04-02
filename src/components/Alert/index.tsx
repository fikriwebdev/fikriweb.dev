import clsm from "@/utils/clsm";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { BsCheck, BsExclamation, BsInfo } from "react-icons/bs";

const alertVariants = cva(
  "flex items-center gap-4 p-4 font-light rounded-md flex-1 [&>span]:rounded-full",
  {
    variants: {
      status: {
        info: "bg-sky-400 [&>span]:bg-sky-400/80 [&>span]:p-1 border-sky-500 border-0",
        success:
          "bg-green-400  [&>span]:bg-green-400/80 [&>span]:p-1 border-green-500 border-0",
        error:
          "bg-red-400  [&>span]:bg-red-400/80 [&>span]:p-1 border-red-500 border-0",
        warning:
          "bg-yellow-400  [&>span]:bg-yellow-400/80 [&>span]:p-1 border-yellow-500 border-0",
      },
      variant: {
        subtle:
          "bg-opacity-100 dark:bg-opacity-20 dark:text-gray-50 text-gray-800 ",
        solid:
          "bg-opacity-100 [&>span]:bg-gray-900 text-gray-50 dark:text-gray-800 [&>span]:p-1 [&>span>svg]:text-white ",
        "left-accent":
          "bg-opacity-100 dark:bg-opacity-20 border-l-4 dark:text-gray-50 text-gray-800 ",
        "top-accent":
          "bg-opacity-100 dark:bg-opacity-20 border-t-4 dark:text-gray-50 text-gray-800 ",
      },
    },

    defaultVariants: {
      status: "info",
      variant: "subtle",
    },
  }
);

export interface AlertProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof alertVariants> {}

const Icon = ({
  status,
}: {
  status: VariantProps<typeof alertVariants>["status"];
}) => {
  switch (status) {
    case "info":
      return <BsInfo />;
    case "success":
      return <BsCheck />;
    case "error":
      return <BsExclamation />;
    case "warning":
      return <BsExclamation />;
    default:
      return <BsInfo />;
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { className, status, children, variant, ...rest } = props;
  return (
    <div
      ref={ref}
      role="alert"
      data-status={status}
      className={clsm(
        alertVariants({
          className,
          status,
          variant,
        })
      )}
      {...rest}
    >
      <span data-status={status}>
        <Icon status={status} />
      </span>
      {children}
    </div>
  );
});

Alert.displayName = "Alert";

export default Alert;
