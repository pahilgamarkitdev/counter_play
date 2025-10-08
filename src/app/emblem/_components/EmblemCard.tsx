'use client';

import React from 'react';
import Image from 'next/image';
import { Emblem } from '@/types/database';

interface EmblemCardProps {
  emblem: Emblem;
  onClick?: (emblem: Emblem) => void;
}

export default function EmblemCard({ emblem, onClick }: EmblemCardProps) {
  // Helper function to get emblem color based on category
  const getEmblemIconColor = (category: string | null) => {
    if (!category) return 'from-gray-700 to-gray-900';
    
    const cat = category.toLowerCase();
    if (cat.includes('main_emblem')) {
      const name = emblem.name?.toLowerCase();
      if (name?.includes('common')) return 'from-blue-500 to-blue-700';
      if (name?.includes('tank')) return 'from-orange-500 to-orange-700';
      if (name?.includes('assassin')) return 'from-purple-500 to-purple-700';
      if (name?.includes('mage')) return 'from-blue-400 to-blue-600';
      if (name?.includes('fighter')) return 'from-red-500 to-red-700';
      if (name?.includes('support')) return 'from-green-500 to-green-700';
      if (name?.includes('marksman')) return 'from-yellow-500 to-yellow-700';
    }
    return 'from-gray-600 to-gray-800';
  };

  const capitalizeFirstLetter = (str: string | null) => {
    if (!str) return 'Unknown Emblem';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400"
      onClick={() => onClick?.(emblem)}
    >
      {/* Emblem Header */}
      <div className="flex items-center mb-3">
        {/* Emblem Icon */}
        <div className={`relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br ${getEmblemIconColor(emblem.category)} flex items-center justify-center border-2 border-gray-600 group-hover:border-cyan-400 transition-colors duration-300`}>
          {emblem.avatar ? (
            <Image
              src={emblem.avatar}
              alt={emblem.name || 'Emblem'}
              width={32}
              height={32}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-300">?</span>
            </div>
          )}
        </div>

        {/* Emblem Name */}
        <h3 className="text-lg font-semibold text-white ml-3 group-hover:text-cyan-400 transition-colors duration-300">
          {capitalizeFirstLetter(emblem.name)}
        </h3>
      </div>

      {/* Emblem Stats */}
      <div className="space-y-1">
        {emblem.stats && emblem.stats.length > 0 ? (
          emblem.stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-300 leading-relaxed">{stat}</span>
            </div>
          ))
        ) : (
          <div className="flex items-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full mr-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-500">No stats available</span>
          </div>
        )}
      </div>

      {/* Description (Optional) */}
      {emblem.description && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <p className="text-xs text-gray-400 italic">{emblem.description}</p>
        </div>
      )}
    </div>
  );
}