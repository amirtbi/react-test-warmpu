import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LoadableColorList } from "./LoadableColorList";

describe("test for async loading", () => {
  it("Should find elements after fetching data", async () => {
    render(<LoadableColorList />);

    const elements = await screen.findAllByRole("listitem");

    expect(elements).toHaveLength(3);
  });
});
