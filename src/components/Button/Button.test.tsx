/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders the default variant correctly", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole("button");

    expect(button).toHaveClass("bg-emerald-500 text-white");
  });

  it("renders the outline variant correctly", () => {
    const { getByRole } = render(<Button variant="outline">Click me</Button>);
    const button = getByRole("button");

    expect(button).toHaveClass(
      "border border-gray-400 hover:bg-gray-400 hover:bg-opacity-30 text-black dark:text-white"
    );
  });

  it("renders the ghost variant correctly", () => {
    const { getByRole } = render(<Button variant="ghost">Click me</Button>);
    const button = getByRole("button");

    expect(button).toHaveClass(
      "bg-transparent hover:bg-gray-500 text-black dark:text-white"
    );
  });

  it("renders the link variant correctly", () => {
    const { getByRole } = render(<Button variant="link">Click me</Button>);
    const button = getByRole("button");

    expect(button).toHaveClass(
      "bg-transparent underline underline-offset-4 text-black dark:text-white"
    );
  });

  it("disables the button when isLoading is true", () => {
    const { getByRole } = render(<Button isLoading>Click me</Button>);
    const button = getByRole("button");
    const svg = getByRole("progressbar");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
    expect(button).toContainElement(svg);
  });

  it("disables the button when disabled is true", () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    const button = getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("calls onClick when the button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("does not call onClick when the button is disabled", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button disabled onClick={onClickMock}>
        Click me
      </Button>
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("does not call onClick when the button is loading", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button isLoading onClick={onClickMock}>
        Click me
      </Button>
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
