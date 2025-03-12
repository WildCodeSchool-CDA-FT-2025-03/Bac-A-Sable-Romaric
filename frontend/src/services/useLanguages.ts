import { useCallback, useState } from "react";
import api from "./api";

const useLanguages = () => {
  const [languages, setLanguages] = useState<string[]>([]);

  const getAllLanguages = useCallback(() => {
    api
      .get(`/languages`)
      .then((languages) => {
        setLanguages(languages.data as string[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { languages, getAllLanguages };
};

export default useLanguages;
