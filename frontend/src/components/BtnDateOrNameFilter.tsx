interface BtnDateOrNameFilterProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

function BtnDateOrNameFilter({ sortBy, onSortChange }: BtnDateOrNameFilterProps) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="bg-slate-800 border border-slate-700 rounded-md px-3 py-1"
    >
      <option value="createdAt">Date de création</option>
      <option value="updatedAt">Date de mise à jour</option>
      <option value="name">Ordre alphabétique</option>
    </select>
  );
}

export default BtnDateOrNameFilter;
