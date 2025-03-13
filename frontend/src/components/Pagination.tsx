import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  limit: number;
  dataLength: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, limit, dataLength, onPageChange }: PaginationProps) {
  // Calculation of pages to display
  const totalPages = useMemo(() => {
    if (dataLength < limit) {
      return currentPage;
    }
    return currentPage + 1;
  }, [dataLength, limit, currentPage]);

  // Generation of pagination buttons
  const renderPageButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    // Adjust startPage if we are close to the end
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Button for the first page
    if (startPage > 1) {
      buttons.push(
        <button
          key="first"
          onClick={() => onPageChange(1)}
          className="px-3 py-1 rounded-md border bg-slate-900 text-white border-stone-700 hover:bg-slate-800"
        >
          1
        </button>
      );

      // Add ellipsis if necessary
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis1" className="px-2 py-1 text-white">
            ...
          </span>
        );
      }
    }

    // Buttons for the pages
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-md border ${
            i === currentPage
              ? "bg-slate-700 text-white border-stone-500 font-bold"
              : "bg-slate-900 text-white border-stone-700 hover:bg-slate-800"
          }`}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis and last button if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-2 py-1 text-white">
            ...
          </span>
        );
      }

      buttons.push(
        <button
          key="last"
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 rounded-md border bg-slate-900 text-white border-stone-700 hover:bg-slate-800"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex justify-center mt-8 gap-2 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`px-3 py-1 rounded-md border ${
          currentPage <= 1
            ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
            : "bg-slate-900 text-white border-stone-700 hover:bg-slate-800"
        }`}
      >
        {"<<"}
      </button>

      {renderPageButtons()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={dataLength < limit}
        className={`px-3 py-1 rounded-md border ${
          dataLength < limit
            ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
            : "bg-slate-900 text-white border-stone-700 hover:bg-slate-800"
        }`}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Pagination;
