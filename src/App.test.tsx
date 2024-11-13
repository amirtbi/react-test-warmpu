import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import user from "@testing-library/user-event";
import App from "./App";

it("Should have userForm and userList component", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await user.click(nameInput);
  await user.keyboard("amir");
  await user.click(emailInput);
  await user.keyboard("amir@test.com");

  const button = screen.getByRole("button");

  await user.click(button);

  const name = screen.getByRole("cell", { name: "amir" });
  const email = screen.getByRole("cell", { name: "amir@test.com" });

  expect(name).toBeDefined();
  expect(email).toBeDefined();
});
