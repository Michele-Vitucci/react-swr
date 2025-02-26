import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function GithubUser1({ username }) {
  if (!username) {
    return <p>Per favore, fornisci un nome utente.</p>;
  }

  const {data: userData,error,mutate,} = useSWR( `https://api.github.com/users/${username}`, fetcher);

  if (error) return <p>Errore nel caricamento</p>;
  if (!userData) return <p>Caricamento...</p>;

  return (
    <div>
      <h3>{userData.name || "Nome non disponibile"}</h3>
      <p>{userData.login}</p>
      <img src={userData.avatar_url} alt="avatar" width="100" />
      <h3>{userData.public_repos || "repositery non disponibile"}</h3>
      <button onClick={() => mutate()}>aggiorna</button>
    </div>
  );
}

export default GithubUser1;
