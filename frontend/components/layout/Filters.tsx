"use client";

import { useEffect, useState } from "react";
import { getFilters } from "../../app/lib/api";

type Props = {
  onCountryChange: (country: string) => void;
  onCategoryChange: (category: string) => void;
};

export default function Filters({
  onCountryChange,
  onCategoryChange,
}: Props) {
  const [countries, setCountries] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadFilters() {
      const data = await getFilters();

      setCountries(data.countries);
      setCategories(data.categories);
    }

    loadFilters();
  }, []);

  return (
    <div className="flex gap-4">

      <select
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white"
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">All Countries</option>

        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

    </div>
  );
}