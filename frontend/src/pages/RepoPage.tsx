import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import useRepos from "../services/useRepos";

function RepoPage() {
  const { repoId } = useParams();

  const { oneRepo, getOneRepo, error } = useRepos();

  useEffect(() => {
    getOneRepo(repoId as string);
  }, [repoId, getOneRepo]);

  if (error) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1 className="text-3xl font-bold w-full h-96 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-stone-950">
        {oneRepo?.name}
      </h1>
      <section className="container mx-auto lg:max-w-2xl flex flex-col justify-center items-start gap-4 border border-slate-800 rounded-lg p-4 bg-gradient-to-b from-slate-900 to-stone-950">
        <div className="w-full flex justify-end">
          <span
            className={`text-xs ${
              oneRepo?.isPrivate ? "text-orange-600" : "text-green-600"
            } border rounded-md px-2 py-1`}
          >
            {oneRepo?.isPrivate ? "Private" : "Public"}
          </span>
        </div>
        <p className="text-slate-300 italic">{oneRepo?.description}</p>

        <p>{oneRepo?.url}</p>

        <ul className="flex flex-wrap gap-2 pt-4">
          {oneRepo?.languages.map((language) => (
            <li className="text-sm" key={language.node.name}>
              {language.node.name}
            </li>
          ))}
        </ul>
      </section>

      <Link
        to="/"
        className="container mx-auto lg:max-w-2xl py-6 text-center bg-gradient-to-b from-slate-900 to-stone-950 text-white rounded-md border border-slate-700 transition-transform duration-200 hover:scale-103 hover:bg-gradient-to-t hover:shadow-[0px_4px_20px_rgba(255,255,255,0.2)]"
      >
        {`<< Retour à l'accueil`}
      </Link>
    </>
  );
}

export default RepoPage;
