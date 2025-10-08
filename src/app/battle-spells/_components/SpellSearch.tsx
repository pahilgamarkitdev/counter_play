'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SpellSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export default function SpellSearch({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search for spells..." 
}: SpellSearchProps) {
  return (
    <div className="relative max-w-screen mr-auto mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="
            pl-10 pr-4 py-3 w-full 
            bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400
            focus:border-cyan-400/50 focus:ring-cyan-400/20
            rounded-lg transition-all duration-200
          "
        />
      </div>
    </div>
  );
}