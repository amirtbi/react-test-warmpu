import { useEffect, useState } from "react";

const fakeFetchColor = () => {
  return Promise.resolve(["red", "green", "blue"]);
};

export const LoadableColorList = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    fakeFetchColor().then((colors) => setColors(colors));
  }, []);

  if (colors.length == 0) return null;
  return (
    <>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </>
  );
};
