'use client';

import React from 'react';
import { HeroCategory } from '@/types/database';
import { Button } from '@/components/ui/button';

interface HeroFilterProps {
  selectedCategory: HeroCategory | 'All';
  onCategoryChange: (category: HeroCategory | 'All') => void;
}

const categories: (HeroCategory | 'All')[] = [
  'All',
  'Fighter',
  'Mage', 
  'Assassin',
  'Marksman',
  'Tank',
  'Support'
];

const getCategoryIcon = (category: HeroCategory | 'All') => {
  switch (category) {
    case 'Fighter':
      return '⚔️';
    case 'Mage':
      return '🔮';
    case 'Assassin':
      return '🗡️';
    case 'Marksman':
      return '🏹';
    case 'Tank':
      return '🛡️';
    case 'Support':
      return '💚';
    default:
      return '🎯';
  }
};

export default function HeroFilter({ selectedCategory, onCategoryChange }: HeroFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-start mb-8">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        
        return (
          <Button
            key={category}
            variant={isSelected ? "default" : "outline"}
            size="sm"
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200
              ${isSelected 
                ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300 border-cyan-400' 
                : 'bg-gray-800/50 text-gray-300 border-gray-600/50 hover:bg-gray-700/50 hover:border-cyan-400/50'
              }
            `}
            onClick={() => onCategoryChange(category)}
          >
            <span className="text-sm">{getCategoryIcon(category)}</span>
            <span className="font-medium">{category}</span>
          </Button>
        );
      })}
    </div>
  );
}