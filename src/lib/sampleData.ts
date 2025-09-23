import { Hero } from '@/types/database';

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
    created_at: '2025-09-21 14:00:16.499785+00'
  },
  {
    id: '05595c05-21d1-48fd-b298-ce40136f4c7a',
    name: 'Argus',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/argus/image%2036.png',
    category: 'Fighter',
    tier: 'B',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/argus/argus%20ml.jpg',
    alias: 'Dark Angel',
    created_at: '2025-09-20 12:46:58.852967+00'
  },
  {
    id: '096047ec-9a41-423e-a269-b629d37e62e0',
    name: 'Lapu-Lapu',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/lapu-lapu/image%2025.png',
    category: 'Fighter',
    tier: 'A',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/lapu-lapu/lapu-lapu%20ml.jpg',
    alias: 'Courageous Blade',
    created_at: '2025-09-21 14:49:39.999775+00'
  },
  {
    id: '0bdd7f92-f8a2-467e-93db-782363be87f1',
    name: 'Alpha',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/alpha/image%2050.png',
    category: 'Fighter',
    tier: 'A',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/alpha/alpha%20ml.jpg',
    alias: 'Blade of Enmity',
    created_at: '2025-09-20 12:43:25.62565+00'
  },
  {
    id: '0c1c6299-bde9-4109-9da9-fab6bb4cace1',
    name: 'Badang',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/badang/image%2026.png',
    category: 'Fighter',
    tier: 'S',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/badang/image%20570.png',
    alias: 'Tribal Warrior',
    created_at: '2025-09-20 12:52:04.261348+00'
  },
  {
    id: '16103d72-8633-4878-bd6e-c9ac81d09df4',
    name: 'Benedetta',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/benedetta/image%2074.png',
    category: 'Assassin',
    tier: 'A',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/benedetta/benedetta%20ml.jpg',
    alias: 'Shadow Ranger',
    created_at: '2025-09-20 13:07:44.354855+00'
  },
  {
    id: '11459c47-67f1-4224-b6d2-4db78d89198e',
    name: 'Akai',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/akai/image%20107.png',
    category: 'Tank',
    tier: 'C',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/akai/akai%20ml.webp',
    alias: 'Panda Warrior',
    created_at: '2025-09-20 12:39:18.92641+00'
  },
  {
    id: '196acdd0-70c2-4d7d-9751-20190e2eb4e9',
    name: 'Ixia',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/ixia/image%2085.png',
    category: 'Marksman',
    tier: 'B',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/ixia/ixia%20ml.jpg',
    alias: 'Arclight Outlaw',
    created_at: '2025-09-21 13:51:59.366374+00'
  },
  {
    id: '2b28b346-5b97-40de-9e08-eb476edcf992',
    name: 'Kalea',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/kalea/image%20141.png',
    category: 'Support',
    tier: 'S',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/kalea/kalea%20ml.jpg',
    alias: 'Surging Wave',
    created_at: '2025-09-21 14:05:57.093452+00'
  },
  {
    id: 'dd7f17e6-df77-4e74-9d68-dd5386d71dad',
    name: 'Granger',
    avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/granger/image%2083.png',
    category: 'Marksman',
    tier: 'S',
    bg_avatar: 'https://lteehdlwelegxomrafsn.supabase.co/storage/v1/object/public/public_bucket/hereos/granger/granger%20ml.jpg',
    alias: 'Death Chanter',
    created_at: '2025-09-21 11:31:13.400691+00'
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