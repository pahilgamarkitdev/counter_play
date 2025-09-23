import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Heroes</h1>
          <p className="text-gray-300 text-lg mb-8">
            Explore the complete list of Mobile Legends heroes and their roles.
          </p>
          
          <div className="bg-gray-800/50 rounded-lg p-12">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-400 mb-6">
              This page will feature comprehensive hero information, counter picks, and detailed guides.
            </p>
            <Button className="bg-cyan-400 text-gray-900 hover:bg-cyan-300">
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}