import { Link } from "react-router-dom";
import { LinkedinIcon, GithubIcon } from "./Icons";

function Header() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 bg-gradient-to-t from-stone-950 to-slate-900 text-white">
      <Link to="/">
        <h1 className="text-2xl font-bold">Bac à sable de Romaric</h1>
      </Link>

      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/yiromaric/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/Yiroma" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default Header;
