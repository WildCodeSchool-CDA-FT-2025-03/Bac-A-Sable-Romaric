import { useCallback, useState } from "react";
import api from "./api";

import type { Repos } from "../types/repos.type";

const useRepos = () => {
  const [data, setData] = useState<Repos[]>([]);
  const [oneRepo, setOneRepo] = useState<Repos>();
  const [error, setError] = useState(false);

  const getAllRepos = useCallback((limit: string) => {
    api
      .get(`/repos?limit=${limit}`)
      .then((repos) => {
        setData(repos.data as Repos[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getOneRepo = (repoId: string) => {
    api
      .get(`/repos/${repoId}`)
      .then((repo) => {
        setOneRepo(repo.data as Repos);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  const addNewRepo = async (repo: Repos) => {
    try {
      await api.post("/repos", repo);
    } catch (error) {
      console.error(error);
    }
  };

  return { data, oneRepo, getOneRepo, getAllRepos, error, addNewRepo };
};

export default useRepos;
