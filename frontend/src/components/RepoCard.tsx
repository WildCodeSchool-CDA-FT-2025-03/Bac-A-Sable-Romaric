import { Link } from "react-router-dom";
import { Repos } from "../types/repos.type";

type Props = {
  repo: Repos;
};

function RepoCard({ repo }: Props) {
  return (
    <>
      <h2>
        <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
      </h2>
    </>
  );
}

export default RepoCard;
