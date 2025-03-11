import RepoCard from "../components/RepoCard";
import useRepos from "../services/useRepos";

function Home() {
  const { data } = useRepos();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
      {data.map((repo, index) => (
        <RepoCard repo={repo} key={index} />
      ))}
    </div>
  );
}

export default Home;
