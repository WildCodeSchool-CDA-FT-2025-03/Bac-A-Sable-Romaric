import { JSX } from "react";
import { Link } from "react-router-dom";
import { Repos } from "../types/repos.type";

type Props = {
  repo: Repos;
  children: JSX.Element;
  cls: string;
};

function RepoCard({ repo, children, cls }: Props) {
  return (
    <>
      <h2 className={cls}>
        <Link to={`/repo/${repo.id}`}>{repo.url}</Link>
      </h2>
      {children}
    </>
  );
}

export default RepoCard;
