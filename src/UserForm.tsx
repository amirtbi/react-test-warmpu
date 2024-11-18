import { FormEvent, useRef, useState } from "react";
import { DropDown } from "./DropDown";

export const UserForm = ({
  onUserAdd,
}: {
  onUserAdd: (user: {
    name: string;
    email: string;
    method: string | undefined;
  }) => void;
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dropDownRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onUserAdd({ name, email, method: dropDownRef.current?.value });
    setEmail("");
    setName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Method</label>
          <DropDown
            ref={dropDownRef}
            options={[
              { value: "", title: "all" },
              { value: "get", title: "get" },
              { value: "post", title: "post" },
            ]}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add User</button>
      </form>
    </>
  );
};
