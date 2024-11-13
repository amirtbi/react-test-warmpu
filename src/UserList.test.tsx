import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserLists } from "./UserLists";

describe("userlist component test", () => {
  it("Should render one row per users", async () => {
    const users = [
      { name: "amir", email: "amir@gmail.com" },
      { name: "hosein", email: "test@test.com" },
    ];
    const { container } = render(<UserLists users={users} />);

    // screen.logTestingPlaygroundURL();

    const rows = container.querySelectorAll("tbody tr");
    expect(rows).toHaveLength(2);
  });
});
