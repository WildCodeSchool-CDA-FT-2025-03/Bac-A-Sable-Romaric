import { useEffect } from "react";

import useLanguages from "../../services/useLanguages";

type SelectFormLanguagesProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function SelectFormLanguages({ value, onChange }: SelectFormLanguagesProps) {
  const { languages, getAllLanguages } = useLanguages();

  useEffect(() => {
    getAllLanguages();
  }, [getAllLanguages]);

  return (
    <>
      <label className="text-sm" htmlFor="languages">
        Langage(s) utilisé(s)
      </label>
      <select
        className="bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
        name="languages"
        id="languages"
        value={value}
        onChange={onChange}
      >
        {languages.map((lang) => (
          <option value={lang}>{lang}</option>
        ))}
      </select>
    </>
  );
}

export default SelectFormLanguages;
