'use client';

import React, { useState, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface TierSearchProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export default function TierSearch({ onSearch, placeholder = "Search for Items" }: TierSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    onSearch(value);
  }, [onSearch]);

  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 focus:ring-2 transition-all duration-300"
        />
      </div>
    </div>
  );
}