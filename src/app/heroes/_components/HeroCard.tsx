'use client';

import React from 'react';
import Image from 'next/image';
import { Hero } from '@/types/database';
import { Card } from '@/components/ui/card';

interface HeroCardProps {
  hero: Hero;
  onClick?: (hero: Hero) => void;
}

export default function HeroCard({ hero, onClick }: HeroCardProps) {
  const getCategoryColor = (category: string | null) => {
    switch (category?.toLowerCase()) {
      case 'fighter':
        return 'bg-red-500/20 border-red-500/30 text-red-300';
      case 'mage':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-300';
      case 'assassin':
      case 'assasin': // Handle typo
        return 'bg-purple-500/20 border-purple-500/30 text-purple-300';
      case 'marksman':
      case 'marskman': // Handle typo
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300';
      case 'tank':
        return 'bg-gray-500/20 border-gray-500/30 text-gray-300';
      case 'support':
        return 'bg-green-500/20 border-green-500/30 text-green-300';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-300';
    }
  };

  const getTierColor = (tier: string | null) => {
    switch (tier?.toUpperCase()) {
      case 'S':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black';
      case 'A':
        return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
      case 'B':
        return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white';
      case 'C':
        return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
      case 'D':
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <Card 
      className={`
        group relative overflow-hidden cursor-pointer transition-all duration-300 
        bg-gray-800/30 border-gray-700/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20
        hover:scale-105 p-0
      `}
      onClick={() => onClick?.(hero)}
    >
      {/* Hero Avatar */}
      <div className="relative aspect-square overflow-hidden">
        {hero.avatar ? (
          <Image
            src={hero.avatar}
            alt={hero.name || 'Hero'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-4xl text-gray-500">?</span>
          </div>
        )}
        
        {/* Tier Badge */}
        {hero.tier && (
          <div className={`
            absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold
            ${getTierColor(hero.tier)}
          `}>
            {hero.tier.toUpperCase()}
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {/* Hero Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 truncate">
          {hero.name || 'Unknown Hero'}
        </h3>
        
        {hero.alias && (
          <p className="text-sm text-gray-400 mb-2 truncate">
            &ldquo;{hero.alias}&rdquo;
          </p>
        )}
        
        {hero.category && (
          <span className={`
            inline-block px-3 py-1 rounded-full text-xs font-medium border
            ${getCategoryColor(hero.category)}
          `}>
            {hero.category}
          </span>
        )}
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
}