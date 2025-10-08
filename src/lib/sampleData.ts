import { Hero, Spell, Emblem } from '@/types/database';

// Sample hero data as fallback when Supabase is not available
export const sampleHeroes: Hero[] = [
  {
    id: '05459e8b-e38c-4f62-8eb0-14f8a2cb1be7',
    name: 'Kagura',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/kagura/image%20124.png',
    category: 'Mage',
    tier: 'B',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/kagura/kagura%20ml.jpg',
    alias: 'Onmyouji Master',
    created_at: '2025-09-21 14:00:16.499785+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '05595c05-21d1-48fd-b298-ce40136f4c7a',
    name: 'Argus',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/argus/image%2036.png',
    category: 'Fighter',
    tier: 'B',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/argus/argus%20ml.jpg',
    alias: 'Dark Angel',
    created_at: '2025-09-20 12:46:58.852967+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '096047ec-9a41-423e-a269-b629d37e62e0',
    name: 'Lapu-Lapu',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/lapu-lapu/image%2025.png',
    category: 'Fighter',
    tier: 'A',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/lapu-lapu/lapu-lapu%20ml.jpg',
    alias: 'Courageous Blade',
    created_at: '2025-09-21 14:49:39.999775+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '0bdd7f92-f8a2-467e-93db-782363be87f1',
    name: 'Alpha',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/alpha/image%2050.png',
    category: 'Fighter',
    tier: 'A',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/alpha/alpha%20ml.jpg',
    alias: 'Blade of Enmity',
    created_at: '2025-09-20 12:43:25.62565+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '0c1c6299-bde9-4109-9da9-fab6bb4cace1',
    name: 'Badang',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/badang/image%2026.png',
    category: 'Fighter',
    tier: 'S',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/badang/image%20570.png',
    alias: 'Tribal Warrior',
    created_at: '2025-09-20 12:52:04.261348+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '16103d72-8633-4878-bd6e-c9ac81d09df4',
    name: 'Benedetta',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/benedetta/image%2074.png',
    category: 'Assassin',
    tier: 'A',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/benedetta/benedetta%20ml.jpg',
    alias: 'Shadow Ranger',
    created_at: '2025-09-20 13:07:44.354855+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '11459c47-67f1-4224-b6d2-4db78d89198e',
    name: 'Akai',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/akai/image%20107.png',
    category: 'Tank',
    tier: 'C',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/akai/akai%20ml.webp',
    alias: 'Panda Warrior',
    created_at: '2025-09-20 12:39:18.92641+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '196acdd0-70c2-4d7d-9751-20190e2eb4e9',
    name: 'Ixia',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/ixia/image%2085.png',
    category: 'Marksman',
    tier: 'B',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/ixia/ixia%20ml.jpg',
    alias: 'Arclight Outlaw',
    created_at: '2025-09-21 13:51:59.366374+00',
    lane: null,
    category_avatar: null
  },
  {
    id: '2b28b346-5b97-40de-9e08-eb476edcf992',
    name: 'Kalea',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/kalea/image%20141.png',
    category: 'Support',
    tier: 'S',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/kalea/kalea%20ml.jpg',
    alias: 'Surging Wave',
    created_at: '2025-09-21 14:05:57.093452+00',
    lane: null,
    category_avatar: null
  },
  {
    id: 'dd7f17e6-df77-4e74-9d68-dd5386d71dad',
    name: 'Granger',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/granger/image%2083.png',
    category: 'Marksman',
    tier: 'S',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/granger/granger%20ml.jpg',
    alias: 'Death Chanter',
    created_at: '2025-09-21 11:31:13.400691+00',
    lane: null,
    category_avatar: null
  }
];

