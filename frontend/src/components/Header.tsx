import { Link } from "react-router-dom";
import { LinkedinIcon, GithubIcon } from "./Icons";

function Header() {
  return (
    <header className="w-full min-h-16 p-4 flex items-center justify-center text-white bg-slate-900">
      <div className="container mx-auto px-4 flex items-center justify-between gap-2">
        <Link to="/">
          <span className="text-xl font-bold">Bac à sable de Romaric</span>
        </Link>

        <div className="flex items-center gap-4">
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
    </header>
  );
}

export default Header;
