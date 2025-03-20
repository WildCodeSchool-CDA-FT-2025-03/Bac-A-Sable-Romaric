import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CheckboxForm from "../components/forms/CheckboxForm";
import InputForm from "../components/forms/InputForm";
import SelectFormLanguages from "../components/forms/SelectFormLanguages";

import useRepos from "../services/useRepos";

import type { Repos } from "../types/repos.type";

const initialRepo = {
  createdAt: new Date().toISOString(),
  description: "",
  diskUsage: 0,
  isPrivate: false,
  languages: [{ size: 0, node: { name: "" } }],
  name: "",
  updatedAt: new Date().toISOString(),
  url: "",
};

function NewRepoForm() {
  const [newRepo, setNewRepo] = useState<Repos>(initialRepo);
  const { addNewRepo } = useRepos();
  console.log(newRepo);

  const handleNewRepo = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewRepo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguagesChange = (selectedLanguages: string[]) => {
    setNewRepo((prev) => ({
      ...prev,
      languages: selectedLanguages.map((lang) => ({
        size: 0,
        node: { name: lang },
      })),
    }));
  };

  const handleIsPrivateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRepo((prev) => ({ ...prev, isPrivate: e.target.checked }));
  };

  const handleSubmitRepo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const currentDate = new Date().toISOString();
      await addNewRepo({
        ...newRepo,
        createdAt: currentDate,
        updatedAt: currentDate,
      });

      setNewRepo(initialRepo);
      toast.success("Le repository a été créé avec succès !", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la création du repository.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold w-full h-96 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-stone-950">
        Ajouter un nouveau repo
      </h1>

      <form
        className="container mx-auto px-4 lg:max-w-2xl flex flex-col gap-4"
        onSubmit={handleSubmitRepo}
      >
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

        <InputForm
          title="URL du repo"
          name="url"
          id="url"
          placeholder="URL du repo"
          value={newRepo.url}
          onChange={handleNewRepo}
        />

        <SelectFormLanguages
          langs={newRepo.languages.map((lang) => lang.node.name)}
          onChange={handleLanguagesChange}
        />

        <CheckboxForm isPrivate={newRepo.isPrivate} onChange={handleIsPrivateChange} />

        <div className="flex justify-between items-stretch gap-4 mt-8">
          <Link
            to="/"
            className="w-1/2 py-6 text-center bg-gradient-to-b from-slate-900 to-stone-950 text-white rounded-md border border-slate-700 transition-transform duration-200 hover:scale-103 hover:bg-gradient-to-t hover:shadow-[0px_4px_20px_rgba(255,255,255,0.2)]"
          >
            {`<< Retour à l'accueil`}
          </Link>

          <button
            type="submit"
            className="w-1/2 py-6 font-bold bg-blue-900 hover:bg-blue-600 text-white rounded-md border border-blue-600 transition-transform duration-200 hover:scale-103 hover:bg-gradient-to-t hover:shadow-[0px_4px_20px_rgba(255,255,255,0.2)]"
          >
            Ajouter le repo
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
}

export default NewRepoForm;
