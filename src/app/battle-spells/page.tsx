import React from "react";
import { getAllSpellsAction } from "./actions";
import SpellsClient from "./_components/SpellsClient";

export default async function BattleSpellsPage() {
  // Fetch all spells on the server
  const spells = await getAllSpellsAction();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Battle Spells in Mobile Legend Bang Bang
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Optimize your game play with the perfect spell for your hero.
          </p>
        </div>

        {/* Client-side filtering and display */}
        <SpellsClient initialSpells={spells} />
      </div>
    </div>
  );
}