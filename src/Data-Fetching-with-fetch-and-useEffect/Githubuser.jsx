import { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [username]);

  if (!userData) return <p> Caricamento...</p>;

  return (
    <div>
      <h3>{userData.name || "Nome non disponibile"}</h3>
      <p>{userData.login}</p>
      <img src={userData.avatar_url} alt="avatar" width="100" />
    </div>
  );
}

export default GithubUser;
