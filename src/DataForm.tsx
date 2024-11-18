import { useState } from "react";

export const DataForm = () => {
  const [email, setEmail] = useState("test@gmail.com");
  return (
    <>
      <form>
        <h3>Enter Data</h3>
        <div data-testid="image wrapper">
          <img alt="data" src="data.png" />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="email">color</label>
        <input type="text" id="color" placeholder="Red" />

        <button title="click when ready to submit">Submit</button>
      </form>
    </>
  );
};
