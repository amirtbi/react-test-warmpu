export const UserLists = ({
  users,
}: {
  users: { name: string; email: string; method: string | undefined }[];
}) => {
  const renderedUsers = () => {
    return users.map((user) => (
      <tr key={user.email}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.method}</td>
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
            <td>Method</td>
          </tr>
        </thead>
        <tbody data-testid="users">{renderedUsers()}</tbody>
      </table>
    </>
  );
};
