import { FormEvent, useState } from "react";

export const UserForm = ({
  onUserAdd,
}: {
  onUserAdd: (user: { name: string; email: string }) => void;
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onUserAdd({ name, email });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
