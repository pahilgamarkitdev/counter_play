import { Hero, Spell } from '@/types/database';

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