import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RoleTest from "./Roles";

describe("Testing roles", () => {
  // it("Find no roles in elements", async () => {
  //   render(<RoleTest />);

  //   const roleList = [
  //     "link",
  //     "button",
  //     "contentinfo",
  //     "heading",
  //     "banner",
  //     "img",
  //     "checkbox",
  //     "spinbutton",
  //     "radio",
  //     "textbox",
  //     "listitem",
  //     "list",
  //   ];
  //   for (const role of roleList) {
  //     const el = screen.getByRole(role);
  //     expect(el).toBeDefined();
  //   }
  // });

  it("Should contains inputs", () => {
    render(<RoleTest />);

    const emailInput = screen.getByRole("textbox", { name: "Email" });
    const usernameInput = screen.getByRole("textbox", { name: "username" });
    const nameInput = screen.getByRole("textbox", { name: "name" });

    expect(emailInput).toBeDefined();
    expect(usernameInput).toBeDefined();
    expect(nameInput).toBeDefined();
  });
});
