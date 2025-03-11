import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRepos from "../services/useRepos";

function RepoPage() {
  const { repoId } = useParams();

  const { oneRepo, getOneRepo } = useRepos();

  useEffect(() => {
    getOneRepo(repoId as string);
  }, [repoId, getOneRepo]);

  return (
    <>
      <h1>Page du repo {repoId}</h1>
      {oneRepo && oneRepo.languages.map((lang) => <h4>{lang.node.name}</h4>)}
    </>
  );
}

export default RepoPage;
