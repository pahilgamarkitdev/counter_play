import React from 'react';
import { Button } from '@/components/ui/button';

export default function ItemsPage() {
  // Sample item data structure for demonstration
  const itemCategories = [
    {
      name: "Attack Items",
      items: [
        { name: "Blade of Despair", description: "Increases physical attack and critical damage" },
        { name: "Malefic Roar", description: "Increases physical attack and physical penetration" },
        { name: "Endless Battle", description: "Increases physical attack, mana, and cooldown reduction" },
      ]
    },
    {
      name: "Defense Items", 
      items: [
        { name: "Antique Cuirass", description: "Increases HP and physical defense" },
        { name: "Athena's Shield", description: "Increases HP and magic defense" },
        { name: "Immortality", description: "Increases HP and provides resurrection" },
      ]
    },
    {
      name: "Magic Items",
      items: [
        { name: "Lightning Truncheon", description: "Increases magic power and mana" },
        { name: "Divine Glaive", description: "Increases magic power and magic penetration" },
        { name: "Holy Crystal", description: "Increases magic power significantly" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Item Builds</h1>
          <p className="text-gray-300 text-lg">
            Create and explore optimal item builds for heroes.
          </p>
        </div>

        {/* Search/Filter Section */}
        <div className="mb-8 flex gap-4">
          <input 
            type="text" 
            placeholder="Search items..." 
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
          />
          <Button className="bg-cyan-400 text-gray-900 hover:bg-cyan-300">
            Search
          </Button>
        </div>

        {/* Item Categories */}
        <div className="space-y-8">
          {itemCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                    <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            This is a simple items page structure. More features and detailed item information will be added later.
          </p>
        </div>
      </div>
    </div>
  );
}