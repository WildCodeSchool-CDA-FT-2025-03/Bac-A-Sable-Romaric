import { useEffect } from "react";
import useLanguages from "../../services/useLanguages";

type SelectFormLanguagesProps = {
  langs?: string[];
  onChange: (langs: string[]) => void;
};

function SelectFormLanguages({ langs = [], onChange }: SelectFormLanguagesProps) {
  const { languages, getAllLanguages } = useLanguages();

  useEffect(() => {
    getAllLanguages();
  }, [getAllLanguages]);

  const handleSelectChange = (index: number, lang: string) => {
    const newLangs = [...langs];
    newLangs[index] = lang;
    onChange(newLangs);
  };

  const addLanguage = () => {
    onChange([...langs, ""]);
  };

  const removeLanguage = (index: number) => {
    const newLangs = langs.filter((_, i) => i !== index);
    onChange(newLangs);
  };

  return (
    <>
      <label className="text-sm block">Langage(s) utilisé(s)</label>

      {langs.map((lang, index) => (
        <div key={index} className="flex gap-2 items-center justify-between">
          <select
            className="w-9/10 bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
            value={lang}
            onChange={(e) => handleSelectChange(index, e.target.value)}
          >
            <option value="">Choisir le langage</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          {langs.length > 1 && (
            <button
              className="w-1/10 text-red-600 hover:text-white hover:bg-red-600 rounded-md border border-red-600 px-2 py-1"
              type="button"
              onClick={() => removeLanguage(index)}
            >
              X
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addLanguage}
        className="bg-blue-900 hover:bg-blue-600 text-white px-2 py-1 rounded-md border border-blue-600 text-sm"
      >
        Ajouter un langage
      </button>
    </>
  );
}

export default SelectFormLanguages;
