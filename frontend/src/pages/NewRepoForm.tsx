import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import InputForm from "../components/forms/InputForm";

import useLanguages from "../services/useLanguages";

import type { Repos } from "../types/repos.type";

const initialRepo = {
  description: "",
  isPrivate: false,
  languages: [{ size: 0, node: { name: "" } }],
  name: "",
  url: "",
};

function NewRepoForm() {
  const [newRepo, setNewRepo] = useState<Repos>(initialRepo);
  const { languages, getAllLanguages } = useLanguages();
  console.log(newRepo);

  const handleNewRepo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    getAllLanguages();
  }, [getAllLanguages]);

  return (
    <>
      <h1 className="text-2xl font-bold">Ajouter un nouveau repo</h1>

      <Link
        to="/"
        className="bg-gradient-to-b from-slate-900 to-stone-950 text-white rounded-md border border-stone-700 px-2 py-1 transition-transform duration-200 hover:scale-103 hover:bg-gradient-to-t hover:shadow-[0px_4px_20px_rgba(255,255,255,0.2)]"
      >
        {`<< Retour à l'accueil`}
      </Link>

      <form className="container mx-auto px-4 flex flex-col gap-4">
        <InputForm
          title="Nom du repo"
          name="name"
          id="name"
          placeholder="Nom du repo"
          value={newRepo.name}
          onChange={handleNewRepo}
        />

        <InputForm
          title="Description du repo"
          name="description"
          id="description"
          placeholder="Description du repo"
          value={newRepo.description}
          onChange={handleNewRepo}
        />

        <label className="text-sm" htmlFor="languages">
          Langage(s) utilisé(s)
        </label>
        <select
          className="bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
          name="languages"
          id="languages"
        >
          {languages.map((lang) => (
            <option value={lang}>{lang}</option>
          ))}
        </select>
      </form>
    </>
  );
}

export default NewRepoForm;
