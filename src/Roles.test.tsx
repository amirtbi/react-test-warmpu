import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RoleTest from "./Roles";

describe("Testing roles", () => {
  it("Find no roles in elements", async () => {
    render(<RoleTest />);

    const roleList = [
      "link",
      "button",
      "contentinfo",
      "heading",
      "banner",
      "img",
      "checkbox",
      "spinbutton",
      "radio",
      "textbox",
      "listitem",
      "list",
    ];
    for (const role of roleList) {
      const el = screen.getByRole(role);
      expect(el).toBeDefined();
    }
  });
});
