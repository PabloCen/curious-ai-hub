import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ page, pages, onPageChange }) => {
  if (pages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {[...Array(pages)].map((_, i) => {
           const p = i + 1;
           // Simple logic: show all for now, or improve for large ranges later
           if (p === 1 || p === pages || (p >= page - 1 && p <= page + 1)) {
              return (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    page === p
                        ? "bg-[#9d4edd] text-white shadow-[0_0_10px_rgba(157,78,221,0.5)]"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                >
                    {p}
                </button>
              );
           } else if (p === page - 2 || p === page + 2) {
               return <span key={p} className="text-gray-600 px-1">...</span>;
           }
           return null;
        })}
      </div>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === pages}
        className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
