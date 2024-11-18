import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DropDown } from "./DropDown";
import user from "@testing-library/user-event";

describe("Test for dropdown", () => {
  it("Shoudl render dropdown with 4 subcontents", () => {
    const dropDownContents = [
      { title: "get", value: "get" },
      { title: "post", value: "post" },
    ];
    render(<DropDown options={dropDownContents} />);

    const optionsEl = screen.getAllByRole("option");

    expect(optionsEl).toHaveLength(2);
  });

  it("Should render proper the dropwdown item after opening dropdown ", async () => {
    const dropDownContents = [
      { title: "همه", value: "" },
      { title: "get", value: "get" },
      { title: "post", value: "post" },
    ];

    render(<DropDown options={dropDownContents} />);

    const selectEl = screen.getByRole("combobox") as HTMLSelectElement;

    expect(selectEl.value).toBe("");

    await user.click(selectEl);
    const getOptionEl = await screen.findByRole("option", { name: "get" });
    await user.click(getOptionEl);

    expect(screen.getByText("get")).toBeDefined();
  });

  // it("Should select input has the value of chosen item from dropdown", async () => {
  //   const dropDownContents = [
  //     { title: "همه", value: "" },
  //     { title: "get", value: "get" },
  //     { title: "post", value: "post" },
  //   ];

  //   render(<DropDown options={dropDownContents} />);

  //   const selectElement = screen.getByRole("combobox") as HTMLSelectElement;

  //   fireEvent.change(selectElement, { target: { value: "get" } });

  //   expect(selectElement.value).toBe("get");
  // });

  it("Should select input has the value of chosen item from dropdown", async () => {
    const dropDownContents = [
      { title: "همه", value: "" },
      { title: "get", value: "get" },
      { title: "post", value: "post" },
      { title: "post", value: "patch" },
    ];

    render(<DropDown options={dropDownContents} />);

    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;

    await user.click(selectElement);
    const optionEl = screen.getByRole("option", {
      name: "get",
    }) as HTMLOptionElement;
    await user.selectOptions(selectElement, optionEl.value);

    expect(selectElement.value).toBe("get");
  });
});
