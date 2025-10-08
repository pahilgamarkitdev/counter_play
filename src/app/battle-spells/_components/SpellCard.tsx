'use client';

import React from 'react';
import Image from 'next/image';
import { Spell } from '@/types/database';

interface SpellCardProps {
  spell: Spell;
  onClick?: (spell: Spell) => void;
}

export default function SpellCard({ spell, onClick }: SpellCardProps) {
  const capitalizeFirstLetter = (str: string | null) => {
    if (!str) return 'Unknown Spell';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Debug: Log the spell data to see the actual structure
  console.log('Spell data:', spell);

  // Handle both array and string descriptions
  const getDescriptionArray = (): string[] => {
    if (!spell.description) return [];
    
    // If it's already an array, return it
    if (Array.isArray(spell.description)) {
      return spell.description;
    }
    
    // If it's a string, try to parse it or split by common delimiters
    if (typeof spell.description === 'string') {
      try {
        // Try to parse as JSON first
        const parsed = JSON.parse(spell.description);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        // If JSON parsing fails, split by newlines or semicolons
        return (spell.description as string).split(/\n|;|\|/).map((item: string) => item.trim()).filter((item: string) => item.length > 0);
      }
    }
    
    return [];
  };

  const descriptions = getDescriptionArray();

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 bg-black/40 rounded-2xl p-4 border border-gray-600 hover:border-cyan-400"
      onClick={() => onClick?.(spell)}
    >
      <div className="flex items-start gap-4">
        {/* Spell Avatar */}
        <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
          {spell.avatar ? (
            <Image
              src={spell.avatar}
              alt={spell.name || 'Spell'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <span className="text-xl text-gray-500">✨</span>
            </div>
          )}
        </div>
        
        {/* Spell Content */}
        <div className="flex-1 min-w-0">
          {/* Spell Name */}
          <h3 className="text-xl font-bold text-white mb-2">
            {capitalizeFirstLetter(spell.name)}
          </h3>

          {/* Spell Descriptions as Bullet Points */}
          <div className="text-sm text-gray-300 space-y-1">
            {descriptions.map((description, index) => (
              <div key={index} className="flex items-start">
                <span className="text-white mr-2 mt-0.5 text-xs">•</span>
                <span className="leading-relaxed">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}