'use client';

import React, { useState, useMemo } from 'react';
import { Emblem } from '@/types/database';
import EmblemCard from './EmblemCard';
import EmblemSearch from './EmblemSearch';

interface EmblemsClientProps {
  initialEmblems: Emblem[];
}

export default function EmblemsClient({ initialEmblems }: EmblemsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Group emblems by category in the specific order requested
  const groupedEmblems = useMemo(() => {
    let filtered = initialEmblems;

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(emblem =>
        emblem.name?.toLowerCase().includes(term) ||
        emblem.description?.toLowerCase().includes(term) ||
        emblem.stats?.some(stat => stat.toLowerCase().includes(term))
      );
    }

    // Group by category in the specific order
    const orderedGroups: { [key: string]: Emblem[] } = {
      'Main Emblem': [],
      'Emblem Section-1': [],
      'Emblem Section-2': [],
      'Emblem Section-3': []
    };

    filtered.forEach(emblem => {
      if (emblem.category) {
        if (emblem.category.includes('Main_Emblem')) {
          orderedGroups['Main Emblem'].push(emblem);
        } else if (emblem.category.includes('Emblem_Section_1')) {
          orderedGroups['Emblem Section-1'].push(emblem);
        } else if (emblem.category.includes('Emblem_Section_2')) {
          orderedGroups['Emblem Section-2'].push(emblem);
        } else if (emblem.category.includes('Emblem_Section_3')) {
          orderedGroups['Emblem Section-3'].push(emblem);
        }
      }
    });

    // Remove empty categories
    Object.keys(orderedGroups).forEach(key => {
      if (orderedGroups[key].length === 0) {
        delete orderedGroups[key];
      }
    });

    return orderedGroups;
  }, [initialEmblems, searchTerm]);

  const handleEmblemClick = (emblem: Emblem) => {
    console.log('Emblem clicked:', emblem);
    // TODO: Navigate to emblem detail page or show emblem details modal
  };

  const totalEmblems = Object.values(groupedEmblems).reduce((sum, emblems) => sum + emblems.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Emblems in Mobile Legend Bang Bang
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Optimize your gameplay with the perfect emblem combinations
          </p>
        </div>

        {/* Search */}
        <EmblemSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search for Items"
        />

        {/* Emblems Sections */}
        {Object.keys(groupedEmblems).length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-800/50 rounded-lg p-12 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                No Emblems Found
              </h3>
              <p className="text-gray-400">
                {searchTerm
                  ? `No emblems match "${searchTerm}"`
                  : 'No emblems available'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        ) : (
          Object.entries(groupedEmblems).map(([categoryName, emblems]) => (
            <div key={categoryName} className="mb-12">
              {/* Category Header */}
              <h2 className="text-2xl font-bold text-white mb-6">
                {categoryName}
              </h2>
              
              {/* Emblems Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {emblems.map((emblem) => (
                  <EmblemCard
                    key={emblem.id}
                    emblem={emblem}
                    onClick={handleEmblemClick}
                  />
                ))}
              </div>
            </div>
          ))
        )}

        {/* Emblems Count */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Showing {totalEmblems} of {initialEmblems.length} emblems
          </p>
        </div>
      </div>
    </div>
  );
}