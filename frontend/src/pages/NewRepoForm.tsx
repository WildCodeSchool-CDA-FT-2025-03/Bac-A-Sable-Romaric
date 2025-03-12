import { useState } from "react";
import { Link } from "react-router-dom";

import InputForm from "../components/forms/InputForm";
import SelectFormLanguages from "../components/forms/selectFormLanguages";

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

  console.log(newRepo);

  const handleNewRepo = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "languages") {
      setNewRepo(() => ({
        ...newRepo,
        languages: [
          {
            size: 0,
            node: {
              name: e.target.value,
            },
          },
        ],
      }));
    } else {
      setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
    }

    console.log(newRepo);
  };

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

        <SelectFormLanguages value={newRepo.languages[0].node.name} onChange={handleNewRepo} />
      </form>
    </>
  );
}

export default NewRepoForm;
