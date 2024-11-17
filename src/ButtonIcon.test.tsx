import { describe, expect, it } from "vitest";
import { ButtonIcon } from "./ButtonIcon";
import { render, screen } from "@testing-library/react";

describe("Testing button icon", () => {
  it("find elements based on labels", () => {
    render(<ButtonIcon />);

    const signInButton = screen.getByRole("button", { name: /sign in/i });
    const signOutButton = screen.getByRole("button", { name: /sign out/i });

    expect(signInButton).toBeDefined();
    expect(signOutButton).toBeDefined();
  });
});
