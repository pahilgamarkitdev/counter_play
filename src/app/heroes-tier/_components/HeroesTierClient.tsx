'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { searchHeroesByTierAction } from '../actions';
import { TierSection as TierSectionType } from '../constants';
import TierSection from './TierSection';
import TierSearch from './TierSearch';

interface HeroesTierClientProps {
  initialTierSections: TierSectionType[];
}

export default function HeroesTierClient({ initialTierSections }: HeroesTierClientProps) {
  const [tierSections, setTierSections] = useState<TierSectionType[]>(initialTierSections);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (searchTerm: string) => {
    startTransition(async () => {
      try {
        const results = await searchHeroesByTierAction(searchTerm);
        setTierSections(results);
      } catch (error) {
        console.error('Search error:', error);
        // Keep current state on error
      }
    });
  };

  // Reset to initial data when component mounts
  useEffect(() => {
    setTierSections(initialTierSections);
  }, [initialTierSections]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Tier list in Mobile Legend Bang Bang
        </h1>
        <p className="text-gray-300 text-lg mb-2">
          Discover the current meta rankings for Mobile Legends heroes.
        </p>
        <p className="text-gray-400 mb-8">
          Find the best picks for your playstyle.
        </p>

        {/* Search Bar */}
        <TierSearch 
          onSearch={handleSearch}
          placeholder="Search for Items"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {isPending && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center text-cyan-400">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 mr-2"></div>
              Searching heroes...
            </div>
          </div>
        )}

        {tierSections.length > 0 ? (
          <div className="space-y-6">
            {tierSections.map((tierSection) => (
              <TierSection
                key={tierSection.tier}
                tierSection={tierSection}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              No heroes found matching your search criteria
            </div>
            <button
              onClick={() => handleSearch('')}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              Clear search to see all heroes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}