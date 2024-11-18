import { describe, it, expect } from "vitest";
import { ColorList } from "./ColorList";
import { render, screen } from "@testing-library/react";

describe("color list", () => {
  it("getBy, queryBy, findBy, finding 0 elements", async () => {
    render(<ColorList />);

    expect(() => screen.getByRole("textbox")).toThrow();

    expect(screen.queryByRole("textbox")).toBe(null);

    let errorThrown = false;

    try {
      await screen.findByRole("textbox");
    } catch {
      errorThrown = true;
    }

    expect(errorThrown).toBe(true);
  });

  it("getBy, queryBy, findBy, finding 1 elements", async () => {
    render(<ColorList />);

    expect(screen.getByRole("list")).toBeDefined();

    expect(screen.queryByRole("list")).toBeDefined();

    expect(await screen.findByRole("list")).toBeDefined();
  });

  it("getBy, queryBy, findBy when finding > 1 elements", async () => {
    render(<ColorList />);

    expect(() => screen.getByRole("listitem")).toThrow();

    expect(() => screen.queryByRole("listitem")).toThrow();
    let errorThrown = false;

    try {
      await screen.findByRole("listitem");
    } catch {
      errorThrown = true;
    }

    expect(errorThrown).toBe(true);
  });
});
