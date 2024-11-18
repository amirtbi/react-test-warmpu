import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DataForm } from "./DataForm";
describe("Test for DataForm", () => {
  it("Should select different elements", () => {
    render(<DataForm />);

    const elements = [
      screen.getByRole("button"),
      screen.getByText(/enter data/i),

      screen.getByLabelText(/email/i),
      screen.getAllByPlaceholderText("Red"),
      screen.getByDisplayValue("test@gmail.com"),
      screen.getByAltText("data"),
      screen.getByTitle(/ready to submit/i),

      screen.getByTestId("image wrapper"),
    ];

    for (const element of elements) {
      expect(element).toBeDefined();
    }
  });
});
