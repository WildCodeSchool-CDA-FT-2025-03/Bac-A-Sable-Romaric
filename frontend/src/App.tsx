import useRepos from "./services/useRepos";
import RepoCard from "./components/RepoCard";

import "./App.css";

function App() {
  const { data } = useRepos();

  return (
    <>
      <h1>Bac à sable de Romaric</h1>
      {data.map((repo, index) => (
        <RepoCard repo={repo} cls={index % 2 === 0 ? "red" : "blue"}>
          <span>Children Element</span>
        </RepoCard>
      ))}
    </>
  );
}

export default App;
