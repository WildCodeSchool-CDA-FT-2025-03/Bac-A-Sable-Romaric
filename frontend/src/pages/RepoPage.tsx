import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRepos from "../services/useRepos";

function RepoPage() {
  const { repoId } = useParams();

  const { oneRepo, getOneRepo } = useRepos();

  useEffect(() => {
    getOneRepo(repoId as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoId]);

  return (
    <>
      <h1>Page du repo {oneRepo?.name}</h1>
      <p>{oneRepo?.description}</p>
      <p>{oneRepo?.url}</p>
      <p>{oneRepo?.isPrivate ? "Private" : "Public"}</p>
      {oneRepo && oneRepo.languages.map((lang) => <h4>{lang.node.name}</h4>)}
    </>
  );
}

export default RepoPage;
