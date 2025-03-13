import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import LimitFilter from "../components/LimitFilter";
import Pagination from "../components/Pagination";
import RepoCard from "../components/RepoCard";

import useRepos from "../services/useRepos";

function Home() {
  const { data, getAllRepos } = useRepos();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const limit = searchParams.get("limit") || "10";
    const page = searchParams.get("page") || "1";

    getAllRepos(limit, page);
  }, [searchParams, getAllRepos]);

  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: newPage.toString(),
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 flex flex-col items-center justify-start">
        <HeroBanner />

        <div className="w-full mb-12 flex justify-between items-center">
          <Link
            to="/repos/create"
            className="bg-blue-900 hover:bg-blue-600 border border-blue-600 text-white text-lg font-bold rounded-md  px-12 py-1 transition-transform duration-200 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]"
          >
            +
          </Link>

          <LimitFilter limit={limit.toString()} setSearchParams={setSearchParams} />
        </div>

        <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {data.map((repo, index) => (
            <RepoCard repo={repo} key={index} />
          ))}
        </section>

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
