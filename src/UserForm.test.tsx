import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserForm } from "./UserForm";

describe("testing form", () => {
  it("shows two inputs and a button", async () => {
    render(
      <UserForm
        onUserAdd={(user: { name: string; email: string }) => console.log(user)}
      />
    );

    const button = screen.getByRole("button");
    const inputs = screen.getAllByRole("textbox");

    expect(button).toBeDefined();
    expect(inputs).toHaveLength(2);
  });

  it("Should Calls onUserAdd when the form is submitted", async () => {
    const mock = vi.fn();

    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const selectElement = screen.getByRole("combobox");
    const getOptionEl = screen.getByRole("option", {
      name: "get",
    }) as HTMLOptionElement;

    // simulate user typing on email and name input

    await user.selectOptions(selectElement, getOptionEl.value);

    await user.click(nameInput);
    await user.keyboard("amir");

    await user.click(emailInput);
    await user.keyboard("amir@gmail.com");

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith({
      name: "amir",
      email: "amir@gmail.com",
      method: "get",
    });
  });

  it("Should form fields be empty after form submitting", async () => {
    const mock = vi.fn();
    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    }) as HTMLInputElement;

    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    }) as HTMLInputElement;

    const button = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard("amir");

    await user.click(emailInput);
    await user.keyboard("amir@test.com");

    await user.click(button);

    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
  });
});
