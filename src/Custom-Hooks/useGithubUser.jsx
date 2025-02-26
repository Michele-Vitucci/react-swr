import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUser() {
    if (!username) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, [username]);

  return { user, loading, error, fetchUser };
}
