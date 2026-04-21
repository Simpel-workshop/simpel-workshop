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
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="rounded-2xl border-4 border-green-400 px-4 py-3 font-semibold">
        <option value="all">Kategori</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Søg i alle produkter" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-2xl border-4 border-green-400 px-4 py-3" />
    </div>
  );
}
