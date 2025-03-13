import { GithubIcon } from "./Icons";

function HeroBanner() {
  return (
    <>
      <div className="w-screen h-96 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-stone-950">
        <GithubIcon className="w-32 h-32" />

        <h1 className="text-3xl font-bold">GitHub Repositories</h1>
      </div>
    </>
  );
}

export default HeroBanner;
