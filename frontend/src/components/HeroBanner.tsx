import { GithubIcon, SearchIcon } from "./Icons";

interface HeroBannerProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function HeroBanner({ searchTerm, onSearchChange }: HeroBannerProps) {
  return (
    <>
      <div className="w-full h-80 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-stone-950">
        <GithubIcon className="w-32 h-32" />

        <h1 className="text-3xl font-bold">GitHub Repositories</h1>

        <div className="container mx-auto p-4 relative md:w-1/2 lg:w-1/3">
          <SearchIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            className="w-full px-12 py-2 bg-slate-900 text-white rounded-md border border-stone-700"
            type="text"
            placeholder="Rechercher un repo..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
