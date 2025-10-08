'use server';

import { createClient } from '../../../utils/supabase/server';
import { DuoSynergy, TrioSynergy, FiveSynergy, Hero } from '@/types/database';

// Sample heroes data as fallback
const sampleHeroes: Hero[] = [
  {
    id: '1',
    name: 'Alucard',
    avatar: '/heroes/alucard.png',
    category: 'Fighter',
    tier: 'A',
    bg_avatar: null,
    alias: 'Demon Hunter',
    lane: 'Jungle',
    category_avatar: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Miya',
    avatar: '/heroes/miya.png',
    category: 'Marksman',
    tier: 'B',
    bg_avatar: null,
    alias: 'Moonlight Archer',
    lane: 'Gold Lane',
    category_avatar: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Tigreal',
    avatar: '/heroes/tigreal.png',
    category: 'Tank',
    tier: 'A',
    bg_avatar: null,
    alias: 'Warrior of Dawn',
    lane: 'Roam',
    category_avatar: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Eudora',
    avatar: '/heroes/eudora.png',
    category: 'Mage',
    tier: 'B',
    bg_avatar: null,
    alias: 'Lightning Sorceress',
    lane: 'Mid Lane',
    category_avatar: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Saber',
    avatar: '/heroes/saber.png',
    category: 'Assassin',
    tier: 'A',
    bg_avatar: null,
    alias: 'Spacetime Swordsman',
    lane: 'Jungle',
    category_avatar: null,
    created_at: new Date().toISOString(),
  },
];

// Sample synergy data as fallback
const sampleDuoSynergies: DuoSynergy[] = [
  {
    id: 1,
    hero_ids: '1,2', // Alucard + Miya
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    hero_ids: '3,4', // Tigreal + Eudora
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    hero_ids: '2,5', // Miya + Saber
    created_at: new Date().toISOString(),
  },
];

const sampleTrioSynergies: TrioSynergy[] = [
  {
    id: 1,
    hero_ids: ['1', '2', '3'], // Alucard + Miya + Tigreal
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    hero_ids: ['4', '5', '3'], // Eudora + Saber + Tigreal
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    hero_ids: ['1', '4', '5'], // Alucard + Eudora + Saber
    created_at: new Date().toISOString(),
  },
];

const sampleFiveSynergies: FiveSynergy[] = [
  {
    id: 1,
    hero_ids: '1,2,3,4,5', // All sample heroes
    created_at: new Date().toISOString(),
  },
];

// Duo Synergy Actions
export async function getAllDuoSynergiesAction(): Promise<DuoSynergy[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('duo_synergy')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Supabase error fetching duo synergies:', error);
      console.log('Using sample data as fallback');
      return sampleDuoSynergies;
    }
    
    console.log('Successfully fetched duo synergies from server:', data?.length || 0);
    return data || sampleDuoSynergies;
  } catch (err) {
    console.error('Network error fetching duo synergies:', err);
    console.log('Using sample data as fallback');
    return sampleDuoSynergies;
  }
}

// Trio Synergy Actions
export async function getAllTrioSynergiesAction(): Promise<TrioSynergy[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('trio_synergy')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Supabase error fetching trio synergies:', error);
      console.log('Using sample data as fallback');
      return sampleTrioSynergies;
    }
    
    console.log('Successfully fetched trio synergies from server:', data?.length || 0);
    if (data && data.length > 0) {
      console.log('Sample trio synergy data:', JSON.stringify(data[0], null, 2));
    }
    return data || sampleTrioSynergies;
  } catch (err) {
    console.error('Network error fetching trio synergies:', err);
    console.log('Using sample data as fallback');
    return sampleTrioSynergies;
  }
}

// Five Synergy Actions
export async function getAllFiveSynergiesAction(): Promise<FiveSynergy[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('five_synergy')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Supabase error fetching five synergies:', error);
      console.log('Using sample data as fallback');
      return sampleFiveSynergies;
    }
    
    console.log('Successfully fetched five synergies from server:', data?.length || 0);
    return data || sampleFiveSynergies;
  } catch (err) {
    console.error('Network error fetching five synergies:', err);
    console.log('Using sample data as fallback');
    return sampleFiveSynergies;
  }
}

// Helper function to get heroes by IDs
export async function getHeroesByIdsAction(heroIds: string[]): Promise<Hero[]> {
  try {
    // Return empty array if no hero IDs provided
    if (!heroIds || heroIds.length === 0) {
      console.log('No hero IDs provided');
      return [];
    }

    // Filter out empty or invalid IDs and ensure they don't contain commas
    const validHeroIds = heroIds
      .filter(id => id && id.trim() !== '')
      .map(id => id.trim())
      .filter(id => {
        // Check if this ID contains commas (which means it's not properly parsed)
        if (id.includes(',')) {
          console.warn('Found comma-separated ID that should have been split:', id);
          return false;
        }
        return true;
      });
      
    if (validHeroIds.length === 0) {
      console.log('No valid hero IDs found after filtering');
      return [];
    }

    console.log('About to query database with hero IDs:', validHeroIds.slice(0, 3), `... (${validHeroIds.length} total)`);

    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('hero')
      .select('*')
      .in('id', validHeroIds)
      .order('name');
      
    if (error) {
      console.error('Error fetching heroes by IDs:', error);
      // Fallback to sample heroes for matching IDs
      const matchingHeroes = sampleHeroes.filter(hero => validHeroIds.includes(hero.id));
      console.log(`Using sample data fallback: ${matchingHeroes.length} heroes found`);
      return matchingHeroes;
    }
    
    console.log(`Successfully fetched ${data?.length || 0} heroes from ${validHeroIds.length} requested IDs`);
    return data || [];
  } catch (err) {
    console.error('Network error fetching heroes by IDs:', err);
    return [];
  }
}

