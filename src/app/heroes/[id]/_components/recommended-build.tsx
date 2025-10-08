import { Item, RecommendedBuild, Spell, Emblem } from "@/types/database";
import React from "react";
import {
  getItemByIdAction,
  getSpellByIdAction,
  getEmblemByIdAction,
} from "../action";
import Image from "next/image";

// Helper function to process item IDs from a single build
async function processBuildItems(buildItems: string[] | null): Promise<Item[]> {
  if (!buildItems) return [];

  const itemIds: string[] = buildItems
    .flatMap((item) => {
      if (!item || typeof item !== "string") return [];

      // Always split by comma since the data appears to be comma-separated strings
      return item
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id.length > 0);
    })
    .filter((id): id is string => id !== null && id.trim() !== "");

  const items: Item[] = (
    await Promise.all(
      itemIds.map(async (itemId) => {
        const item = await getItemByIdAction(itemId);
        return item;
      })
    )
  ).filter((i): i is Item => i !== null);

  return items;
}

// Helper function to process spell IDs from a single build
async function processBuildSpells(
  buildSpells: string[] | null
): Promise<Spell[]> {
  if (!buildSpells) return [];

  const spellIds: string[] = buildSpells
    .flatMap((spell) => {
      if (!spell || typeof spell !== "string") return [];

      // Always split by comma since the data appears to be comma-separated strings
      return spell
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id.length > 0);
    })
    .filter((id): id is string => id !== null && id.trim() !== "");

  const spells: Spell[] = (
    await Promise.all(
      spellIds.map(async (spellId) => {
        const spell = await getSpellByIdAction(spellId);
        return spell;
      })
    )
  ).filter((s): s is Spell => s !== null);

  return spells;
}

// Helper function to process emblem IDs from a single build
async function processBuildEmblems(
  buildEmblems: string[] | null
): Promise<Emblem[]> {
  if (!buildEmblems) return [];

  const emblemIds: string[] = buildEmblems
    .flatMap((emblem) => {
      if (!emblem || typeof emblem !== "string") return [];

      // Always split by comma since the data appears to be comma-separated strings
      return emblem
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id.length > 0);
    })
    .filter((id): id is string => id !== null && id.trim() !== "");

  const emblems: Emblem[] = (
    await Promise.all(
      emblemIds.map(async (emblemId) => {
        const emblem = await getEmblemByIdAction(emblemId);
        return emblem;
      })
    )
  ).filter((e): e is Emblem => e !== null);

  return emblems;
}

export default async function RecommendedBuildSection({
  build,
}: {
  build: RecommendedBuild[] | null;
}) {
  // Debug: Log the raw build data to understand the structure
  console.log("Raw recommended build data:", build);

  if (!build || build.length === 0) {
    return (
      <div>
        <h2 className="text-shadow-lg text-xl">Recommended Build</h2>
        <p className="text-sm text-gray-500 mt-2">No builds available</p>
      </div>
    );
  }

  // Process all builds and their items, spells, and emblems
  const processedBuilds = await Promise.all(
    build.map(async (buildData, index) => {
      const items = await processBuildItems(buildData.items);
      const spells = await processBuildSpells(buildData.spells);
      const emblems = await processBuildEmblems(buildData.emblems);
      return { buildData, items, spells, emblems, index };
    })
  );

  return (
    <div>
      <h2 className="text-shadow-lg text-xl mb-3">Recommended Build</h2>
      <div className="flex flex-col gap-3">
        {processedBuilds.map(({ buildData, items, spells, emblems }) => (
          <div key={buildData.id} className="flex flex-col gap-2 py-2">
            {/* Items Row */}
            <div className="flex flex-col gap-2">
              {/*  <h3 className="text-sm font-medium text-gray-300">Items:</h3> */}
              {items.length === 0 ? (
                <span className="text-sm text-gray-500">
                  No items available
                </span>
              ) : (
                <div className="flex flex-row gap-2">
                  {items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col items-center group relative"
                    >
                      <Image
                        src={item?.avatar || "/placeholder-item.png"}
                        alt={item?.name || "Item"}
                        className="w-12 h-12 rounded hover:scale-110 transition-transform"
                        width={40}
                        height={40}
                      />
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {item?.name || "Item"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-row gap-4 justify-start items-start">
              {/* Spells Row */}
              <div className="flex flex-col gap-2">
                {/* <h3 className="text-sm font-medium text-gray-300">Spells:</h3> */}
                {spells.length === 0 ? (
                  <span className="text-sm text-gray-900">
                    No spells available
                  </span>
                ) : (
                  <div className="flex flex-row gap-2">
                    {spells.map((spell, spellIndex) => (
                      <div
                        key={spellIndex}
                        className="flex flex-col items-center group relative"
                      >
                        <Image
                          src={spell?.avatar || "/placeholder-spell.png"}
                          alt={spell?.name || "Spell"}
                          className="w-8 h-8 rounded hover:scale-110 transition-transform"
                          width={32}
                          height={32}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {spell?.name || "Spell"}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Emblems Row */}
              <div className="flex flex-col gap-2 ">
                {/* <h3 className="text-sm font-medium text-gray-300">Emblems:</h3> */}
                {emblems.length === 0 ? (
                  <span className="text-sm text-gray-500">
                    No emblems available
                  </span>
                ) : (
                  <div className="flex flex-row gap-2">
                    {emblems.map((emblem, emblemIndex) => (
                      <div
                        key={emblemIndex}
                        className="flex flex-col items-center group relative"
                      >
                        <Image
                          src={emblem?.avatar || "/placeholder-emblem.png"}
                          alt={emblem?.name || "Emblem"}
                          className="w-8 h-8 rounded hover:scale-110 transition-transform"
                          width={32}
                          height={32}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {emblem?.name || "Emblem"}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
