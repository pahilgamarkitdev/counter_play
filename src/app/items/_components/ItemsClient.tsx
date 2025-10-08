'use client';

import React, { useState, useMemo } from 'react';
import { Item } from '@/types/database';
import ItemCard from './ItemCard';
import { Input } from '@/components/ui/input';

interface ItemsClientProps {
  items: Item[];
}

const ITEM_CATEGORIES = ['Physical', 'Magic', 'Defense', 'Boots', 'Adaptive'];

export default function ItemsClient({ items }: ItemsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter items based on search term and category
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = !searchTerm || 
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.stats?.some(stat => stat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !selectedCategory || 
        item.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  const handleItemClick = (item: Item) => {
    console.log('Item clicked:', item);
    // TODO: Navigate to item detail page or show item details modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Items in Mobile Legend Bang Bang
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Browse through all Mobile Legends items and their detailed information.
            Filter by category or search to find specific items quickly.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="max-w-4xl mx-auto">
            <Input
              type="text"
              placeholder="Search for Items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 px-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === ''
                  ? 'bg-cyan-400 text-gray-900'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              All
            </button>
            {ITEM_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-400 text-gray-900'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onClick={handleItemClick}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No items found matching your criteria.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try adjusting your search or filter settings.
            </p>
          </div>
        )}

        {/* Items Count */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Showing {filteredItems.length} of {items.length} items
          </p>
        </div>
      </div>
    </div>
  );
}