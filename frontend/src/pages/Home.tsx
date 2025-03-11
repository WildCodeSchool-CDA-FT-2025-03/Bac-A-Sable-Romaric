import RepoCard from "../components/RepoCard";
import useRepos from "../services/useRepos";

function Home() {
  const { data } = useRepos();

  return (
    <>
      <h1>Bac à sable de Romaric</h1>
      {data.map((repo, index) => (
        <RepoCard repo={repo} key={index} />
      ))}
    </>
  );
}

export default Home;
