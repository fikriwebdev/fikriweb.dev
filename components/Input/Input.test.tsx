/* eslint-disable no-undef */
import Input from "@/components/Input";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
    it("renders an input field", () => {
        render(<Input />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("applies the default variant correctly", () => {
        render(<Input />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveClass("border");
        expect(inputElement).toHaveClass("border-gray-400");
        expect(inputElement).toHaveClass("rounded-md");
    });

    it("applies the 'filled' variant correctly", () => {
        render(<Input variant="filled" />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).not.toHaveClass("border");
        expect(inputElement).toHaveClass("bg-gray-100");
        expect(inputElement).toHaveClass("rounded-md");
    });

    it("applies the 'flushed' variant correctly", () => {
        render(<Input variant="flushed" />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).not.toHaveClass("border");
        expect(inputElement).not.toHaveClass("bg-gray-100");
        expect(inputElement).not.toHaveClass("rounded-md");
        expect(inputElement).toHaveClass("border-b-2");
        expect(inputElement).toHaveClass("focus:border-blue-400");
        expect(inputElement).toHaveClass("focus:outline-none");
        expect(inputElement).toHaveClass("focus:ring-0");
    });

    it("applies the 'sm' size variant correctly", () => {
        render(<Input size="sm" />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveClass("h-8");
        expect(inputElement).toHaveClass("text-sm");
    });

    it("applies the 'md' size variant correctly", () => {
        render(<Input size="md" />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveClass("h-10");
        expect(inputElement).not.toHaveClass("text-sm");
    });

    it("applies the 'lg' size variant correctly", () => {
        render(<Input size="lg" />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveClass("h-12");
        expect(inputElement).not.toHaveClass("text-sm");
    });

    it("disables input when disabled prop is passed", () => {
        render(<Input disabled />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toBeDisabled();
        expect(inputElement).toHaveClass("disabled:opacity-50");
        expect(inputElement).toHaveClass("disabled:cursor-not-allowed");
    });

    it("does not disable input when disabled prop is not passed", () => {
        render(<Input />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).not.toBeDisabled();
        expect(inputElement).not.toHaveClass("opacity-70");
        expect(inputElement).not.toHaveClass("cursor-not-allowed");
    });

    it("applies the correct classes when in dark mode", () => {
        render(<Input className="dark" />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveClass("dark:focus:ring-offset-gray-900");
        expect(inputElement).toHaveClass("dark:disabled:opacity-50");
    });

    it("applies the correct classes when in dark mode", () => {
        render(<Input className="dark" />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveClass("dark:focus:ring-offset-gray-900");
        expect(inputElement).toHaveClass("dark:disabled:opacity-50");
    });
});
