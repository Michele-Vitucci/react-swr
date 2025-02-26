import { useState } from "react";
import GithubUser from "./Githubuser";

function GithubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  function handleclick() {
    setUsers([...users, username])

    setUsername("")

  }

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleclick}>Cerca</button>
      {users.map((user, i) => (
        <GithubUser key={i} username={user} />
      ))}
    </div>
  );
}

export default GithubUsers;
