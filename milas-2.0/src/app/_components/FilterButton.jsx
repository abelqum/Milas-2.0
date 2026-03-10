"use client";

export default function FilterButton({ title, setFilter, filters }) {
  return (
    <button
      className="btn-filtro bg-white text-slate-600 border border-slate-200 px-6 py-2 rounded-full font-medium hover:border-yellow-500 hover:text-yellow-600 transition-all text-sm md:text-base"
      onClick={() => setFilter(filters)}
    >
      {title}
    </button>
  );
}
