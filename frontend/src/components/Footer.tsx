import { GithubIcon, LinkedinIcon } from "./Icons";

function Footer() {
  return (
    <>
      <footer className="w-full h-32 p-4 flex items-center justify-center text-white bg-gradient-to-t from-slate-900 to-stone-950">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
          <p className="text-center text-sm">Bac à sable - GitHub Repositories</p>
          <span className="text-sm">{new Date().getFullYear()} Yiroma</span>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/yiromaric/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a href="https://github.com/Yiroma" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
