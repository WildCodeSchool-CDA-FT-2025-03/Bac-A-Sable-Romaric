import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import LimitFilter from "../components/LimitFilter";
import Pagination from "../components/Pagination";
import RepoCard from "../components/RepoCard";

import useRepos from "../services/useRepos";

function Home() {
  const { data, getAllRepos } = useRepos();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const limit = searchParams.get("limit") || "10";
    const page = searchParams.get("page") || "1";

    getAllRepos(limit, page);
  }, [searchParams, getAllRepos]);

  useEffect(() => {
    const filtered = data.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: newPage.toString(),
    });
  };

  return (
    <>
      <HeroBanner searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="container mx-auto px-4 w-full flex justify-between items-center">
        <Link
          to="/repos/create"
          className="bg-blue-900 hover:bg-blue-600 border border-blue-600 text-white text-lg font-bold rounded-md px-12 py-1 transition-transform duration-200 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]"
        >
          +
        </Link>

        <LimitFilter limit={limit.toString()} setSearchParams={setSearchParams} />
      </div>

      <section className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {filteredData.length > 0 ? (
          filteredData.map((repo, index) => <RepoCard repo={repo} key={index} />)
        ) : (
          <span className="col-span-full text-center text-gray-500 py-8">
            Aucun repo ne correspond à votre recherche
          </span>
        )}
      </section>

      {filteredData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          limit={limit}
          dataLength={filteredData.length}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default Home;
