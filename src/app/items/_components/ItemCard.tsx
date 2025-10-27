'use client';

import React from 'react';
import Image from 'next/image';
import { Item } from '@/types/database';

interface ItemCardProps {
  item: Item;
  onClick?: (item: Item) => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (str: string | null) => {
    if (!str) return 'Unknown Item';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-800/80 rounded-lg border border-gray-700 hover:border-cyan-400 p-4"
      onClick={() => onClick?.(item)}
    >
      {/* Item Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden">
        {item.avatar ? (
          <Image
            src={item.avatar}
            alt={item.name || 'Item'}
            fill
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center rounded-lg">
            <span className="text-xl text-gray-500">?</span>
          </div>
        )}
      </div>
      
      {/* Item Name */}
      <h3 className="text-lg font-semibold text-white text-center mb-3 min-h-[56px] flex items-center justify-center">
        {capitalizeFirstLetter(item.name)}
      </h3>
      
      {/* Item Stats */}
      {item.stats && item.stats.length > 0 && (
        <div className="space-y-1">
          {item.stats.map((stat, index) => (
            <div key={index} className="text-sm text-cyan-400 text-center">
              {stat}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}