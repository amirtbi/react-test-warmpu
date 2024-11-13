import { useState } from "react";
import "./App.css";
import { UserForm } from "./UserForm";
import { UserLists } from "./UserLists";

function App() {
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);

  const onUserAdd = (user: { name: string; email: string }) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <div>
        <UserForm onUserAdd={onUserAdd} />
        <hr />
        <UserLists users={users} />
      </div>
    </>
  );
}

export default App;
