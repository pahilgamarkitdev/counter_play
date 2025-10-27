'use client';

import React from 'react';
import Image from 'next/image';
import { Hero } from '@/types/database';

interface HeroCardProps {
  hero: Hero;
  onClick?: (hero: Hero) => void;
}

export default function HeroCard({ hero, onClick }: HeroCardProps) {
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (str: string | null) => {
    if (!str) return 'Unknown Hero';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 text-center flex flex-col items-center"
      onClick={() => onClick?.(hero)}
    >
      {/* Hero Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-2 border-gray-600 hover:border-cyan-400 transition-colors duration-300">
        {hero.avatar ? (
          <Image
            src={hero.avatar}
            alt={hero.name || 'Hero'}
            fill
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-2xl text-gray-500">?</span>
          </div>
        )}
      </div>
      
      {/* Hero Name */}
      <h3 className="text-sm font-medium text-white truncate max-w-20 text-center">
        {capitalizeFirstLetter(hero.name)}
      </h3>
    </div>
  );
}