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
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    const limit = searchParams.get("limit") || "10";
    const page = searchParams.get("page") || "1";
    getAllRepos(limit, page);
  }, [searchParams, getAllRepos]);

  useEffect(() => {
    let filtered = [...data];

    // filter by name
    if (searchTerm) {
      filtered = filtered.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // filter by language
    if (selectedLanguage !== "all") {
      filtered = filtered.filter((repo) =>
        repo.languages.some((lang) => lang.node.name === selectedLanguage)
      );
    }

    // filter by date
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "createdAt":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "updatedAt":
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredData(filtered);
  }, [searchTerm, data, selectedLanguage, sortBy]);

  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: newPage.toString(),
    });
  };

  const allLanguages = Array.from(
    new Set(data.flatMap((repo) => repo.languages.map((lang) => lang.node.name)))
  );

  return (
    <>
      <HeroBanner searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="container mx-auto px-4 w-full flex flex-wrap gap-4 justify-between items-center">
        <Link
          to="/repos/create"
          className="bg-blue-900 hover:bg-blue-600 border border-blue-600 text-white text-lg font-bold rounded-md px-12 py-1 transition-transform duration-200 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]"
        >
          +
        </Link>

        <div className="flex flex-wrap gap-4">
          <LimitFilter limit={limit.toString()} setSearchParams={setSearchParams} />

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-md px-3 py-1"
          >
            <option value="all">Tous les langages</option>
            {allLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-md px-3 py-1"
          >
            <option value="createdAt">Date de création</option>
            <option value="updatedAt">Date de mise à jour</option>
            <option value="name">Ordre alphabétique</option>
          </select>
        </div>
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
