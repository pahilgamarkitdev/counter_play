import React from "react";
import { getAllHeroesAction } from "./actions";
import HeroesClient from "./_components/HeroesClient";

export default async function HeroesPage() {
  // Fetch all heroes on the server
  const heroes = await getAllHeroesAction();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Heroes in Mobile Legends Bang Bang
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Explore playable characters, each with unique roles, abilities, and
            playstyles, used by players to battle in team-based matches.
          </p>
        </div>

        {/* Client-side filtering and display */}
        <HeroesClient initialHeroes={heroes} />
      </div>
    </div>
  );
}
