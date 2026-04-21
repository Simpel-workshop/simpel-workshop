"use client";

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

export default function Filters({ categories, selectedCategory, setSelectedCategory, search, setSearch }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between">
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="h-11 min-w-[180px] border border-neutral-300 bg-white px-4 text-sm text-neutral-900 outline-none transition focus:border-neutral-900">
        <option value="all">Kategori</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Søg i alle produkter" value={search} onChange={(e) => setSearch(e.target.value)} className="h-11 w-full border border-neutral-300 bg-white px-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 md:max-w-sm" />
    </div>
  );
}
