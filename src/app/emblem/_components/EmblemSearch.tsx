'use client';

import React from 'react';
import { Input } from '@/components/ui/input';

interface EmblemSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

export default function EmblemSearch({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search for Items" 
}: EmblemSearchProps) {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-12 px-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
        />
        {/* Search Icon */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}