import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/homepage_bg.png')",
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 px-12">
        <div className="flex items-center gap-3">
          <Image 
            src="/img/logo.png" 
            alt="Counter Play Logo" 
            width={400} 
            height={200}
            className="rounded-full"
          />
         {/*  <span className="text-white font-semibold text-xl">CounterPlay</span> */}
        </div>
        <Button 
          variant="outline" 
          className="bg-cyan-400 text-gray-900 border-cyan-400 hover:bg-cyan-300 font-semibold px-6"
        >
          EXPLORE
        </Button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-4">
        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          Mobile Legend Bang Bang.
        </h1>
        
        <div className="max-w-2xl mb-12">
          <p className="text-white text-lg leading-relaxed">
            Explore the complete list of <span className="text-cyan-400">Mobile Legends heroes</span> and their roles.
          </p>
          <p className="text-white text-lg leading-relaxed">
            Check recommended builds, <span className="text-cyan-400">best counters</span>, and tips to dominate
          </p>
          <p className="text-white text-lg leading-relaxed">
            your matches.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/heroes">
            <Button 
              className="bg-slate-700/80 text-white border border-slate-600 hover:bg-slate-600/80 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
              variant="outline"
            >
              Counter picks
            </Button>
          </Link>
          
          <Link href="/heroes-tier">
            <Button 
              className="bg-slate-700/80 text-white border border-slate-600 hover:bg-slate-600/80 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
              variant="outline"
            >
              Hero Tiers
            </Button>
          </Link>
          
          <Link href="/items">
            <Button 
              className="bg-slate-700/80 text-white border border-slate-600 hover:bg-slate-600/80 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
              variant="outline"
            >
              Items
            </Button>
          </Link>
          
          <Link href="/heroes-synergy">
            <Button 
              className="bg-slate-700/80 text-white border border-slate-600 hover:bg-slate-600/80 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
              variant="outline"
            >
              Hero Synergy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
