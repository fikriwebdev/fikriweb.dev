/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import Alert, { AlertProps } from "./index";

const getColor = (status: AlertProps["status"]) => {
    switch (status) {
        case "info":
            return "sky";
        case "error":
            return "red";
        case "success":
            return "green";
        case "warning":
            return "yellow";
        default:
            return "sky";
    }
};

describe("Alert component", () => {
    test.each<AlertProps>([
        { status: "error", variant: "subtle" },
        { status: "error", variant: "solid" },
        { status: "error", variant: "left-accent" },
        { status: "error", variant: "top-accent" },
        { status: "success", variant: "subtle" },
        { status: "success", variant: "solid" },
        { status: "success", variant: "left-accent" },
        { status: "success", variant: "top-accent" },
        { status: "info", variant: "subtle" },
        { status: "info", variant: "solid" },
        { status: "info", variant: "left-accent" },
        { status: "info", variant: "top-accent" },
        { status: "warning", variant: "subtle" },
        { status: "warning", variant: "solid" },
        { status: "warning", variant: "left-accent" },
        { status: "warning", variant: "top-accent" },
    ])(
        "renders with %s status and %s variant classes",
        ({ status, variant }) => {
            const { getByRole } = render(
                <Alert status={status} variant={variant}>
                    {status} message
                </Alert>
            );

            const alert = getByRole("alert");

            const baseClass =
                "flex items-center gap-4 p-4  font-light rounded-md flex-1 [&>span]:rounded-full";
            const color = getColor(status);
            const textClass =
                variant === "solid"
                    ? "dark:text-gray-800 text-gray-50"
                    : "dark:text-gray-50 text-gray-800 ";
            const statusClass = `bg-${color}-400`;
            const variantClass =
                variant === "left-accent" || variant === "top-accent"
                    ? `border-${variant === "left-accent" ? "l" : "t"}-4`
                    : "";
            const expectedClasses = [
                baseClass,
                statusClass,
                textClass,
                variant === "solid"
                    ? "bg-opacity-100"
                    : "bg-opacity-100 dark:bg-opacity-20",
                variantClass,
            ];
            expect(alert).toHaveClass(...expectedClasses);
        }
    );

    test.each<[AlertProps["status"], string]>([
        ["error", "Error message"],
        ["success", "Success message"],
        ["info", "Info message"],
        ["warning", "Warning message"],
    ])("renders the %s message", (status, message) => {
        const { getByText } = render(
            <Alert status={status} variant="subtle">
                {message}
            </Alert>
        );
        expect(getByText(message)).toBeInTheDocument();
    });
});
