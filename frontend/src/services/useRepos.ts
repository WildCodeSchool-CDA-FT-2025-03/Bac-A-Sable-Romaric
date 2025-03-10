import { useEffect, useState } from "react";
import api from "./api";

import type { Repos } from "../types/repos.type";

const useRepos = () => {
  const [data, setData] = useState<Repos[]>([]);

  useEffect(() => {
    api
      .get("/repos")
      .then((repos) => {
        setData(repos.data as Repos[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { data };
};

export default useRepos;