// Sample spell data based on the UI shown in the image
export const sampleSpells: Spell[] = [
  {
    id: 'spell-execute',
    name: 'Execute',
    description: [
      'Low HP Execution',
      'Cooldown: 90s.',
      'Deals 240-800pts of true damage.'
    ],
    avatar: '/img/spells/execute.png', // Based on the red icon in the UI
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-retribution', 
    name: 'Retribution',
    description: [
      'Jungle Special',
      'Cooldown: 35s.',
      'Deals 600-1440pts (true damage) to nearby jungle monsters.'
    ],
    avatar: '/img/spells/retribution.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-inspire',
    name: 'Inspire', 
    description: [
      'Enhance Basic Attacks',
      'Cooldown: 75s.',
      'The basic attack will ignore 25pts of the target\'s defense and increase your hero attack speed by 55% for 5s.'
    ],
    avatar: '/img/spells/inspire.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-sprint',
    name: 'Sprint',
    description: [
      'Long-Lasting Speed Up',
      'Cooldown: 100s.',
      'Immediately increases movement speed 42%.'
    ], 
    avatar: '/img/spells/sprint.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-revitalize',
    name: 'Revitalize',
    description: [
      'Large AOE Heal',
      'Cooldown: 75s.',
      'Regens 15% of the hero\'s HP and regens up to 15% HP for surrounding allies around the hero.'
    ],
    avatar: '/img/spells/revitalize.png', 
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-aegis',
    name: 'Aegis',
    description: [
      'Protect Squishy Heroes',
      'Cooldown: 75s.',
      'Summons a shield to encase the hero, able to land and basic attack (including turrets) for 5s.'
    ],
    avatar: '/img/spells/aegis.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-petrify',
    name: 'Petrify',
    description: [
      'AOE Control',
      'Cooldown: 75s.',
      'Deals 115-325 magic damage to enemies (increases with level) and stuns target for 0.7s.'
    ],
    avatar: '/img/spells/petrify.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-purify',
    name: 'Purify',
    description: [
      'Cleanse Debuffs',
      'Cooldown: 90s.',
      'Immediately remove crowd control and grants immunity for 1s and increase movement speed by 30%.'
    ],
    avatar: '/img/spells/purify.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-flameshot',
    name: 'Flameshot',
    description: [
      'Attack and Defend',
      'Cooldown: 50s.'
    ],
    avatar: '/img/spells/flameshot.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-flicker',
    name: 'Flicker',
    description: [
      'Mobility',
      'Cooldown: 100s.'
    ],
    avatar: '/img/spells/flicker.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-arrival',
    name: 'Arrival',
    description: [
      'Long-range Support',
      'Cooldown: 100s.'
    ],
    avatar: '/img/spells/arrival.png',
    created_at: '2025-10-09 00:00:00+00'
  },
  {
    id: 'spell-vengeance',
    name: 'Vengeance',
    description: [
      'Reflect Damage',
      'Cooldown: 90s.'
    ],
    avatar: '/img/spells/vengeance.png',
    created_at: '2025-10-09 00:00:00+00'
  }
];

export function getSampleHeroesByCategory(category: string): Hero[] {
  if (category === 'All') return sampleHeroes;
  
  return sampleHeroes.filter(hero => {
    if (!hero.category) return false;
    const heroCategory = hero.category.toLowerCase();
    const targetCategory = category.toLowerCase();
    return heroCategory.includes(targetCategory);
  });
}

export function searchSampleHeroes(searchTerm: string): Hero[] {
  const term = searchTerm.toLowerCase();
  return sampleHeroes.filter(hero => 
    hero.name?.toLowerCase().includes(term) || 
    hero.alias?.toLowerCase().includes(term)
  );
}

export function searchSampleSpells(searchTerm: string): Spell[] {
  const term = searchTerm.toLowerCase();
  return sampleSpells.filter(spell => 
    spell.name?.toLowerCase().includes(term)
  );
}

