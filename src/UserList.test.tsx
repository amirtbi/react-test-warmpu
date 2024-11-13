import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserLists } from "./UserLists";

describe("userlist component test", () => {
  it("Should render one row per users", async () => {
    const users = [
      { name: "amir", email: "amir@gmail.com" },
      { name: "hosein", email: "test@test.com" },
    ];
    render(<UserLists users={users} />);

    // screen.logTestingPlaygroundURL();

    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    expect(rows).toHaveLength(2);
  });
});
