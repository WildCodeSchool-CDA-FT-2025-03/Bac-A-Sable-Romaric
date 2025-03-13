import { SetURLSearchParams } from "react-router-dom";

type LimitFilterProps = {
  limit: string;
  setSearchParams: SetURLSearchParams;
};

function LimitFilter({ limit, setSearchParams }: LimitFilterProps) {
  return (
    <>
      <div>
        <label className="flex gap-4 items-center">
          Nombre de repos affichés
          <select
            className="bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
            name="limit"
            value={limit}
            onChange={(e) =>
              setSearchParams({
                limit: e.target.value,
                page: "1",
              })
            }
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default LimitFilter;
