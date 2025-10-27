'use client';

import React from 'react';
import Image from 'next/image';
import { Hero } from '@/types/database';

interface TierHeroCardProps {
  hero: Hero;
  onClick?: (hero: Hero) => void;
}

export default function TierHeroCard({ hero, onClick }: TierHeroCardProps) {
  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col items-center"
      onClick={() => onClick?.(hero)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick(hero);
        }
      }}
    >
      {/* Hero Avatar - Smaller size for tier list */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 hover:border-cyan-400 transition-all duration-300 shadow-lg">
        {hero.avatar ? (
          <Image
            src={hero.avatar}
            alt={hero.name || 'Hero'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="64px"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-lg text-gray-500">?</span>
          </div>
        )}
        
        {/* Tier badge overlay */}
        {hero.tier && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">{hero.tier}</span>
          </div>
        )}
      </div>
      
      {/* Hero Name - Hidden by default, shown on hover for cleaner look */}
      <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-gray-300 font-medium text-center block max-w-16 truncate">
          {hero.name || 'Unknown'}
        </span>
      </div>
    </div>
  );
}