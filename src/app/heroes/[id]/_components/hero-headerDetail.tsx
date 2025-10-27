import React from 'react'

import { Hero } from "@/types/database";
import Image from 'next/image';
export default function HeaderDetail({
    hero
}: {    
    hero: Hero
}) {

  return (
    <div
        className='flex flex-row gap-4 ml-auto justify-end'
    >
        {/* lane icon */}
        <Image
            src={hero.lane || "/placeholder-hero.png"}
            alt={hero.name || "Hero"}
            width={70}
            height={70}
            priority
        />


        {/* category icon */}
        <Image
            src={hero.category_avatar || "/placeholder-hero.png"}
            alt={hero.name || "Hero"}
            width={70}
            height={70}
            priority
        />

        {/* avatar */}
        <Image
            src={hero.avatar || "/placeholder-hero.png"}
            alt={hero.name || "Hero"}
            width={70}
            height={70}
            priority
        />
    </div>
  )
}
