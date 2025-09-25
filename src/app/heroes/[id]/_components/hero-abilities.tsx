import { Ability, Hero } from '@/types/database'
import Image from 'next/image'
import React from 'react'
import { getHeroAbilitiesByIdAction } from '../action'



export default async function HeroAbilities({
    hero
}: {
    hero: Hero
}) {

    const abilities: Ability[] | null = await getHeroAbilitiesByIdAction(hero.id);

  return (
    <div className='flex flex-col gap-3 justify-end ml-auto'>
        <h2 className='w-fit p-2 text-2xl font-black text-white rounded text-shadow-lg text-shadow-slate-800'>
            Abilities
        </h2>
        <div className='flex flex-row gap-3'>
            {abilities?.map((ability, index) => (
                <div key={index} className='flex flex-col gap-1'>
                    <Image
                        src={ability.avatar || "/placeholder-ability.png"}
                        alt={ability.name || "Ability"}
                        width={60}
                        height={60}
                    />
         
                </div>
            ))}
        </div>
    </div>
  )
}
