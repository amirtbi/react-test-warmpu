import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserLists } from "./UserLists";

function renderComponent() {
  const users = [
    { name: "amir", email: "amir@gmail.com" },
    { name: "hosein", email: "test@test.com" },
  ];
  render(<UserLists users={users} />);

  return { users };
}

describe("userlist component test", () => {
  it("Should render one row per users", async () => {
    renderComponent();
    // screen.logTestingPlaygroundURL();

    // Following approach does not have container
    // const rows = container.querySelectorAll("tbody tr");
    // User instead the within
    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(2);
  });

  it("render the email and name of each user", () => {
    const { users } = renderComponent();
    for (const user of users) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });
      expect(name).toBeDefined();
      expect(email).toBeDefined();
    }
  });
});
