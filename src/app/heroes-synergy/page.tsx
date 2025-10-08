import React from "react";
import { getAllSynergiesWithHeroesAction } from "./actions";
import SynergiesClient from "./_components/SynergiesClient";

export default async function HeroesSynergyPage() {
  // Fetch all synergies with hero data on the server
  const { duoSynergies, trioSynergies, fiveSynergies, heroMap } = await getAllSynergiesWithHeroesAction();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Hero Synergy in Mobile Legends Bang Bang
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover the current meta rankings for Mobile Legends heroes.
            Find the best picks for your playstyle.
          </p>
        </div>

        {/* Client-side filtering and display */}
        <SynergiesClient 
          duoSynergies={duoSynergies}
          trioSynergies={trioSynergies}
          fiveSynergies={fiveSynergies}
          heroMap={heroMap}
        />
      </div>
    </div>
  );
}