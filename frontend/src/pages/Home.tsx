import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import RepoCard from "../components/RepoCard";
import useRepos from "../services/useRepos";

function Home() {
  const { data, getAllRepos } = useRepos();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const limit = searchParams.get("limit") || "10";
    getAllRepos(limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <h1 className="text-2xl font-bold">Repositories</h1>
      <label className="flex gap-2 items-center">
        Nombre de repos affichés
        <select
          className="bg-stone-800 text-white rounded-md border border-stone-700 p-2"
          name="limit"
          value={searchParams.get("limit") || "10"}
          onChange={(e) => setSearchParams({ limit: e.target.value })}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {data.map((repo, index) => (
          <RepoCard repo={repo} key={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
