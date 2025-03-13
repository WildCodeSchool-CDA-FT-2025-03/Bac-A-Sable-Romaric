import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GithubIcon } from "../components/Icons";

import RepoCard from "../components/RepoCard";
import Pagination from "../components/Pagination";
import useRepos from "../services/useRepos";

function Home() {
  const { data, getAllRepos } = useRepos();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const limit = searchParams.get("limit") || "10";
    const page = searchParams.get("page") || "1";

    getAllRepos(limit, page);
  }, [searchParams, getAllRepos]);

  // Gestion de la pagination
  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      limit: searchParams.get("limit") || "10",
      page: newPage.toString(),
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 flex flex-col items-center justify-start">
        <div className="w-screen h-96 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-stone-950">
          <GithubIcon className="w-32 h-32" />

          <h1 className="text-3xl font-bold">GitHub Repositories</h1>
        </div>

        <div className="w-full mb-12 flex justify-between items-center">
          <Link
            to="/repos/create"
            className="bg-blue-900 hover:bg-blue-600 border border-blue-600 text-white text-lg font-bold rounded-md  px-12 py-1 transition-transform duration-200 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]"
          >
            +
          </Link>

          <label className="flex gap-4 items-center">
            Nombre de repos affichés
            <select
              className="bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
              name="limit"
              value={searchParams.get("limit") || "10"}
              onChange={(e) =>
                setSearchParams({
                  limit: e.target.value,
                  page: "1",
                })
              }
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </label>
        </div>

        <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {data.map((repo, index) => (
            <RepoCard repo={repo} key={index} />
          ))}
        </section>

        {/* Composant de pagination */}
        <Pagination
          currentPage={currentPage}
          limit={limit}
          dataLength={data.length}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Home;
