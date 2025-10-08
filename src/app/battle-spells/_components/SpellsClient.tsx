"use client";

import React, { useState, useMemo } from "react";
import { Spell } from "@/types/database";
import SpellCard from "./SpellCard";
import SpellSearch from "./SpellSearch";

interface SpellsClientProps {
  initialSpells: Spell[];
}

export default function SpellsClient({ initialSpells }: SpellsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Client-side filtering logic
  const filteredSpells = useMemo(() => {
    let filtered = initialSpells;

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (spell) =>
          spell.name?.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [initialSpells, searchTerm]);

  const handleSpellClick = (spell: Spell) => {
    // For now, just log the spell click
    // This can be extended to navigate to spell detail page if needed
    console.log('Spell clicked:', spell.name);
  };

  return (
    <>
      {/* Search */}
      <SpellSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search for spells..."
      />

      {/* Results Count */}
      <div className="text-center mb-6">
        <p className="text-gray-400">
          Showing {filteredSpells.length} spell
          {filteredSpells.length !== 1 ? "s" : ""}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Spells Grid */}
      {filteredSpells.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-800/50 rounded-lg p-12 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              No Spells Found
            </h3>
            <p className="text-gray-400">
              {searchTerm
                ? `No spells match "${searchTerm}"`
                : "No spells available"}
            </p>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                }}
                className="mt-4 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSpells.map((spell) => (
            <SpellCard key={spell.id} spell={spell} onClick={handleSpellClick} />
          ))}
        </div>
      )}
    </>
  );
}