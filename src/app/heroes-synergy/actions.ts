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

    console.log('find me five synergy data', data);
    
    // Log a sample to see the exact format
    if (data && data.length > 0) {
      console.log('Sample five synergy hero_ids:', JSON.stringify(data[0].hero_ids));
      console.log('Type:', typeof data[0].hero_ids);
    }
      
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

    // Filter out empty or invalid IDs
    const validHeroIds = heroIds
      .filter(id => id && id.trim() !== '')
      .map(id => id.trim());
      
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
      console.error('Error fetching heroes by IDs:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      console.error('Sample of IDs that failed:', validHeroIds.slice(0, 5));
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
    
    // DuoSynergy: hero_ids might be JSON stringified array
    duoSynergies.forEach((synergy) => {
      if (synergy.hero_ids && synergy.hero_ids.trim()) {
        const idsString = synergy.hero_ids.trim();
        let ids: string[] = [];
        
        // Check if it's a JSON stringified array
        if (idsString.startsWith('[') && idsString.endsWith(']')) {
          try {
            const parsed = JSON.parse(idsString);
            if (Array.isArray(parsed)) {
              // Check if array elements contain commas and split them
              ids = parsed.flatMap(id => 
                id.includes(',') ? id.split(',').map((s: string) => s.trim()) : [id.trim()]
              ).filter(id => id);
            }
          } catch {
            ids = idsString.split(',').map(id => id.trim()).filter(id => id);
          }
        } else {
          ids = idsString.split(',').map(id => id.trim()).filter(id => id);
        }
        
        console.log(`Duo synergy ${synergy.id}: found ${ids.length} hero IDs`, ids);
        ids.forEach(id => allHeroIds.add(id));
      }
    });
    
    // TrioSynergy: hero_ids is an array of strings, but each element might contain comma-separated IDs
    trioSynergies.forEach((synergy) => {
      if (synergy.hero_ids && Array.isArray(synergy.hero_ids)) {
        const ids: string[] = [];
        synergy.hero_ids.forEach((item) => {
          // Check if the array element contains comma-separated values
          if (item && item.includes(',')) {
            const splitIds = item.split(',').map(id => id.trim()).filter(id => id);
            ids.push(...splitIds);
          } else if (item && item.trim()) {
            ids.push(item.trim());
          }
        });
        console.log(`Trio synergy ${synergy.id}: found ${ids.length} hero IDs`, ids);
        ids.forEach(id => allHeroIds.add(id));
      }
    });
    
    // FiveSynergy: hero_ids is a comma-separated string (but might be JSON stringified)
    fiveSynergies.forEach((synergy) => {
      if (synergy.hero_ids && synergy.hero_ids.trim()) {
        const idsString = synergy.hero_ids.trim();
        let ids: string[] = [];
        
        // Check if it's a JSON stringified array
        if (idsString.startsWith('[') && idsString.endsWith(']')) {
          try {
            const parsed = JSON.parse(idsString);
            if (Array.isArray(parsed)) {
              // Check if array elements contain commas and split them
              ids = parsed.flatMap(id => 
                id.includes(',') ? id.split(',').map((s: string) => s.trim()) : [id.trim()]
              ).filter(id => id);
              console.log(`Five synergy ${synergy.id}: found ${ids.length} hero IDs (parsed from JSON)`, ids);
              ids.forEach(id => allHeroIds.add(id));
              return;
            }
          } catch {
            console.warn(`Failed to parse JSON for five synergy ${synergy.id}, falling back to comma split`);
          }
        }
        
        // Default: comma-separated string
        ids = idsString.split(',').map(id => id.trim()).filter(id => id);
        console.log(`Five synergy ${synergy.id}: found ${ids.length} hero IDs`, ids);
        ids.forEach(id => allHeroIds.add(id));
      }
    });

    console.log(`Found ${allHeroIds.size} unique hero IDs across all synergies`);

    // Convert set to array
    const heroIdsArray = Array.from(allHeroIds);
    console.log('Sample hero IDs to query:', heroIdsArray.slice(0, 5));

    // Fetch all heroes at once
    const heroes = await getHeroesByIdsAction(heroIdsArray);
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