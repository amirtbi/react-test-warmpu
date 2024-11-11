import { describe, it, expect } from "vitest";
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
    const argList = [];
    const callback = (...args: any) => {
      console.log("Args", args);
      argList.push(args);
    };

    render(<UserForm onUserAdd={callback} />);
    const [nameInput, emailInput] = screen.getAllByRole("textbox");

    // simulate user typing on email and name input

    await user.click(nameInput);
    await user.keyboard("amir");

    await user.click(emailInput);
    await user.keyboard("amir@gmail.com");

    const button = screen.getByRole("button");

    await user.click(button);

    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({ name: "amir", email: "amir@gmail.com" });
  });
});