// Combined action to get all synergies with hero data
export async function getAllSynergiesWithHeroesAction() {
  try {
    const [duoSynergies, trioSynergies, fiveSynergies] = await Promise.all([
      getAllDuoSynergiesAction(),
      getAllTrioSynergiesAction(),
      getAllFiveSynergiesAction(),
    ]);

    console.log(`Fetched synergies - Duo: ${duoSynergies.length}, Trio: ${trioSynergies.length}, Five: ${fiveSynergies.length}`);

    // Get all unique hero IDs from all synergies
    const allHeroIds = new Set<string>();
    
    duoSynergies.forEach((synergy) => {
      if (synergy.hero_ids && synergy.hero_ids.trim()) {
        // Handle both comma-separated strings and single IDs
        const ids = synergy.hero_ids.includes(',') 
          ? synergy.hero_ids.split(',').map((id: string) => id.trim()).filter((id: string) => id)
          : [synergy.hero_ids.trim()];
        ids.forEach((id: string) => allHeroIds.add(id));
      }
    });
    
    trioSynergies.forEach((synergy) => {
      if (synergy.hero_ids) {
        if (Array.isArray(synergy.hero_ids)) {
          // Handle array format - need to check if each array element contains comma-separated values
          synergy.hero_ids.forEach((heroIdItem: string) => {
            if (heroIdItem && heroIdItem.trim()) {
              // Check if this array element contains comma-separated IDs
              if (heroIdItem.includes(',')) {
                const ids = heroIdItem.split(',').map((id: string) => id.trim()).filter((id: string) => id);
                ids.forEach((id: string) => allHeroIds.add(id));
              } else {
                // Single ID
                allHeroIds.add(heroIdItem.trim());
              }
            }
          });
        } else {
          // Handle string format (in case database returns string)
          const heroIdsStr = synergy.hero_ids as string;
          const ids = heroIdsStr.includes(',')
            ? heroIdsStr.split(',').map((id: string) => id.trim()).filter((id: string) => id)
            : [heroIdsStr.trim()];
          ids.forEach((id: string) => allHeroIds.add(id));
        }
      }
    });
    
    fiveSynergies.forEach((synergy) => {
      if (synergy.hero_ids && synergy.hero_ids.trim()) {
        // Handle both comma-separated strings and single IDs
        const ids = synergy.hero_ids.includes(',')
          ? synergy.hero_ids.split(',').map((id: string) => id.trim()).filter((id: string) => id)
          : [synergy.hero_ids.trim()];
        ids.forEach((id: string) => allHeroIds.add(id));
      }
    });

    console.log(`Found ${allHeroIds.size} unique hero IDs across all synergies`);

    // Convert set to array and validate each ID
    const heroIdsArray = Array.from(allHeroIds);
    console.log('Sample hero IDs to query:', heroIdsArray.slice(0, 5));
    
    // Double check for any malformed IDs
    const cleanedHeroIds = heroIdsArray.filter(id => {
      // Must be a string, non-empty, and look like a UUID (no brackets, quotes, etc.)
      if (typeof id !== 'string' || !id.trim()) {
        console.warn('Filtering out empty or non-string ID:', id);
        return false;
      }
      
      const cleanId = id.trim();
      
      // Check for malformed IDs (containing brackets, quotes, etc.)
      if (cleanId.includes('[') || cleanId.includes(']') || cleanId.includes('"') || cleanId.includes("'")) {
        console.warn('Filtering out malformed ID:', cleanId);
        return false;
      }
      
      // Basic UUID format check (36 characters with dashes)
      if (cleanId.length !== 36 || !cleanId.includes('-')) {
        console.warn('Filtering out non-UUID format ID:', cleanId);
        return false;
      }
      
      return true;
    });

    console.log(`Cleaned hero IDs: ${cleanedHeroIds.length} out of ${heroIdsArray.length} total`);

    // Fetch all heroes at once
    const heroes = await getHeroesByIdsAction(cleanedHeroIds);
    const heroMap = new Map(heroes.map(hero => [hero.id, hero]));

    console.log(`Successfully mapped ${heroMap.size} heroes`);

    return {
      duoSynergies,
      trioSynergies,
      fiveSynergies,
      heroMap,
    };
  } catch (err) {
    console.error('Error fetching synergies with heroes:', err);
    return {
      duoSynergies: sampleDuoSynergies,
      trioSynergies: sampleTrioSynergies,
      fiveSynergies: sampleFiveSynergies,
      heroMap: new Map(),
    };
  }
}