'use server';

import { createClient } from '../../../utils/supabase/server';
import { Hero } from '@/types/database';
import { sampleHeroes } from '@/lib/sampleData';
import { tierConfig, TierType, TierSection } from './constants';

export async function getAllHeroesByTierAction(): Promise<TierSection[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('hero')
      .select('*')
      .order('name');
      
    let heroes: Hero[];
    if (error) {
      console.error('Supabase error fetching heroes:', error);
      console.log('Using sample data as fallback');
      heroes = sampleHeroes;
    } else {
      heroes = data || sampleHeroes;
    }
    
    // Group heroes by tier
    const tierSections: TierSection[] = [];
    const tiers: TierType[] = ['S', 'A', 'B', 'C'];
    
    tiers.forEach(tier => {
      const tierHeroes = heroes.filter(hero => hero.tier?.toLowerCase() === tier.toLowerCase());
      if (tierHeroes.length > 0) {
        tierSections.push({
          tier,
          config: tierConfig[tier],
          heroes: tierHeroes
        });
      }
    });
    
    console.log('Successfully organized heroes by tier:', tierSections.length);
    return tierSections;
  } catch (err) {
    console.error('Network error fetching heroes by tier:', err);
    console.log('Using sample data as fallback');
    
    // Fallback with sample data
    const tierSections: TierSection[] = [];
    const tiers: TierType[] = ['S', 'A', 'B', 'C'];
    
    tiers.forEach(tier => {
      const tierHeroes = sampleHeroes.filter(hero => hero.tier?.toLowerCase() === tier.toLowerCase());
      if (tierHeroes.length > 0) {
        tierSections.push({
          tier,
          config: tierConfig[tier],
          heroes: tierHeroes
        });
      }
    });
    
    return tierSections;
  }
}

export async function searchHeroesByTierAction(searchTerm: string): Promise<TierSection[]> {
  try {
    const allTierSections = await getAllHeroesByTierAction();
    
    if (!searchTerm.trim()) {
      return allTierSections;
    }
    
    const filteredSections = allTierSections.map(section => ({
      ...section,
      heroes: section.heroes.filter(hero => 
        hero.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hero.alias?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hero.category?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.heroes.length > 0);
    
    return filteredSections;
  } catch (err) {
    console.error('Error searching heroes by tier:', err);
    return [];
  }
}