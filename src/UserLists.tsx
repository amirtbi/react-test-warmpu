export const UserLists = ({
  users,
}: {
  users: { name: string; email: string }[];
}) => {
  const renderedUsers = () => {
    return users.map((user) => (
      <tr key={user.email}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    ));
  };
  return (
    <>
      <h1>list of users</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>{renderedUsers()}</tbody>
      </table>
    </>
  );
};
