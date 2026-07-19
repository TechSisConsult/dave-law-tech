"use client";

import { ProductCategory } from "@/lib/products";

interface Props {
  categories: ProductCategory[];
  active: ProductCategory | "All";
  onChange: (category: ProductCategory | "All") => void;
}

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("All")}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
          active === "All"
            ? "bg-dl-dark text-white border-dl-dark dark:bg-white dark:text-dl-dark"
            : "border-dl-dark/15 dark:border-white/15 text-dl-ink/60 dark:text-white/60 hover:border-dl-dark/30"
        }`}
      >
        All Products
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            active === cat
              ? "bg-dl-dark text-white border-dl-dark dark:bg-white dark:text-dl-dark"
              : "border-dl-dark/15 dark:border-white/15 text-dl-ink/60 dark:text-white/60 hover:border-dl-dark/30"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
