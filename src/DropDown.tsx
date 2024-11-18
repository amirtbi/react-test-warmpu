import { forwardRef, useState } from "react";

interface DropDownProps {
  options: { value: string; title: string }[];
}

const DropDown = forwardRef<HTMLSelectElement, DropDownProps>(
  ({ options }, ref) => {
    const [drpVal, setDrpVal] = useState("");

    return (
      <>
        <select
          ref={ref}
          value={drpVal}
          onChange={(e) => setDrpVal(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} aria-label={opt.value} value={opt.value}>
              {opt.title}
            </option>
          ))}
        </select>
      </>
    );
  }
);
export { DropDown };
