'use client';

import React from 'react';
import Image from 'next/image';
import { Hero } from '@/types/database';

interface SynergyCardProps {
  heroes: Hero[];
  synergyType: '5-man' | 'trio' | 'duo';
  synergyId?: number | string;
  onClick?: () => void;
}

export default function SynergyCard({ heroes, synergyType, synergyId, onClick }: SynergyCardProps) {
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (str: string | null) => {
    if (!str) return 'Unknown Hero';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getSynergyTypeColor = () => {
    switch (synergyType) {
      case '5-man':
        return 'bg-gradient-to-r from-purple-600 to-purple-800';
      case 'trio':
        return 'bg-gradient-to-r from-blue-600 to-blue-800';
      case 'duo':
        return 'bg-gradient-to-r from-green-600 to-green-800';
      default:
        return 'bg-gradient-to-r from-gray-600 to-gray-800';
    }
  };

  const getSynergyTypeBadge = () => {
    switch (synergyType) {
      case '5-man':
        return 'text-purple-300 border-purple-300';
      case 'trio':
        return 'text-blue-300 border-blue-300';
      case 'duo':
        return 'text-green-300 border-green-300';
      default:
        return 'text-gray-300 border-gray-300';
    }
  };

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400"
      onClick={onClick}
    >
      {/* Synergy Type Badge */}
      <div className="flex justify-between items-center mb-3">
        <span className={`px-2 py-1 text-xs font-semibold border rounded-full uppercase ${getSynergyTypeBadge()}`}>
          {synergyType}
        </span>
        <span className="text-gray-400 text-sm">
          {heroes.length} Heroes
        </span>
      </div>

      {/* Heroes Display */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {heroes.map((hero, heroIndex) => (
          <div key={`${synergyType}-${synergyId || 'unknown'}-${hero.id}-${heroIndex}`} className="relative group/hero">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 group-hover/hero:border-cyan-400 transition-colors duration-300">
              {hero.avatar ? (
                <Image
                  src={hero.avatar}
                  alt={hero.name || 'Hero'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover/hero:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-xs text-gray-500">?</span>
                </div>
              )}
            </div>
            
            {/* Hero name tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
              {capitalizeFirstLetter(hero.name)}
            </div>
          </div>
        ))}
      </div>

      {/* Hero Names */}
      <div className="text-center">
        <p className="text-sm text-gray-300 truncate">
          {heroes.map(hero => capitalizeFirstLetter(hero.name)).join(' + ')}
        </p>
      </div>

      {/* Synergy Strength Indicator */}
      <div className="mt-3">
        <div className={`w-full h-1 rounded-full ${getSynergyTypeColor()}`}></div>
      </div>
    </div>
  );
}