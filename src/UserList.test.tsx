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

  it("render the email and name of each user", () => {
    const users = [
      { name: "amir", email: "amir@gmail.com" },
      { name: "hosein", email: "test@test.com" },
    ];
    render(<UserLists users={users} />);

    for (const user of users) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });
      expect(name).toBeDefined();
      expect(email).toBeDefined();
    }
  });
});
