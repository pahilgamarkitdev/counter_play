'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TierSection as TierSectionType } from '../constants';
import TierHeroCard from './TierHeroCard';
import { Hero } from '@/types/database';

interface TierSectionProps {
  tierSection: TierSectionType;
}

export default function TierSection({ tierSection }: TierSectionProps) {
  const router = useRouter();
  const { tier, config, heroes } = tierSection;

  const handleHeroClick = (hero: Hero) => {
    router.push(`/heroes/${hero.id}`);
  };

  return (
    <div className={`rounded-xl border-2 ${config.borderColor} ${config.bgColor} p-6 mb-6`}>
      {/* Tier Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Tier Label */}
        <div className={`w-16 h-16 ${config.bgColor} border-2 ${config.borderColor} rounded-lg flex items-center justify-center`}>
          <span className={`text-3xl font-bold ${config.textColor}`}>
            {config.label}
          </span>
        </div>
        
        {/* Tier Description */}
        <div className="flex-1">
          <h2 className={`text-xl font-bold ${config.textColor} mb-1`}>
            {config.title}
          </h2>
          {tier === 'S' && (
            <p className="text-gray-300 text-sm">
              {config.description}
            </p>
          )}
        </div>
      </div>

      {/* Heroes Grid */}
      <div className="flex flex-wrap gap-4">
        {heroes.map((hero) => (
          <TierHeroCard
            key={hero.id}
            hero={hero}
            onClick={handleHeroClick}
          />
        ))}
      </div>

      {/* Hero Count */}
      <div className="mt-4 text-right">
        <span className="text-sm text-gray-400">
          {heroes.length} {heroes.length === 1 ? 'hero' : 'heroes'}
        </span>
      </div>
    </div>
  );
}