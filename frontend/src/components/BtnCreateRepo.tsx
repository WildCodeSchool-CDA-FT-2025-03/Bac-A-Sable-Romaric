import { Link } from "react-router-dom";

function BtnCreateRepo() {
  return (
    <>
      <Link
        to="/repos/create"
        className="bg-blue-900 hover:bg-blue-600 border border-blue-600 text-white text-lg font-bold rounded-md px-12 py-1 transition-transform duration-200 hover:scale-103 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.1)]"
      >
        +
      </Link>
    </>
  );
}

export default BtnCreateRepo;
