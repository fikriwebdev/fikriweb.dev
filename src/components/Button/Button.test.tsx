/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("should call onClick when clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
