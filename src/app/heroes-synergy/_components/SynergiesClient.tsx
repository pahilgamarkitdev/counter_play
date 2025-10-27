"use client";

import React, { useState, useMemo } from "react";
import { DuoSynergy, TrioSynergy, FiveSynergy, Hero } from "@/types/database";
import SynergyCard from "./SynergyCard";
import SynergySearch from "./SynergySearch";

interface SynergiesClientProps {
  duoSynergies: DuoSynergy[];
  trioSynergies: TrioSynergy[];
  fiveSynergies: FiveSynergy[];
  heroMap: Map<string, Hero>;
}

type SynergyType = 'all' | '5-man' | 'trio' | 'duo';

interface SynergyWithHeroes {
  id: number;
  heroes: Hero[];
  type: '5-man' | 'trio' | 'duo';
  created_at: string;
}

export default function SynergiesClient({ 
  duoSynergies, 
  trioSynergies, 
  fiveSynergies, 
  heroMap 
}: SynergiesClientProps) {
  const [selectedType, setSelectedType] = useState<SynergyType>('all');
  const [searchTerm, setSearchTerm] = useState("");

  // Convert synergies to unified format with heroes
  const allSynergies = useMemo((): SynergyWithHeroes[] => {
    const synergies: SynergyWithHeroes[] = [];

    // Process duo synergies - hero_ids might be JSON stringified array
    duoSynergies.forEach(synergy => {
      if (synergy.hero_ids && synergy.hero_ids.trim()) {
        const idsString = synergy.hero_ids.trim();
        let heroIds: string[] = [];
        
        // Check if it's a JSON stringified array
        if (idsString.startsWith('[') && idsString.endsWith(']')) {
          try {
            const parsed = JSON.parse(idsString);
            if (Array.isArray(parsed)) {
              // Check if array elements contain commas and split them
              heroIds = parsed.flatMap(id => 
                id.includes(',') ? id.split(',').map((s: string) => s.trim()) : [id.trim()]
              ).filter(id => id);
            }
          } catch {
            heroIds = idsString.split(',').map(id => id.trim()).filter(id => id);
          }
        } else {
          heroIds = idsString.split(',').map(id => id.trim()).filter(id => id);
        }
        
        const heroes = heroIds.map(id => heroMap.get(id)).filter(Boolean) as Hero[];
        console.log(`Duo synergy ${synergy.id}: parsed ${heroIds.length} IDs, found ${heroes.length} heroes`, heroIds);
        
        if (heroes.length > 0) {
          synergies.push({
            id: synergy.id,
            heroes,
            type: 'duo',
            created_at: synergy.created_at,
          });
        }
      }
    });

    // Process trio synergies - hero_ids is an array of strings, but each element might contain comma-separated IDs
    trioSynergies.forEach(synergy => {
      if (synergy.hero_ids && Array.isArray(synergy.hero_ids)) {
        const heroIds: string[] = [];
        synergy.hero_ids.forEach((item) => {
          // Check if the array element contains comma-separated values
          if (item && item.includes(',')) {
            const splitIds = item.split(',').map(id => id.trim()).filter(id => id);
            heroIds.push(...splitIds);
          } else if (item && item.trim()) {
            heroIds.push(item.trim());
          }
        });
        const heroes = heroIds.map(id => heroMap.get(id)).filter(Boolean) as Hero[];
        console.log(`Trio synergy ${synergy.id}: parsed ${heroIds.length} IDs, found ${heroes.length} heroes`, heroIds);
        
        if (heroes.length > 0) {
          synergies.push({
            id: synergy.id,
            heroes,
            type: 'trio',
            created_at: synergy.created_at,
          });
        }
      }
    });

    // Process five synergies - hero_ids is a comma-separated string (but might be JSON stringified)
    fiveSynergies.forEach(synergy => {
      if (synergy.hero_ids && synergy.hero_ids.trim()) {
        const idsString = synergy.hero_ids.trim();
        let heroIds: string[] = [];
        
        // Check if it's a JSON stringified array
        if (idsString.startsWith('[') && idsString.endsWith(']')) {
          try {
            const parsed = JSON.parse(idsString);
            if (Array.isArray(parsed)) {
              // Check if array elements contain commas and split them
              heroIds = parsed.flatMap(id => 
                id.includes(',') ? id.split(',').map((s: string) => s.trim()) : [id.trim()]
              ).filter(id => id);
            }
          } catch {
            console.warn(`Failed to parse JSON for five synergy ${synergy.id}, falling back to comma split`);
            heroIds = idsString.split(',').map(id => id.trim()).filter(id => id);
          }
        } else {
          // Default: comma-separated string
          heroIds = idsString.split(',').map(id => id.trim()).filter(id => id);
        }
        
        const heroes = heroIds.map(id => heroMap.get(id)).filter(Boolean) as Hero[];
        console.log(`Five synergy ${synergy.id}: parsed ${heroIds.length} IDs, found ${heroes.length} heroes`, heroIds);
        
        if (heroes.length > 0) {
          synergies.push({
            id: synergy.id,
            heroes,
            type: '5-man',
            created_at: synergy.created_at,
          });
        }
      }
    });

    return synergies.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [duoSynergies, trioSynergies, fiveSynergies, heroMap]);

  // Client-side filtering logic
  const filteredSynergies = useMemo(() => {
    let filtered = allSynergies;

    // Apply type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(synergy => synergy.type === selectedType);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(synergy =>
        synergy.heroes.some(hero =>
          hero.name?.toLowerCase().includes(term) ||
          hero.alias?.toLowerCase().includes(term)
        )
      );
    }

    return filtered;
  }, [allSynergies, selectedType, searchTerm]);

  const getSynergyTypeStats = () => {
    return {
      all: allSynergies.length,
      duo: duoSynergies.length,
      trio: trioSynergies.length,
      '5-man': fiveSynergies.length,
    };
  };

  const stats = getSynergyTypeStats();

  return (
    <>
      {/* Search */}
      <SynergySearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search synergies by hero name..."
      />

      {/* Type Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { key: 'all', label: 'All Synergies', count: stats.all },
            { key: '5-man', label: '5-Man', count: stats['5-man'] },
            { key: 'trio', label: 'Trio', count: stats.trio },
            { key: 'duo', label: 'Duo', count: stats.duo },
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setSelectedType(key as SynergyType)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedType === key
                  ? 'bg-cyan-400 text-gray-900 shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600'
              }`}
            >
              {label}
              <span className={`ml-2 text-sm ${
                selectedType === key ? 'text-gray-700' : 'text-gray-500'
              }`}>
                ({count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center mb-6">
        <p className="text-gray-400">
          Showing {filteredSynergies.length} synerg{filteredSynergies.length !== 1 ? 'ies' : 'y'}
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedType !== 'all' && ` in ${selectedType} category`}
        </p>
      </div>

      {/* Synergies Grid */}
      {filteredSynergies.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-800/50 rounded-lg p-12 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              No Synergies Found
            </h3>
            <p className="text-gray-400">
              {searchTerm
                ? `No synergies match "${searchTerm}"`
                : `No synergies found in ${selectedType} category`}
            </p>
            {(searchTerm || selectedType !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType('all');
                }}
                className="mt-4 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSynergies.map((synergy, index) => (
            <SynergyCard
              key={`${synergy.type}-${synergy.id}-${index}-${synergy.heroes.map(h => h.id).join('-')}`}
              heroes={synergy.heroes}
              synergyType={synergy.type}
              synergyId={synergy.id}
              onClick={() => {
                // Handle click - could open modal or navigate to detail page
                console.log('Clicked synergy:', synergy);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}