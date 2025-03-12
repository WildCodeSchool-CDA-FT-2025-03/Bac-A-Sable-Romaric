import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GithubIcon } from "../components/Icons";

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
      <GithubIcon className="w-32 h-32" />

      <h1 className="text-2xl font-bold">GitHub Repositories</h1>

      <label className="flex gap-4 items-center">
        Nombre de repos affichés
        <select
          className="bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
          name="limit"
          value={searchParams.get("limit") || "10"}
          onChange={(e) => setSearchParams({ limit: e.target.value })}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>

      <Link
        to="/repos/create"
        className="bg-gradient-to-b from-slate-900 to-stone-950 text-white rounded-md border border-stone-700 px-2 py-1 transition-transform duration-200 hover:scale-103 hover:bg-gradient-to-t hover:shadow-[0px_4px_20px_rgba(255,255,255,0.2)]"
      >
        +
      </Link>

      <section className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {data.map((repo, index) => (
          <RepoCard repo={repo} key={index} />
        ))}
      </section>
    </>
  );
}

export default Home;
