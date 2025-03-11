import { Link } from "react-router-dom";
import { Repos } from "../types/repos.type";

type Props = {
  repo: Repos;
};

function RepoCard({ repo }: Props) {
  return (
    <>
      <Link to={`/repo/${repo.id}`}>
        <div
          className="border border-stone-700 rounded-lg p-4 bg-gradient-to-t from-stone-800 to-stone-900 
     transition-transform duration-300 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]"
        >
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold">{repo.name}</h2>
            <span className={`text-sm ${repo.isPrivate ? "text-orange-600" : "text-green-600"}`}>
              {repo.isPrivate ? "Private" : "Public"}
            </span>
          </div>
          <p className="">{repo.description}</p>
          <div className="flex flex-wrap gap-2 pt-4">
            {repo.languages.map((language) => (
              <span className="text-sm" key={language.node.name}>
                {language.node.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}

export default RepoCard;
