"use client";

import React, { useState, useMemo } from "react";
import { Hero, HeroCategory } from "@/types/database";
import HeroCard from "./HeroCard";
import HeroFilter from "./HeroFilter";
import HeroSearch from "./HeroSearch";
import { useRouter } from "next/navigation";

interface HeroesClientProps {
  initialHeroes: Hero[];
}

export default function HeroesClient({ initialHeroes }: HeroesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    HeroCategory | "All"
  >("All");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Client-side filtering logic
  const filteredHeroes = useMemo(() => {
    let filtered = initialHeroes;

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (hero) =>
          hero.name?.toLowerCase().includes(term) ||
          hero.alias?.toLowerCase().includes(term)
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((hero) => {
        if (!hero.category) return false;

        const heroCategory = hero.category.toLowerCase().trim();
        const targetCategory = selectedCategory.toLowerCase();

        // Handle typos in the data
        if (targetCategory === "assassin") {
          return (
            heroCategory.includes("assassin") ||
            heroCategory.includes("assasin")
          );
        }
        if (targetCategory === "marksman") {
          return (
            heroCategory.includes("marksman") ||
            heroCategory.includes("marskman")
          );
        }

        return heroCategory.includes(targetCategory);
      });
    }

    return filtered;
  }, [initialHeroes, searchTerm, selectedCategory]);

  const handleHeroClick = (hero: Hero) => {
    // Navigate to hero detail page
    router.push(`/heroes/${hero.id}`);
  };

  return (
    <>
      {/* Search */}
      <HeroSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search for heroes..."
      />

      {/* Category Filter */}
      <HeroFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Results Count */}
     {/*  <div className="text-center mb-6">
        <p className="text-gray-400">
          Showing {filteredHeroes.length} hero
          {filteredHeroes.length !== 1 ? "s" : ""}
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedCategory !== "All" && ` in ${selectedCategory} category`}
        </p>
      </div> */}

      {/* Heroes Grid */}
      {filteredHeroes.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-800/50 rounded-lg p-12 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              No Heroes Found
            </h3>
            <p className="text-gray-400">
              {searchTerm
                ? `No heroes match "${searchTerm}"`
                : `No heroes found in ${selectedCategory} category`}
            </p>
            {(searchTerm || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} onClick={handleHeroClick} />
          ))}
        </div>
      )}
    </>
  );
}