// Sample emblem data based on the UI images
export const sampleEmblems: Emblem[] = [
  // Main Emblem - Common
  {
    id: 'emblem-common',
    name: 'Common',
    avatar: '/img/emblems/common.png',
    stats: ['Hybrid Regen +12.00', 'HP +275.00', 'Adaptive Attack +22.00'],
    description: 'Basic emblem suitable for all hero types',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Main Emblem - Tank
  {
    id: 'emblem-tank',
    name: 'Tank',
    avatar: '/img/emblems/tank.png',
    stats: ['HP +500', 'Hybrid Defense +10.00', 'HP Regen +4.00'],
    description: 'Specialized emblem for tank heroes',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Main Emblem - Assassin
  {
    id: 'emblem-assassin',
    name: 'Assassin',
    avatar: '/img/emblems/assassin.png',
    stats: ['Adaptive Penetration +14.00', 'Adaptive Attack +10.00', 'Movement Speed +3.00%'],
    description: 'Optimized for assassin heroes',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Main Emblem - Mage
  {
    id: 'emblem-mage',
    name: 'Mage',
    avatar: '/img/emblems/mage.png',
    stats: ['Magic Power +30.00', 'Cooldown Reduction +5.00%', 'Magic Penetration +8.00'],
    description: 'Perfect for mage heroes',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Main Emblem - Fighter
  {
    id: 'emblem-fighter',
    name: 'Fighter',
    avatar: '/img/emblems/fighter.png',
    stats: ['Spell Vamp +10.00%', 'Adaptive Attack +22.00', 'Hybrid Defense +6.00'],
    description: 'Ideal for fighter heroes',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Main Emblem - Support
  {
    id: 'emblem-support',
    name: 'Support',
    avatar: '/img/emblems/support.png',
    stats: ['Healing Effect +12.00%', 'Cooldown Reduction +10.00%', 'Movement Speed +6.00%'],
    description: 'Designed for support heroes',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Main Emblem - Marksman
  {
    id: 'emblem-marksman',
    name: 'Marksman',
    avatar: '/img/emblems/marksman.png',
    stats: ['Healing Effect +12.00%', 'Cooldown Reduction +10.00%', 'Movement Speed +6.00%'],
    description: 'Tailored for marksman heroes',
    category: 'Main_Emblem',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Trill
  {
    id: 'emblem-trill',
    name: 'Trill',
    avatar: '/img/emblems/trill.png',
    stats: ['Gain 16 Adaptive Attack'],
    description: 'Increases adaptive attack power',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Swift
  {
    id: 'emblem-swift',
    name: 'Swift',
    avatar: '/img/emblems/swift.png',
    stats: ['Gain 10% extra Attack Speed'],
    description: 'Increases attack speed',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Vitality
  {
    id: 'emblem-vitality',
    name: 'Vitality',
    avatar: '/img/emblems/vitality.png',
    stats: ['Gain 225 extra Max HP'],
    description: 'Increases maximum health points',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Rupture
  {
    id: 'emblem-rupture',
    name: 'Rupture',
    avatar: '/img/emblems/rupture.png',
    stats: ['Gain 5 Adaptive Penetration'],
    description: 'Increases adaptive penetration',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Inspire
  {
    id: 'emblem-inspire',
    name: 'Inspire',
    avatar: '/img/emblems/inspire.png',
    stats: ['Gain 5% extra Cooldown Reduction'],
    description: 'Reduces cooldown time',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Firmness
  {
    id: 'emblem-firmness',
    name: 'Firmness',
    avatar: '/img/emblems/firmness.png',
    stats: ['Gain 6 extra Physical & Magic Defense'],
    description: 'Increases defensive capabilities',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Agility
  {
    id: 'emblem-agility',
    name: 'Agility',
    avatar: '/img/emblems/agility.png',
    stats: ['Gain 4% extra Movement Speed'],
    description: 'Increases movement speed',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-1 - Fatal
  {
    id: 'emblem-fatal',
    name: 'Fatal',
    avatar: '/img/emblems/fatal.png',
    stats: ['Gain 3% extra Crit Chance and 10% extra Crit Damage'],
    description: 'Increases critical hit chance and damage',
    category: 'Emblem_Section_1',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-2 - Mastery
  {
    id: 'emblem-mastery',
    name: 'Mastery',
    avatar: '/img/emblems/mastery.png',
    stats: ['Gain 8% extra Spell Vamp'],
    description: 'Increases spell vampirism',
    category: 'Emblem_Section_2',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-2 - Mystery Shop
  {
    id: 'emblem-mystery-shop',
    name: 'Mystery Shop',
    avatar: '/img/emblems/mystery-shop.png',
    stats: ['Gain 60 extra Gold'],
    description: 'Increases gold acquisition',
    category: 'Emblem_Section_2',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-2 - Seasoned Hunter
  {
    id: 'emblem-seasoned-hunter',
    name: 'Seasoned Hunter',
    avatar: '/img/emblems/seasoned-hunter.png',
    stats: ['Gain 6% extra Exp'],
    description: 'Increases experience gain',
    category: 'Emblem_Section_2',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-2 - Wilderness Blessing
  {
    id: 'emblem-wilderness-blessing',
    name: 'Wilderness Blessing',
    avatar: '/img/emblems/wilderness-blessing.png',
    stats: ['Gain 8% extra Hybrid Regen'],
    description: 'Increases health and mana regeneration',
    category: 'Emblem_Section_2',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-3 - Quantum Charge
  {
    id: 'emblem-quantum-charge',
    name: 'Quantum Charge',
    avatar: '/img/emblems/quantum-charge.png',
    stats: ['Gain 12% extra Shield'],
    description: 'Increases shield effectiveness',
    category: 'Emblem_Section_3',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-3 - Impure Rage
  {
    id: 'emblem-impure-rage',
    name: 'Impure Rage',
    avatar: '/img/emblems/impure-rage.png',
    stats: ['Gain 8% extra True Damage'],
    description: 'Increases true damage output',
    category: 'Emblem_Section_3',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-3 - Festival of Blood
  {
    id: 'emblem-festival-of-blood',
    name: 'Festival of Blood',
    avatar: '/img/emblems/festival-of-blood.png',
    stats: ['Gain 10% extra Lifesteal'],
    description: 'Increases lifesteal capability',
    category: 'Emblem_Section_3',
    created_at: '2025-10-09 00:00:00+00'
  },
  // Emblem Section-3 - Concussive Blast
  {
    id: 'emblem-concussive-blast',
    name: 'Concussive Blast',
    avatar: '/img/emblems/concussive-blast.png',
    stats: ['Gain 15% extra Slow Effect'],
    description: 'Increases slow effect duration and strength',
    category: 'Emblem_Section_3',
    created_at: '2025-10-09 00:00:00+00'
  }
];

export function getSampleEmblemsByCategory(category: string): Emblem[] {
  if (category === 'All') return sampleEmblems;
  
  return sampleEmblems.filter(emblem => {
    if (!emblem.category) return false;
    const emblemCategory = emblem.category.toLowerCase();
    const targetCategory = category.toLowerCase();
    return emblemCategory.includes(targetCategory);
  });
}

export function searchSampleEmblems(searchTerm: string): Emblem[] {
  const term = searchTerm.toLowerCase();
  return sampleEmblems.filter(emblem => 
    emblem.name?.toLowerCase().includes(term) ||
    emblem.description?.toLowerCase().includes(term) ||
    emblem.stats?.some(stat => stat.toLowerCase().includes(term))
  );
}