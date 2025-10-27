import { Hero, RecommendedBuild } from "@/types/database";
import React from "react";
import {
  getHeroRecommendedBuildByIdAction,
  getHeroStrongAgainstByIdAction,
  getHeroWeakAgainstByIdAction,
} from "../action";
import Image from "next/image";
import RecommendedBuildSection from "./recommended-build";

export default async function HeroFooter({ hero }: { hero: Hero }) {
  const strongAgainst: Hero[] | null = await getHeroStrongAgainstByIdAction(
    hero.id
  );

  const weakAgainst: Hero[] | null = await getHeroWeakAgainstByIdAction(
    hero.id
  );

  const recommendedBuild: RecommendedBuild[] | null = await getHeroRecommendedBuildByIdAction(hero.id);

  return (
    <div className="flex flex-row w-full h-full mt-auto p-4 gap-8 justify-between relative px-18 ">
      {/* opaque background */}
      <div className="absolute inset-0 bg-slate-400 opacity-50 -z-10"></div>
      {/* strong against section */}
      <div>
        <h2 className="text-shadow-lg text-xl">Strong Against</h2>
        <ul className="flex flex-row gap-4 mt-2">
          {strongAgainst?.map((hero) => (
            <li key={hero.id} className="flex flex-row items-center gap-2">
              <Image
                src={hero.avatar || "/placeholder-hero.png"}
                alt={hero.name || "Hero"}
                width={60}
                height={60}
                priority
              />
            </li>
          ))}
        </ul>
      </div>

      {/* weak against section */}
      <div>
        <h2 className="text-shadow-lg text-xl">Weak Against</h2>
        <ul className="flex flex-row gap-4 mt-2">
          {weakAgainst?.map((hero) => (
            <li key={hero.id} className="flex flex-row items-center gap-2">
              <Image
                src={hero.avatar || "/placeholder-hero.png"}
                alt={hero.name || "Hero"}
                width={60}
                height={60}
                priority
              />
            </li>
          ))}
        </ul>
      </div>

      {/* recommended build */}
      <RecommendedBuildSection build={recommendedBuild} />
    </div>
  );
}
