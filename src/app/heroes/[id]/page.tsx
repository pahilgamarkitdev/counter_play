import { Hero } from "@/types/database";
import React from "react";
import { getHeroByIdAction } from "../actions";
import Image from "next/image";
import HeaderDetail from "./_components/hero-headerDetail";
import HeroAbilities from "./_components/hero-abilities";
import HeroFooter from "./_components/hero-footer";

export default async function HeroPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hero: Hero | null = await getHeroByIdAction(id);

  if (!hero) {
    return <div>Hero not found</div>;
  }

  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <Image
        src={hero.bg_avatar || "/placeholder-hero.png"}
        alt={hero.name || "Hero"}
        fill
        priority
        className="-z-10 "
      />

      <div className="flex flex-col gap-4 z-10 ml-auto justify-end mr-12 mt-12">
        <HeaderDetail hero={hero} />
        <HeroAbilities hero={hero} />
      </div>

      {/* Name and Alias Section */}
      <div className="flex flex-col justify-end ml-auto mr-28 mt-12">
        <h1 className="text-[8rem] font-bold text-shadow-lg text-shadow-slate-800">
          {hero.name || "Unknown Hero"}
        </h1>
        <p className="text-gray-300 text-[2rem] text-shadow-lg text-shadow-slate-800">
          {hero.alias || "No alias available"}
        </p>
      </div>

      {/* footer */}
  
        <HeroFooter hero={hero} />

    </div>
  );
}
