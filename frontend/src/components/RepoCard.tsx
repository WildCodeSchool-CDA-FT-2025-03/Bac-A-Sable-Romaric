import { JSX } from "react";
import { Repos } from "../types/repos.type";

type Props = {
  repo: Repos;
  children: JSX.Element;
  cls: string;
};

function RepoCard({ repo, children, cls }: Props) {
  return (
    <>
      <h2 className={cls}>{repo.url}</h2>
      {children}
    </>
  );
}

export default RepoCard;
