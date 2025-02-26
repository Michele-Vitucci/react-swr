import { useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUserComponent() {
  const [username, setUsername] = useState("");
  const { user, loading, error, fetchUser } = useGithubUser(username);

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter GitHub username" 
      />
      <button onClick={fetchUser}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <h3>{user.name || "No name available"}</h3>
          <p>{user.login}</p>
          <img src={user.avatar_url} alt="avatar" width="100" />
        </div>
      )}
    </div>
  );
}
