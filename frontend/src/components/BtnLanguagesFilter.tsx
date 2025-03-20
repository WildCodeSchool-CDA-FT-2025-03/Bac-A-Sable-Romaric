interface BtnLanguagesFilterProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  allLanguages: string[];
}

function BtnLanguagesFilter({
  selectedLanguage,
  onLanguageChange,
  allLanguages,
}: BtnLanguagesFilterProps) {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="bg-slate-800 border border-slate-700 rounded-md px-3 py-1"
    >
      <option value="all">Tous les langages</option>
      {allLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}

export default BtnLanguagesFilter;
