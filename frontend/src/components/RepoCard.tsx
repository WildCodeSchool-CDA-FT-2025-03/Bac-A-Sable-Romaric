import { Link } from "react-router-dom";
import { Repos } from "../types/repos.type";

type Props = {
  repo: Repos;
  filterType?: "created" | "updated" | "alphabetical";
};

function RepoCard({ repo }: Props) {
  return (
    <>
      <Link to={`/repos/${repo.id}`}>
        <div className="min-h-36 flex flex-col justify-between border border-slate-800 rounded-lg p-4 bg-gradient-to-b from-slate-900 to-stone-950 transition-transform duration-200 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold">{repo.name}</h2>

            <span
              className={`text-xs ${
                repo.isPrivate ? "text-orange-600" : "text-green-600"
              } border rounded-md px-2 py-1`}
            >
              {repo.isPrivate ? "Private" : "Public"}
            </span>
          </div>
          <p className="text-slate-500 italic">{repo.description}</p>

          <ul className="flex flex-wrap gap-2 pt-4">
            {repo.languages.map((language) => (
              <li className="text-sm" key={language.node.name}>
                {language.node.name}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </>
  );
}

export default RepoCard;
